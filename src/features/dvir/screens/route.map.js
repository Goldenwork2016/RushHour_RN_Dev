/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {} from '../../account/components/accounts.styles';

import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

import ButtonSubmit from '../components/button';
import DVIRMap from '../components/map';
import React from 'react';
import {useState} from 'react';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;
const TruckRoute = ({navigation}) => {
  const [option, setOption] = useState('map');

  return (
    <View style={styles.container}>
      <View>
        {/* {' '} */}
        <View style={styles.hContainer}>
          <View style={styles.hBtn}>
            <Text style={styles.text}>Map</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('RouteList')}
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
          <Text style={{color: 'white'}}>You have 10 Pickup Locations.</Text>
        </ImageBackground>
      </View>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        //   customMapStyle={ mapStandardStyle}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
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
        <Marker
          coordinate={{
            latitude: 37.7896386,
            longitude: -122.421646,
          }}
          title="Test Destination"
          description="This is the test description">
          <View style={styles.markerCon2}>
            <Text>1</Text>
          </View>
        </Marker>
        <Polyline
          coordinates={[
            {latitude: 37.78825, longitude: -122.4324},
            {latitude: 37.7896386, longitude: -122.421646},
          ]}
          strokeColor="#3BC2DE" // fallback for when `strokeColors` is not supported by the map-provider
          strokeWidth={6}
        />
      </MapView>
      <View style={{padding: 10, alignItems:'center', justifyContent:'center'}}>
        <ButtonSubmit text="View Route" />
      </View>
    </View>
  );
};

export default TruckRoute;

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
  map: {height: getHeight * 0.7, width: '100%'},
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
