/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import BotChatBubble from '../components/botChatBubble';
import BotChatBubbleNoAvatar from '../components/bot.bubble.without.avatar';
import DVIRLoading from '../../../components/loading/dvirLoading';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.text.disabled,
})`
    width: 350px;
    height: ${props => props.theme.sizes[5]};
    margin-bottom: ${props => props.theme.space[1]};
    padding-left: ${props => props.theme.space[3]};
    padding-right: ${props => props.theme.space[3]};
    padding-top: ${props => props.theme.space[2]}
    padding-bottom: ${props => props.theme.space[2]}
    font-size: ${props => props.theme.sizes[1]};
    background-color: #f4f6fb;
    border-radius: 12px;
    font-size: ${props => props.theme.fontSizes.text};
     color: ${props => props.theme.colors.text.dark};
`;
const InitDVIR = ({navigation}) => {
  const scrollViewRef = useRef();
  const [licensePlate, setLicensePlate] = useState('');
  const [licenseError, setLicenseError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fName, setFName] = useState();

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  useEffect(() => {
    _firstName();
  }, );
  const _firstName = async () => {
    try {
      const firName = await AsyncStorage.getItem('firstName');
      const lasName = await AsyncStorage.getItem('lastName');
      if (firName !== null && lasName !== null) {
        setFName(firName);
      }
    } catch (e) {
      // Error retrieving data'
      console.log('error occur');
    }
  };
  const first = 'Hey, good morning ' + fName;

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <DVIRLoading />
      ) : (
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{padding: 20}}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({animated: true})
            }>
            <View style={styles.spacer} />
            <View style={styles.spacer} />
            <BotChatBubble text={first} />
            <BotChatBubbleNoAvatar text="Please enter the license plate of the truck you will be driving today" />
            {licenseError && (
              <BotChatBubbleNoAvatar text="License plate is required, please enter the license plate" />
            )}
            <View style={styles.spacer} />
          </ScrollView>
          <View>
            <View
              style={{
                backgroundColor: '#F4F6FB',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
              }}>
              <Input
                // style={{flex: 1}}
                autoCapitalize="none"
                name="licensePlate"
                placeholder=""
                value={licensePlate}
                style={{backgroundColor: 'white'}}
                onChangeText={text => setLicensePlate(text)}
              />
              <Icon
                name="send"
                size={30}
                onPress={async() => {
                  if (licensePlate.length < 1) {
                    setLicenseError(true);
                  } else {
                    // setStep(4);
                    await AsyncStorage.setItem('plateNumber', licensePlate);
                    navigation.navigate('DVIRReady');
                  }
                }}
                color="#4CB75C"
                style={{position: 'absolute', right: 15, top: 30}}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default InitDVIR;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    // borderColor: 'red',
  },
  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    marginRight: 10,
    // borderWidth: 3,
    // borderColor: 'red',
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
  exYear: {
    borderRadius: 10,
    borderColor: '#F4F6FB',
    padding: 15,
    borderWidth: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
