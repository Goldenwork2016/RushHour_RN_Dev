/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';

import { colors } from '../../../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const PickPicture = (props) => {
  return (
    <View style={styles.action}>
          <View style={ { flexDirection: 'row' } }>
            <View style={styles.toolContainer}>
              <TouchableOpacity onPress={props.takePhotoFromCamera}>
                <Icon name="camera-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={props.takePhotoFromCamera}>
                <Text style={styles.text}>Take Picture</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.toolContainer}>
              <TouchableOpacity onPress={props.choosePhotoFromLibrary}>
                <Icon name="image-outline" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={props.choosePhotoFromLibrary}>
                <Text style={styles.text}>Gallery</Text>
              </TouchableOpacity>
            </View>
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
