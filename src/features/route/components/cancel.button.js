/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';

const getWidth = Dimensions.get('window').width;
const CancelButton = props => {
  return (
      <TouchableOpacity onPress={props.onPress} style={ { alignItems: 'center' } }>
        <View  style={styles.btnContainer}>
           <Text style={styles.text1}>{props.text}</Text>
        </View>
      </TouchableOpacity>
      // <OnTouch onPress={props.onPress}>
      //     <SubmitButton resizeMode="cover">
      //       <ButtonText>{props.text}</ButtonText>
      //     </SubmitButton>
      //   </OnTouch>
  );
};

export default CancelButton;

const styles = StyleSheet.create({
  btnContainer: {
    // marginRight: 15,
    // marginTop: 10,
    backgroundColor: 'white',
    resizeMode:'cover',
    marginBottom: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    padding: 20,
    borderRadius: 12,
    width: getWidth * 0.9,
  },
  spacer: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },text1: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});
