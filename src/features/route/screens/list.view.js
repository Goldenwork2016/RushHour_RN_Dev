/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  FlatList,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Divider} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import {constants} from './../../../core/constants';

const getWidth = Dimensions.get('window').width;
// const getHeight = Dimensions.get('window').height;

const DriverRouteList = ({navigation}) => {
  const [routes, setRoutes] = useState([]);
  const [duration, setDuration] = useState();
  const [legs, setLegs] = useState([]);
  const [myPlaceId, setMyPlaceId] = useState('');
  const [routePlaceId, setRoutePlaceId] = useState('');

  const fetchRoutes = async () => {
    const token = await AsyncStorage.getItem('token');
    var apiUrl = constants.apiBaseUrl + 'Routes/Current';

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    };
    fetch(apiUrl, {
      method: 'GET',
      headers: headers,
      body: JSON.stringify(),
    })
      .then(response => response.json())
      .then(response => {
        const list = response.data.list;
        const stops = list.flatMap(r => r.routeStopGroups);
        const lg = list.flatMap(r => r.directions.routes[0].legs);
        setLegs(lg);
        // console.log(lg);
        const stopItems = stops.flatMap(e => e.routeItemStops);
        setRoutes(stopItems);
        setRoutePlaceId(
          // response.data.list[0].directions.geocoded_waypoints[0].place_id,
          stopItems[0].address.fullAddress,
        );
      })
      .catch(error => {
        console.log('error');
      });
  };
  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //To Check, If Permission is granted
          getOneTimeLocation();
        } else {
          console.log('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const url =
          'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
          currentLongitude +
          ',' +
          currentLatitude +
          '&key=' +
          constants.googleApiKey;
        // console.log(url);
        fetch(url, {
          method: 'GET',
          body: JSON.stringify(),
        })
          .then(response => response.json())
          .then(response => {
            setMyPlaceId(response.results[0].place_id);
            // 40.72218,-73.849304,
            // https://maps.googleapis.com/maps/api/directions/json?destination=Millennium%20Ct,%20Columbus,%20OH%2043219,%20USA&origin=38.8758736,-117.7098362&key=AIzaSyD_ZJPQLldJW_XGdGiadvdzlrUq6-v85FI
            const url2 =
              'https://maps.googleapis.com/maps/api/directions/json?destination=' +
              routePlaceId +
              '&origin=40.72218,-73.849304' +
              // myPlaceId +
              '&key=' +
              constants.googleApiKey;
              // const url2 =
              // 'https://maps.googleapis.com/maps/api/directions/json?destination=place_id%' +
              // routePlaceId +
              // '&origin=place_id%' +
              // // myPlaceId +
              // 'ChIJQW01FyRewokRiDQuLX2jvv0&key=' +
              // constants.googleApiKey;
              console.log(url2);
            fetch(url2, {
              method: 'GET',
              body: JSON.stringify(),
            })
              .then(res => res.json())
              .then(res => {
                if (res.routes.length === 0) {
                  setDuration('N/A');
                  // console.log('empty');
                } else {
                  // setDuration(res.routes[0].legs[0].duration.text);
                  if (res.routes[0].legs[0].duration.text === '1 min') {
                    setDuration('N/A');
                  } else {
                    setDuration(res.routes[0].legs[0].duration.text);
                  }

                  // console.log(res.routes[0].legs[0].duration.text);
                }
              })
              .catch(error => {
                console.log(error);
              });
            fetchRoutes();
            // console.log(response.results[0].place_id);
          })
          .catch(error => {
            console.log(error);
          });
      },
      error => {
        console.log('error ' + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  useEffect(() => {
    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const renderList = () => (
  //   <View style={{padding: 20}}>
  //     <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  //       <Text style={styles.textBold}>Belle Umo</Text>
  //       <Text style={styles.text}>37 min</Text>
  //     </View>
  //     <Text style={(styles.text, {color: '#93929A'})}>7958 Swift Village</Text>
  //     <Text style={(styles.text, {color: '#93929A'})}>Order 15769839</Text>
  //     <View style={styles.spacer} />
  //     <Divider />
  //   </View>
  // );
  return (
    <View style={styles.container}>
      {/* {' '} */}
      <View style={styles.hContainer}>
        <TouchableOpacity
          style={styles.hButton}
          onPress={() => navigation.navigate('DriverMapView')}>
          <Text style={(styles.text, {color: '#4CB75C'})}>Map</Text>
        </TouchableOpacity>
        <View style={styles.hBtn}>
          <Text style={styles.text}>List</Text>
        </View>
      </View>
      <ImageBackground
        width={getWidth}
        resizeMode="cover"
        source={require('../../../../assets/gradient_bg.png')}
        style={{
          width: getWidth,
          resizeMode: 'cover',
          padding: 10,
          backgroundColor: '#4CB75C',
        }}>
        <Text style={{color: 'white'}}>
          You have {routes.length} Pickup Locations.
        </Text>
      </ImageBackground>
      <FlatList
        data={routes}
        style={{width: '100%'}}
        renderItem={({item, index}) => (
          <View style={{padding: 20}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={() =>
            navigation.navigate('InitArrived', {orderStop: item})
          }>
              <Text style={styles.textBold}>{item.customer.customerName}</Text>
              </TouchableOpacity>
              {/* <Text style={styles.text}>{item.duration} min</Text> */}
              {index === 0 ? (
                <Text style={styles.text}>{duration} </Text>
              ) : (
                // <Text style={styles.text}>{index + 1} </Text>
                <Text style={styles.text}>{legs[index - 1].duration.text} </Text>
              )}
            </View>
            <Text style={(styles.text, {color: '#93929A'})}>
              {' '}
              {item.address.fullAddress}
            </Text>
            <Text style={(styles.text, {color: '#93929A'})}>
              Order #{item.orderId}
            </Text>
            <View style={styles.spacer} />
            <Divider />
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
export default DriverRouteList;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '100%'
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  spacer: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
  hContainer: {
    backgroundColor: '#F4F6FB',
    width: getWidth * 0.5,
    //   height: 40,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 15,
    margin: 20,
  },
  hButton: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  hBtn: {alignItems: 'center', flex: 1, padding: 15, borderRadius: 15},
});
