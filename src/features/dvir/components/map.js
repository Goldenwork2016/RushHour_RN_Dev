/* eslint-disable prettier/prettier */

import {Image, StyleSheet, Text, View} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const DVIRMap = () => {
  return (
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
  );
};

export default DVIRMap;

const styles = StyleSheet.create({
  map: {height: '75%', width: '100%'},
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
