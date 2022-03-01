/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import BotChatBubble from '../components/botChatBubble';
import BotChatBubbleNoAvatar from '../components/bot.bubble.without.avatar';
import DVIRLoading from '../../../components/loading/dvirLoading';
import Icon from 'react-native-vector-icons/Ionicons';
import InputForm from '../../../components/form-control/InputFormComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';

const InitDVIR = ({navigation}) => {
  const scrollViewRef = useRef();
  const [licensePlate, setLicensePlate] = useState('');
  const [licenseError, setLicenseError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
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
            <BotChatBubble text="Hey, good morning John!" />
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
              <InputForm
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
                onPress={() => {
                  if (licensePlate.length < 1) {
                    setLicenseError(true);
                  } else {
                    // setStep(4);
                    navigation.navigate('DVIRReady');
                  }
                }}
                color="#4CB75C"
                style={{position: 'absolute', right: 15, top: 40}}
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
