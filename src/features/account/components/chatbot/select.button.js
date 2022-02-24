/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const SelectButton = props => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'white',
    marginRight: 15,
    // marginTop: 10,
    marginBottom: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    width: 380,
  },
  spacer: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});
