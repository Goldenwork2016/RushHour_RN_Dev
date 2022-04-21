/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import ButtonSubmit from '../components/button';
import {Divider} from 'react-native-elements';

const getWidth = Dimensions.get('window').width;
// const getHeight = Dimensions.get('window').height;



const RouteList = ({navigation}) => {
  const [routes, setRoutes] = useState([]);
  const [listR, setListR] = useState([]);

  const fetchRoutes = async() => {
    const token = await AsyncStorage.getItem('token');
    var apiUrl = 'https://beta.rushhourapp.com/api/v1/Routes/Current'; //API to render signup

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
      .then((response) => response.json())
      .then((response) => {
        const list = response.data.list;
        const stops = list.flatMap((r) => r.routeStopGroups);
        const stopItems = stops.flatMap((e) => e.routeItemStops);
        setRoutes(stopItems);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('error');
      });
  };
  useEffect(() => {
    fetchRoutes();
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
          onPress={() => navigation.navigate('TruckRoute')}>
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
        <Text style={{color: 'white'}}>You have {routes.length} Pickup Locations.</Text>
      </ImageBackground>
      <FlatList
        data={routes}
        style={{width: '100%'}}
        renderItem={({item}) => <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textBold}>{item.customer.customerName}</Text>
          {/* <Text style={styles.text}>{item.duration} min</Text> */}
          {/* <Text style={styles.text}> min</Text> */}
        </View>
        <Text style={(styles.text, {color: '#93929A'})}>{item.orderNumber} {item.address.addressLine1}</Text>
        <Text style={(styles.text, {color: '#93929A'})}>Order #{item.orderId}</Text>
        <View style={styles.spacer} />
        <Divider />
      </View>}
        keyExtractor={(item, index) => index}
      />
      <ButtonSubmit text="View Route"/>
    </View>
  );
};

export default RouteList;

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
