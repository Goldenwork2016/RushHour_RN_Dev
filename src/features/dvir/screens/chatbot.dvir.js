/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import * as RNFS from 'react-native-fs';
import * as regDVIR from './../../../store/actions/auth';

import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import AcceptableDamaged from '../components/choose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotChatBubble from '../components/botChatBubble';
import BotChatBubbleNoAvatar from '../components/bot.bubble.without.avatar';
import ButtonSubmit from '../components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import Signature from 'react-native-signature-canvas';
import {useDispatch} from 'react-redux';

const getWidth = Dimensions.get('window').width;
const DVIRChatBot = ({navigation}) => {
  const scrollViewRef = useRef();
  const [steps, setStep] = useState(1);
  const [backSide, setBackSide] = useState(null);
  const [frontSide, setFrontSide] = useState(null);
  const [headlights, setHeadlights] = useState(false);
  const [turnSignal, setTurnSignal] = useState(false);
  const [breakLight, setBreakLight] = useState(false);
  const [fluidLeak, setFluidLeak] = useState(false);
  const [hornSound, setHornSound] = useState(false);
  const [sign, setSign] = useState(null);
  const [plateNumber, setPlateNumber] = useState('');
  const [fName, setFName] = useState('');
  const [isSign, setIsSign] = useState(false);

  const takePhotoFromCameraFront = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setFrontSide(image.path);
      setStep(2);
    });
  };
  const takePhotoFromCameraBack = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setBackSide(image.path);
      setStep(3);
    });
  };
  // const [signature, setSign] = useState(null);

  const handleOK = async signData => {
    const path = RNFS.DownloadDirectoryPath + '/sign.png';
   await RNFS.writeFile(
      path,
      signData.replace('data:image/png;base64,', ''),
      'base64',
    ).then(async image => {
      setSign('file:///storage/emulated/0/Download/sign.png');
      let action;
      action = regDVIR.regDVIR(
        plateNumber,
        frontSide,
        backSide,
        headlights,
        turnSignal,
        breakLight,
        fluidLeak,
        hornSound,
        'file:///storage/emulated/0/Download/sign.png',
      );

      setError(null);
      setIsLoading(true);
      try {
        await dispatch(action);
        console.log('success');
        setStep(9);
        // navigation.navigate('InitDVIR');
        setIsLoading(false);
        setIsSign(false);
      } catch (err) {
        setError(err.message);
        setStep(8);
        setIsLoading(false);
        setIsSign(false);
      }
    });
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    _firstName();
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
  }, [error]);
  const _firstName = async () => {
    try {
      const plateN = await AsyncStorage.getItem('plateNumber');
      const firName = await AsyncStorage.getItem('firstName');
      if (plateN !== null) {
        setPlateNumber(plateN);
        setFName(firName);
      }
    } catch (e) {
      // Error retrieving data'
      console.log('error occur');
    }
  };
  const style = `.m-signature-pad--footer
    .button {
      background-color: #4CB75C;
      color: #FFF;
    }`;
  return isSign ? (
    <View style={{flex: 1}}>
      <View style={styles.spacer}/>
      {isLoading ? (
              <ActivityIndicator size="small" color="#4CB75C" />
            ) : (
      <Signature
        style={{justifyContent: 'flex-end'}}
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Inspection Signature Image"
        clearText="Clear"
        confirmText="Confirm"
        webStyle={style}
      />)}
    </View>
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
        <BotChatBubble text="Firstly, please take a pic of your truck from a front angle." />
        {steps > 1 && (
          <View>
            <View style={styles.floatRight}>
              <Image
                style={{
                  borderRadius: 25,
                  width: 180,
                  height: 163,
                  resizeMode: 'cover',
                }}
                source={{uri: frontSide}}
              />
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Next, please take pic of the back of your truck." />
          </View>
        )}
        {steps > 2 && (
          <View>
            <View style={styles.floatRight}>
              <Image
                style={{
                  borderRadius: 25,
                  width: 180,
                  height: 163,
                  resizeMode: 'cover',
                }}
                source={{uri: backSide}}
              />
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Next, check the headlights function on both high and low beam" />
          </View>
        )}
        {steps > 3 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.checked}>
                {headlights ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Turn signals function properly?" />
          </View>
        )}
        {steps > 4 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.checked}>
                {turnSignal ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Check the brake lights function including the third break light" />
          </View>
        )}
        {steps > 5 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.checked}>
                {breakLight ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Check for fluid leaks" />
          </View>
        )}
        {steps > 6 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.checked}>
                {fluidLeak ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Check the horn sounds" />
          </View>
        )}
        {steps > 7 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.checked}>
                {hornSound ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Please sign that you have personally inspected the vehicle and found it to be in he condition listed above. " />
            {/* {signError && (
              <BotChatBubbleNoAvatar text="Sign required, please sign" />
            )} */}
          </View>
        )}
        {steps > 8 && (
          <View style={{justifyContent: 'space-between'}}>
            <View style={styles.floatRight}>
              <Image
                source={{uri: sign}}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="cover"
              />
            </View>
            <View>
              <BotChatBubble text="Thanks for completing the DVIR!" />
              <BotChatBubbleNoAvatar text="Here is your route for the day" />
            </View>
          </View>
        )}
      </ScrollView>
      {steps > 8 && (
        <View style={{alignItems: 'center'}}>
          <ButtonSubmit
            text="View Route"
            onPress={() => navigation.navigate('TruckRoute')}
          />
        </View>
      )}
      {steps === 1 && (
        <View
          style={{
            paddingHorizontal: 5,
            alignContent: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={takePhotoFromCameraFront}>
            <View style={styles.circleCon}>
              <Icon name="camera" size={30} color="#4CB75C" />
            </View>
          </TouchableOpacity>
          <ButtonSubmit text="Ready" onPress={() => {}} />
        </View>
      )}
      {steps === 2 && (
        <View
          style={{
            paddingHorizontal: 5,
            alignContent: 'center',
            height: '30%',
            // justifyContent: 's',
          }}>
          <TouchableOpacity onPress={takePhotoFromCameraBack}>
            <View style={styles.circleCon}>
              <Icon name="camera" size={30} color="#4CB75C" />
            </View>
          </TouchableOpacity>
        </View>
      )}
      {/* headlight */}
      {steps === 3 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setHeadlights(true);
            setStep(4);
          }}
          onDamagedPress={() => {
            setHeadlights(false);
            setStep(4);
          }}
        />
      )}
      {/* TurnSignal */}
      {steps === 4 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setTurnSignal(true);
            setStep(5);
          }}
          onDamagedPress={() => {
            setTurnSignal(false);
            setStep(5);
          }}
        />
      )}
      {/* break light */}
      {steps === 5 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setBreakLight(true);
            setStep(6);
          }}
          onDamagedPress={() => {
            setBreakLight(false);
            setStep(6);
          }}
        />
      )}
      {/* Fluid leaks */}
      {steps === 6 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setFluidLeak(true);
            setStep(7);
          }}
          onDamagedPress={() => {
            setFluidLeak(false);
            setStep(7);
          }}
        />
      )}
      {/* Horn sound */}
      {steps === 7 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setHornSound(true);
            setStep(8);
          }}
          onDamagedPress={() => {
            setHornSound(false);
            setStep(8);
          }}
        />
      )}
      {steps === 8 && (
        // <InputForm placeholder="" multiline numberof/>
        // <View>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={
              () => setIsSign(true)
              // navigation.navigate('Signature')
            }>
            <View style={styles.circleCon}>
              <Icon name="create-outline" size={30} color="#4CB75C" />
            </View>
          </TouchableOpacity>
          {/* <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      /> */}
        </View>
      )}
    </View>
  );
};

export default DVIRChatBot;

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
  circleCon: {
    width: 100,
    height: 100,
    backgroundColor: '#F4F6FB',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
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
  floatRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  checked: {
    width: 37,
    height: 37,
    backgroundColor: '#2E3A59',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  action: {
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: getWidth,
    // position: 'absolute',
    // bottom: 0,
    // height: 100,
  },
  preview: {
    width: 335,
    height: 200,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
});
