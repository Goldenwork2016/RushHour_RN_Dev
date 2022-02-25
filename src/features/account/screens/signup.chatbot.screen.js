/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
// /* eslint-disable */

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import InputForm from '../../../components/form-control/InputFormComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import {Slider} from 'react-native-elements';
import PickPicture from '../components/chatbot/choosepicture';
import SelectButton from '../components/chatbot/select.button';
import ToolContainer from '../components/chatbot/bottom.tool.container';
import BotChatBubble from '../components/chatbot/botChatBubble';
import UserChatBubble from '../components/chatbot/userChatBubble';

const SignupChatbot = ({navigation}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [steps, setStep] = useState(1);
  const [language, setLanguage] = useState('English');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date(1996, 11, 7));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(1);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setStep(5);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // useEffect(() => {
  //   // fetchCat();
  //   // fetchProduct();
  // }, []);

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      //   includeBase64: true,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setProfilePic(image.path);
      setStep(2);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo',
      multiple: false,
      compressImageQuality: 0.7,
    }).then(image => {
      // console.log(image);
      setProfilePic(image.path);
      setStep(2);
    });
  };
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.image}
          />
          <Text style={styles.textBold}>Dispatcher</Text>
        </View>
        {/* <View style={styles.botContainerWithAvatar}>
          <View style={styles.imageAvatar}>
            <Text />
          </View>
          <View style={styles.botContainer}>
            <Text style={styles.text}>
              Hey John, lets start by creating your personal drivers profile.
            </Text>
          </View>
        </View> */}
        <BotChatBubble text="Hey John, lets start by creating your personal drivers profile." />
        <BotChatBubble text="Lets start by getting a picture of you" />
        <View style={styles.spacer} />
        {/* step 2 */}
        {steps > 1 && (
          <View>
            <UserChatBubble>
              <Image
                source={{uri: profilePic}}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="cover"
              />
            </UserChatBubble>

            <View style={styles.spacer} />
            <BotChatBubble text="What is your speaking language?" />
          </View>
        )}
        {/* step 3 */}
        {steps > 2 && (
          <View>
            <UserChatBubble>
              <Text style={{color: 'white'}}>I speak {language}</Text>
            </UserChatBubble>

            <View style={styles.spacer} />
            <BotChatBubble text="What is your home address?" />
            <View style={styles.spacer} />
          </View>
        )}
        {/* step 4 */}
        {steps > 3 && (
          <View>
            <UserChatBubble>
              <Text style={{color: 'white'}}>{address}</Text>
            </UserChatBubble>

            <View style={styles.spacer} />
            <BotChatBubble text="When is your birthday?" />
            <View style={styles.spacer} />
          </View>
        )}
        {/* step 5 */}
        {steps > 4 && (
          <View>
            <UserChatBubble>
              <Text style={{color: 'white'}}>
                {Moment(date).format('MMMM Do YYYY')}
              </Text>
            </UserChatBubble>

            <View style={styles.spacer} />
            <BotChatBubble text="What is your level of Driving experience?" />
            <View style={styles.spacer} />
          </View>
        )}
        {steps > 5 && (
          <View>
            <UserChatBubble>
              <Text style={{color: 'white'}}>{value} years of experience</Text>
            </UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="What is your phone number?" />
            <View style={styles.spacer} />
          </View>
        )}
      </ScrollView>
      {/* bottom pick image*/}
      {steps === 1 && (
        <PickPicture
          takePhotoFromCamera={takePhotoFromCamera}
          choosePhotoFromLibrary={choosePhotoFromLibrary}
        />
      )}
      {/* bottom choose language*/}
      {steps === 2 && (
        <ToolContainer>
            <SelectButton
              onPress={() => {
                setLanguage('English');
                setStep(3);
              }}
              text="English"
            />
            <SelectButton
              onPress={() => {
                setLanguage('Spanish');
                setStep(3);
              }}
              text="Spanish"
            />
            <SelectButton
              onPress={() => {
                setLanguage('Russian');
                setStep(3);
              }}
              text="Russian"
            />
        </ToolContainer>
      )}
      {steps === 3 && (
        <View
          style={{
            backgroundColor: colors.bg.quaternary,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}>
          <View>
            <InputForm
              // style={{flex: 1}}
              autoCapitalize="none"
              name="address"
              placeholder="Street Address, City, State"
              value={address}
              onChangeText={text => setAddress(text)}
            />
            <Icon
              name="send"
              size={30}
              onPress={() => setStep(4)}
              color="#4CB75C"
              style={{position: 'absolute', right: 15, top: 40}}
            />
          </View>
        </View>
      )}
      {steps === 4 && (
        <View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <ToolContainer>
            <SelectButton onPress={showDatepicker} text="Pick Date" />
          </ToolContainer>
        </View>
      )}
      {steps === 5 && (
        <View>
          <View
            style={{
              padding: 20,
              width: '100%',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={10}
              minimumValue={1}
              style={{alignContent: 'center', justifyContent: 'center'}}
              step={1}
              allowTouchTrack
              trackStyle={{height: 5, backgroundColor: '#3BC2DE'}}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'transparent',
              }}
              minimumTrackTintColor="#90C862"
              thumbProps={{
                children: (
                  <Icon
                    name="location"
                    size={20}
                    containerStyle={{bottom: 20, right: 20}}
                    color="#3BC2DE"
                  />
                ),
              }}
            />
            <View style={styles.exYear}>
              <Text>{value} Yrs</Text>
            </View>
          </View>
          <ToolContainer>
            <SelectButton onPress={() => setStep(6)} text="Done" />
          </ToolContainer>
        </View>
      )}
      {steps === 6 && (
        <View
          style={{
            backgroundColor: colors.bg.quaternary,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}>
          <View>
            <InputForm
              // style={{flex: 1}}
              autoCapitalize="none"
              name="phone"
              placeholder="(XXX) - XXX - XXXX"
              value={phone}
              keyboardType = "numeric"
              onChangeText={text => setPhone(text)}
            />
            <Icon
              name="send"
              size={30}
              onPress={() => {
                setStep(4);
                navigation.navigate('SignupTruckChatbot');
              }}
              color="#4CB75C"
              style={{position: 'absolute', right: 15, top: 40}}
            />
          </View>
        </View>
      )}
    </View>
    // </ScrollView>
  );
};

export default SignupChatbot;

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
