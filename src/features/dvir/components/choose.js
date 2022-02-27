/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import InputForm from '../../../components/form-control/InputFormComponent';
import React from 'react';

const getWidth = Dimensions.get('window').width;
const AcceptableDamaged = props => {
  return (
    <View style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.action}>
        {/* <TextInput  numberOfLines={}/> */}
        <InputForm
          // style={{flex: 1}}
          autoCapitalize="none"
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          multiline
          style={{backgroundColor: 'white'}}
          onChangeText={props.onChangeText}
        />
      </View>
      <View style={{flexDirection: 'row', color: 'white'}}>
        <TouchableOpacity onPress={props.onAcceptPress} style={styles.toolContainer}>
          <View style={styles.center}>
            <Icon name="checkmark-outline" size={20} color="black" />
            <Text style={styles.text}>Acceptable</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onDamagedPress} style={styles.toolContainer}>
          <View style={styles.center}>
            <Icon name="close-outline" size={20} color="black" />
            <Text style={styles.text}>Damaged</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AcceptableDamaged;

const styles = StyleSheet.create({
  toolContainer: {
    backgroundColor: '#F4F6FB',
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
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    width: getWidth,
    // position: 'absolute',
    // bottom: 0,
    // height: 100,
  },
});
