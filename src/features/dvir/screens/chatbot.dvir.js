/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';

import AcceptableDamaged from '../components/choose';
import BotChatBubble from '../components/botChatBubble';
import BotChatBubbleNoAvatar from '../components/bot.bubble.without.avatar';
import ButtonSubmit from '../components/button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import InputForm from '../../../components/form-control/InputFormComponent';

const getWidth = Dimensions.get('window').width;
const DVIRChatBot = ({navigation}) => {
  const scrollViewRef = useRef();
  const [steps, setStep] = useState(1);
  const [backSide, setBackSide] = useState(null);
  const [frontSide, setFrontSide] = useState(null);
  const [headlights, setHeadlights] = useState('');
  const [turnSignal, setTurnSignal] = useState('');
  const [breakLight, setBreakLight] = useState('');
  const [fluidLeak, setFluidLeak] = useState('');
  const [hornSound, setHornSound] = useState('');
  const [sign, setSign] = useState('');
  const [signError, setSignError] = useState(false);

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

  return (
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
                {headlights === 'acceptable' ? (
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
                {turnSignal === 'acceptable' ? (
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
                {breakLight === 'acceptable' ? (
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
                {fluidLeak === 'acceptable' ? (
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
                {hornSound === 'acceptable' ? (
                  <Icon name="checkmark" size={20} color="white" />
                ) : (
                  <Icon name="close" size={20} color="white" />
                )}
              </View>
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Please sign that you have personally inspected the vehicle and found it to be in he condition listed above. " />
            {signError && (
              <BotChatBubbleNoAvatar text="Sign required, please sign" />
            )}
          </View>
        )}{steps > 8 && (
          <View>
            <BotChatBubble text="Thanks for completing the DVIR!" />
            <BotChatBubbleNoAvatar text="Here is your route for the day" />
          </View>
        )}
      </ScrollView>
      {steps === 1 && (
        <View
          style={{
            paddingHorizontal: 5,
            alignContent: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <View style={styles.circleCon}>
            <Icon
              name="camera"
              size={30}
              onPress={takePhotoFromCameraFront}
              color="#4CB75C"
            />
          </View>
          <ButtonSubmit text="Ready" onPress={()=> {}}/>
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
          <View style={styles.circleCon}>
            <Icon
              name="camera"
              size={30}
              onPress={takePhotoFromCameraBack}
              color="#4CB75C"
            />
          </View>
        </View>
      )}
      {/* headlight */}
      {steps === 3 && (
        <AcceptableDamaged
          placeholder="Comment"
          onChangeText={text => {}}
          onAcceptPress={() => {
            setHeadlights('acceptable');
            setStep(4);
          }}
          onDamagedPress={() => {
            setHeadlights('damaged');
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
            setTurnSignal('acceptable');
            setStep(5);
          }}
          onDamagedPress={() => {
            setTurnSignal('damaged');
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
            setBreakLight('acceptable');
            setStep(6);
          }}
          onDamagedPress={() => {
            setBreakLight('damaged');
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
            setFluidLeak('acceptable');
            setStep(7);
          }}
          onDamagedPress={() => {
            setFluidLeak('damaged');
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
            setHornSound('acceptable');
            setStep(8);
          }}
          onDamagedPress={() => {
            setHornSound('damaged');
            setStep(8);
          }}
        />
      )}
      {steps === 8 && (
        // <InputForm placeholder="" multiline numberof/>
        <View style={styles.action}>
          <InputForm
            // style={{flex: 1}}
            autoCapitalize="none"
            name="sign"
            placeholder=""
              multiline
              numberOfLines={4}
            value={sign}
            onChangeText={text => setSign(text)}
            style={{backgroundColor: 'white', height: 100, width: getWidth * 0.95}}
          />
          <Icon
            name="send"
            size={30}
            onPress={() => {
              if (sign.length < 1) {
                setSignError(true);
              } else {
                // scrollToEnd()
                  setStep(9);
              }
            }}
            color="#4CB75C"
            style={{position: 'absolute', right: 20, top: 90}}
          />
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
});
