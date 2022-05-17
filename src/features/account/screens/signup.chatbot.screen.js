/* eslint-disable prettier/prettier */
/* eslint-disable no-catch-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
// /* eslint-disable */

import * as signup2  from './../../../store/actions/auth';

import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import BotChatBubble from '../components/chatbot/botChatBubble';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import InputForm from '../../../components/form-control/InputFormComponent';
import Moment from 'moment';
import PickPicture from '../components/chatbot/choosepicture';
import SelectButton from '../components/chatbot/select.button';
import {Slider} from 'react-native-elements';
import ToolContainer from '../components/chatbot/bottom.tool.container';
import UserChatBubble from '../components/chatbot/userChatBubble';
import {colors} from '../../../infrastructure/theme/colors';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

// import { TouchableOpacity} from 'react-native-gesture-handler';


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
const SignupChatbot = ({navigation}) => {
  const dispatch = useDispatch();
  const [profilePic, setProfilePic] = useState(null);
  const [steps, setStep] = useState(1);
  const [language, setLanguage] = useState('English');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(new Date(1996, 11, 7));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(1);
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const scrollViewRef = useRef();
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

  useEffect(() => {
    _firstName();
    if (error) {
      Alert.alert('An Error Occurred!', error, [{text: 'Okay'}]);
    }
    // fetchCat();
    // fetchProduct();
  },[error] );

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
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
  const _firstName = async () => {
    try {
      const firName = await AsyncStorage.getItem('firstName');
      const lasName = await AsyncStorage.getItem('lastName');
      if (firName !== null && lasName !== null) {
        setFName(firName);
        setLName(lasName);
      }
    } catch (e) {
      // Error retrieving data'
      console.log('error occur');
    }
  };
  const first = 'Hey ' + fName + ', lets start by creating your personal drivers profile.';
  const submit = async () => {
    let action;
    action = signup2.signup2(fName, lName, profilePic, phone, date,value,language,address );

    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      console.log('success');
      navigation.navigate('SignupTruckChatbot');
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{padding: 20}}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.image}
          />
          <Text style={styles.textBold}>Dispatcher</Text>
        </View>
        <BotChatBubble text={first} />
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
            {addressError && (
              <View>
                <BotChatBubble text="Address is required. What is your home address?" />
              </View>
            )}
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
                {Moment(date).format('MMM DD, YYYY')}
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
            {phoneError && (
              <View>
                <BotChatBubble text="Phone number is required. What is your phone number?" />
              </View>
            )}
            <View style={styles.spacer} />
          </View>
        )}
      </ScrollView>
      {/* bottom pick image*/}
      {steps === 1 && (
        <PickPicture
          takePhotoFromCamera={() => {
            takePhotoFromCamera();
          }}
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
            <Input
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
              onPress={() => {
                if (address.length < 1) {
                  setAddressError(true);
                } else {
                  // scrollToEnd()
                  setStep(4);
                }
              }}
              color="#4CB75C"
              style={{position: 'absolute', right: 15, top: 10}}
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
              <Text style={styles.text}>{value} Yrs</Text>
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
            <Input
              // style={{flex: 1}}
              autoCapitalize="none"
              name="phone"
              placeholder="(XXX) - XXX - XXXX"
              value={phone}
              keyboardType="numeric"
              onChangeText={text => setPhone(text)}
            />
            <Icon
              name="send"
              size={30}
              onPress={() => {
                if (phone.length < 1) {
                  setPhoneError(true);
                } else {
                  setStep(4);
                  submit();
                }
              }}
              color="#4CB75C"
              style={{position: 'absolute', right: 15, top: 10}}
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
