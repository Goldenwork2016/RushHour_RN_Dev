/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

const getWidth = Dimensions.get('window').width;
const ButtonSubmit = props => {
  return (
      <TouchableOpacity onPress={props.onPress} style={ { alignItems: 'center' } }>
        <ImageBackground borderRadius= {15} source={require('../../../../assets/button-bg.png')} style={styles.btnContainer}>
           <Text style={styles.text}>{props.text}</Text>
        </ImageBackground>
      </TouchableOpacity>
      // <OnTouch onPress={props.onPress}>
      //     <SubmitButton resizeMode="cover">
      //       <ButtonText>{props.text}</ButtonText>
      //     </SubmitButton>
      //   </OnTouch>
  );
};

export default ButtonSubmit;

const styles = StyleSheet.create({
  btnContainer: {
    // marginRight: 15,
    // marginTop: 10,
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
  },
});
