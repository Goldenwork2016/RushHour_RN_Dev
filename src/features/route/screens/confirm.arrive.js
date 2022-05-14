/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  Image,
  ImageBackground,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useEffect} from 'react';

import {ActivityIndicator} from 'react-native';
import ArrivedModal from '../components/modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmModal from '../components/modal.confirm';
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from 'react-native-maps-directions';
import {Provider} from 'react-native-paper';
import {constants} from './../../../core/constants';
import {useState} from 'react';

// import GetLocation from 'react-native-get-location';

// import DVIRMap from '../components/map';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

const ConfirmArrive = ({route,navigation}) => {
  // const [option, setOption] = useState('map');
  const [legs, setLegs] = useState([]);
  const [myLat, setMyLat] = useState();
  const [myLon, setMyLon] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const [routes, setRoutes] = useState([]);

  const [visible, setVisible] = useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const {orderStop} = route.params;

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
        const direction = list.flatMap(r => r.directions);
        const rout = direction.flatMap(r => r.routes);
        const lg = rout.flatMap(r => r.legs);
        setLegs(lg);
        const stops = list.flatMap(r => r.routeStopGroups);
        const stopItems = stops.flatMap(e => e.routeItemStops);
        setRoutes(stopItems);
        // console.log(lg[0].end_location);
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
        setMyLon(currentLongitude);
        setMyLat(currentLatitude);
        fetchRoutes();
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
    // console.log(myLoc.latitude);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const renderMap = () => {
    // console.log(legs.length);
    return legs.map((data, index) => {
      return (
        // {index === 0 ? }
        <Marker
          coordinate={{
            latitude: data.end_location.lat,
            longitude: data.end_location.lng,
          }}
          title={data.start_address}
          description={data.start_address}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('InitArrived', {orderStop: routes[index + 1]})
            }>
            <View style={styles.markerCon2}>
              <Text style={{color: 'black'}}>{index + 2}</Text>
            </View>
          </TouchableOpacity>
        </Marker>
        // </View>
      );
    });
  };
  const renderDirection = () => {
    return legs.map((data, index) => {
      return (
        <MapViewDirections
          // strokeColor="red"
          strokeColor="#3BC2DE"
          strokeWidth={5}
          origin={{
            latitude: data.start_location.lat,
            longitude: data.start_location.lng,
          }}
          // origin={{latitude: myLoc.latitude, longitude: myLoc.longitude}}
          destination={{
            latitude: data.end_location.lat,
            longitude: data.end_location.lng,
          }}
          apikey={constants.googleApiKey}
        />
      );
    });
  };
  return (
    <Provider>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            {/* {' '} */}
            <View style={styles.hContainer}>
              <View style={styles.hBtn}>
                <Text style={styles.text}>Map</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('DriverRouteList')}
                style={styles.hButton}>
                <Text style={(styles.text, {color: '#4CB75C'})}>List</Text>
              </TouchableOpacity>
            </View>
            {/* <Notification><Text style={{color: 'white'}}>You have 10 Pickup Locations.</Text></Notification> */}
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
              <Text style={{color: 'white', textAlign: 'center'}}>
                You’ve arrived at your destination
              </Text>
            </ImageBackground>
          </View>
          {legs.length === 0 ? (
            <View style={{height: getHeight * 0.8, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#4CB75C" />
            </View>
          ) : (
            <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              showsUserLocation={true}
              //   customMapStyle={ mapStandardStyle}
              region={{
                // latitude: parseFloat(myLat),
                // longitude: parseFloat(myLon),
                latitude: 40.72218,
                longitude: -73.849304,
                latitudeDelta: 0.9,
                longitudeDelta: 0.9,
              }}>
              <Marker
                coordinate={{
                  latitude: 40.72218,
                  longitude: -73.849304,
                  // latitude: parseFloat(myLat),
                  // longitude: parseFloat(myLon),
                }}
                title="Test Title"
                description="This is the test description">
                <View style={styles.markerCon}>
                  <Image
                    source={require('../../../../assets/marker.png')}
                    style={styles.markerImage}
                  />
                </View>
              </Marker>
              {renderMap()}
              <Marker
                coordinate={{
                  latitude: legs[0].start_location.lat,
                  longitude: legs[0].start_location.lng,
                }}
                title={legs[0].start_address}
                description={legs[0].start_address}
                onPress={() =>
                  navigation.navigate('InitArrived', {orderStop: routes[0]})
                }
                >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('InitArrived', {orderStop: routes[0]})
                  }>
                  <View style={styles.markerCon2}>
                    <Text style={{color: 'black'}}>1</Text>
                  </View>
                </TouchableOpacity>
              </Marker>
              {/* <Marker
                coordinate={{
                  latitude: legs[0].end_location.lat,
                  longitude: legs[0].end_location.lng,
                }}
                title={legs[0].end_address}
                description={legs[0].end_address}>
                <View style={styles.markerCon2}>
                  <Text style={{color: 'black'}}>2</Text>
                </View>
              </Marker> */}
              {/* <MapViewDirections
                // strokeColor="red"
                strokeColor="#3BC2DE"
                strokeWidth={5}
                origin={{
                  latitude: legs[0].start_location.lat,
                  longitude: legs[0].start_location.lng,
                }}
                // origin={{latitude: myLoc.latitude, longitude: myLoc.longitude}}
                destination={{
                  latitude: legs[0].end_location.lat,
                  longitude: legs[0].end_location.lng,
                }}
                apikey={constants.googleApiKey}
              /> */}
              {renderDirection()}
              <MapViewDirections
                // strokeColor="red"
                strokeColor="#3BC2DE"
                strokeWidth={5}
                origin={{
                  // latitude: parseFloat(myLat),
                  // longitude: parseFloat(myLon),
                  latitude: 40.72218,
                  longitude: -73.849304,
                }}
                // origin={{latitude: myLoc.latitude, longitude: myLoc.longitude}}
                destination={{
                  latitude: legs[0].start_location.lat,
                  longitude: legs[0].start_location.lng,
                }}
                apikey={constants.googleApiKey}
              />
              {/* <Polyline
          coordinates={[
            {latitude: 37.78825, longitude: -122.4324},
            {latitude: 37.7896386, longitude: -122.421646},
          ]}
          strokeColor="#3BC2DE" // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={6}
        /> */}
            </MapView>
            // <View/>
          )}
          <ConfirmModal
            isVisible={visible}
            hideModal={hideModal}
            onCancelPress={() => {
              // hideModal();
              navigation.navigate('NotReceived');
            }}
            onPickPress={() => {
              // hideModal();
              navigation.navigate('PickOrder', {
                orderStop: orderStop,
                // customerName: routes[0].customer.customerName,
                // orderId: routes[0].orderNumber,
                // address: routes[0].address.addressLine1,
                // phone: routes[0].customer.phone,
                // orderItem: routes[0].routeItems,
              });
            }}
          />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default ConfirmArrive;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
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
  map: {height: getHeight * 0.8, width: '100%'},
  markerImage: {width: 50, height: 50, opacity: 1},
  markerCon: {
    width: 100,
    height: 100,
    backgroundColor: '#3BC2DE',
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150 / 2,
  },
  markerCon2: {
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    borderColor: '#3BC2DE',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150 / 2,
  },
});
