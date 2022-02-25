/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../../infrastructure/theme/colors';

const PickPicture = props => {
  return (
    <View style={styles.action}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={props.takePhotoFromCamera}
          style={styles.toolContainer}>
          <View style={styles.center}>
          <Icon name="camera-outline" size={20} color="black" />
          <Text style={styles.text}>Take Picture</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.choosePhotoFromLibrary}
          style={styles.toolContainer}>
          <View style={styles.center}>
            <Icon name="image-outline" size={20} color="black" />
            <Text style={styles.text}>Gallery</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default PickPicture;

const styles = StyleSheet.create({
  toolContainer: {
    backgroundColor: 'white',
    marginRight: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    width: '45%',
  },
  center: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
  action: {
    backgroundColor: colors.bg.quaternary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
  },
});
