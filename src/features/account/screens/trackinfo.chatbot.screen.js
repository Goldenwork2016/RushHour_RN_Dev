/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import BotChatBubble from '../components/chatbot/botChatBubble';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import InputForm from '../../../components/form-control/InputFormComponent';
import PickPicture from '../components/chatbot/choosepicture';
import SelectButton from '../components/chatbot/select.button';
import ToolContainer from '../components/chatbot/bottom.tool.container';
import UserChatBubble from '../components/chatbot/userChatBubble';
import {colors} from '../../../infrastructure/theme/colors';

const RegistrationTruckInfo = ({navigation}) => {
  const scrollViewRef = useRef();
  const [steps, setStep] = useState(1);
  const [vehicleBrand, setVehicleBrand] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [plateNumberError, setPlateNumberError] = useState(false);
  const [truck, setTruck] = useState('');
  const [driverLicense, setDriverLicense] = useState(null);
  const [registrationCard, setRegistrationCard] = useState(null);
  const [insuranceCard, setInsuranceCard] = useState(null);

  return (
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
        <BotChatBubble text="Now that we have your personal information, lets move on to your truck information" />
        <BotChatBubble text="What is the brand of your vehicle?" />
        <View style={styles.spacer} />
        {/* step 2 */}
        {steps > 1 && (
          <View>
            <UserChatBubble>
              <Text style={styles.textWhite}>{vehicleBrand}</Text>
            </UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="Whats your license plate number?" />
            {plateNumberError && (
              <View>
                <BotChatBubble text="License plate number is required. Whats your license plate number?" />
              </View>
            )}
          </View>
        )}
        {/* step 2 */}
        {steps > 2 && (
          <View>
            <UserChatBubble>
              <Text style={styles.textWhite}>{plateNumber}</Text>
            </UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="Choose a vehicle to display" />
          </View>
        )}
        {steps > 3 && (
          <View>
            <UserChatBubble>
              <Text style={styles.textWhite}>I like this one</Text>
              {truck === 'truck1' && (
                <View
                  style={{backgroundColor: 'white', padding: 20, marginTop: 5}}>
                  <Image source={require('../../../../assets/truck1.png')} />
                </View>
              )}
              {truck === 'truck2' && (
                <View
                  style={{backgroundColor: 'white', padding: 20, marginTop: 5}}>
                  <Image source={require('../../../../assets/truck2.png')} />
                </View>
              )}
              {truck === 'truck3' && (
                <View
                  style={{backgroundColor: 'white', padding: 20, marginTop: 5}}>
                  <Image source={require('../../../../assets/truck3.png')} />
                </View>
              )}
              {truck === 'truck4' && (
                <View
                  style={{backgroundColor: 'white', padding: 20, marginTop: 5}}>
                  <Image source={require('../../../../assets/truck4.png')} />
                </View>
              )}
            </UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="Three more steps to completion!" />
            <BotChatBubble text="Can you please attach a picture of you drivers license?" />
          </View>
        )}
        {steps > 4 && (
          <View>
            {/* <UserChatBubble>
              <Text style={styles.textWhite}>{plateNumber}</Text>
            </UserChatBubble> */}
            <View style={styles.floatRight}>
              <Image
                source={{uri: driverLicense}}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="cover"
              />
            </View>

            <View style={styles.spacer} />
            <BotChatBubble text="Great! can you do the same with your registration card?" />
          </View>
        )}
        {steps > 5 && (
          <View>
            {/* <UserChatBubble>
              <Text style={styles.textWhite}>{plateNumber}</Text>
            </UserChatBubble> */}
            <View style={styles.floatRight}>
              <Image
                source={{uri: registrationCard}}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="cover"
              />
            </View>

            <View style={styles.spacer} />
            <BotChatBubble text="Awesome! And one more time with your insurance card?" />
          </View>
        )}
        {steps > 6 && (
          <View>
            {/* <UserChatBubble>
              <Text style={styles.textWhite}>{plateNumber}</Text>
            </UserChatBubble> */}
            <View style={styles.floatRight}>
              <Image
                source={{uri: insuranceCard}}
                style={{
                  width: 100,
                  height: 100,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.spacer} />
            <BotChatBubble text="Thank you! Your profile is now complete!" />
          </View>
        )}
      </ScrollView>
      {/* bottom choose language*/}
      {steps === 1 && (
        <ToolContainer>
          <SelectButton
            onPress={() => {
              setVehicleBrand('Freightliner');
              setStep(2);
            }}
            text="Freightliner"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Kenworth');
              setStep(2);
            }}
            text="Kenworth"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Peterbilt');
              setStep(2);
            }}
            text="Peterbilt"
          />
          <SelectButton
            onPress={() => {
              setVehicleBrand('Volvo');
              setStep(2);
            }}
            text="Volvo"
          />
        </ToolContainer>
      )}
      {steps === 2 && (
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
              name="platenumber"
              placeholder=""
              value={plateNumber}
              onChangeText={text => setPlateNumber(text)}
            />
            <Icon
              name="send"
              size={30}
              onPress={() => {
                if (plateNumber.length < 1) {
                  setPlateNumberError(true);
                } else {
                  setStep(3);
                }
              }}
              color="#4CB75C"
              style={{position: 'absolute', right: 15, top: 40}}
            />
          </View>
        </View>
      )}
      {steps === 3 && (
        <ToolContainer>
          <View style={styles.rowCon}>
            <TouchableOpacity
              onPress={() => {
                setTruck('truck1');
                setStep(4);
              }}>
              <View style={styles.truck}>
                <Image
                  source={require('../../../../assets/truck1.png')}
                  style={{
                    resizeMode: 'contain',
                  }}
                  width={90}
                  height={50}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTruck('truck2');
                setStep(4);
              }}>
              <View style={styles.truck}>
                <Image
                  source={require('../../../../assets/truck2.png')}
                  style={{
                    resizeMode: 'contain',
                  }}
                  width={90}
                  height={50}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowCon}>
            <TouchableOpacity
              onPress={() => {
                setTruck('truck3');
                setStep(4);
              }}>
              <View style={styles.truck}>
                <Image
                  source={require('../../../../assets/truck3.png')}
                  style={{
                    resizeMode: 'contain',
                  }}
                  width={90}
                  height={50}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setTruck('truck4');
                setStep(4);
              }}>
              <View style={styles.truck}>
                <Image
                  source={require('../../../../assets/truck4.png')}
                  style={{
                    resizeMode: 'contain',
                  }}
                  width={90}
                  height={50}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ToolContainer>
      )}
      {steps === 4 && (
        <PickPicture
          takePhotoFromCamera={() => {
            ImagePicker.openCamera({
              compressImageMaxWidth: 300,
              compressImageMaxHeight: 300,
              cropping: true,
              compressImageQuality: 0.7,
              //   includeBase64: true,
              multiple: false,
            }).then(async image => {
              setDriverLicense(image.path);
              setStep(5);
            });
          }}
          choosePhotoFromLibrary={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.7,
            }).then(image => {
              setDriverLicense(image.path);
              setStep(5);
            });
          }}
        />
      )}
      {steps === 5 && (
        <PickPicture
          takePhotoFromCamera={() => {
            ImagePicker.openCamera({
              compressImageMaxWidth: 300,
              compressImageMaxHeight: 300,
              cropping: true,
              compressImageQuality: 0.7,
              //   includeBase64: true,
              multiple: false,
            }).then(async image => {
              setRegistrationCard(image.path);
              setStep(6);
            });
          }}
          choosePhotoFromLibrary={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.7,
            }).then(image => {
              setRegistrationCard(image.path);
              setStep(6);
            });
          }}
        />
      )}
      {steps === 6 && (
        <PickPicture
          takePhotoFromCamera={() => {
            ImagePicker.openCamera({
              compressImageMaxWidth: 300,
              compressImageMaxHeight: 300,
              cropping: true,
              compressImageQuality: 0.7,
              //   includeBase64: true,
              multiple: false,
            }).then(async image => {
              setInsuranceCard(image.path);
              setStep(7);
            });
          }}
          choosePhotoFromLibrary={() => {
            ImagePicker.openPicker({
              width: 300,
              height: 300,
              cropping: true,
              mediaType: 'photo',
              multiple: false,
              compressImageQuality: 0.7,
            }).then(image => {
              setInsuranceCard(image.path);
              setStep(7);
            });
          }}
        />
      )}
    </View>
  );
};
export default RegistrationTruckInfo;

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
  textWhite: {
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
  truck: {
    backgroundColor: colors.bg.tertiary,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  rowCon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
