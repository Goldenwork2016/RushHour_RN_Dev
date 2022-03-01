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

import ButtonSubmit from '../components/button';
import {Divider} from 'react-native-elements';
import React from 'react';

const getWidth = Dimensions.get('window').width;
const getHeight = Dimensions.get('window').height;

const DATA = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '7',
  },
  {
    id: '8',
  },
  {
    id: '9',
  },
];
const renderList = () => (
  <View style={{padding: 20}}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.textBold}>Belle Umo</Text>
      <Text style={styles.text}>37 min</Text>
    </View>
    <Text style={(styles.text, {color: '#93929A'})}>7958 Swift Village</Text>
    <Text style={(styles.text, {color: '#93929A'})}>Order 15769839</Text>
    <View style={styles.spacer} />
    <Divider />
  </View>
);
const List = () => (
  <FlatList
    data={DATA}
    renderItem={renderList}
    keyExtractor={item => item.id}
  />
);
const RouteList = ({navigation}) => {
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
        <Text style={{color: 'white'}}>You have 10 Pickup Locations.</Text>
      </ImageBackground>
      <FlatList
        data={DATA}
        style={{width: '100%'}}
        renderItem={renderList}
        keyExtractor={item => item.id}
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
