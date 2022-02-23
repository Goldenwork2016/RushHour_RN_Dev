/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
// /* eslint-disable */

import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useState, useCallback} from 'react';
import {colors} from '../../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
// import ImagePicker, {openCamera} from 'react-native-image-crop-picker';
import * as ImagePicker from 'react-native-image-picker';
import styled from 'styled-components/native';
import InputForm from '../../../components/form-control/InputFormComponent';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const SignupChatbot = ({navigation}) => {
  const [profilePic, setProfilePic] = useState(null);
  const [imageMime, setImageMime] = useState(null);
  const [steps, setStep] = useState(1);
  const [language, setLanguage] = useState('English');
  const [address, setAddress] = useState('');
//   const [response, setResponse] = useState(null);
  const [pickerResponse, setPickerResponse] = useState(null);
  const Group = styled.View`
    margin-bottom: ${props => props.theme.space[3]};
  `;

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse,);
    setStep(2);
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };
    ImagePicker.launchCamera(options, setPickerResponse);
    setStep(2);
  }, []);

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;
//   console.log(uri);
  // const takePhotoFromCamera = () => {
  //   ImagePicker.openCamera({
  //     compressImageMaxWidth: 300,
  //     compressImageMaxHeight: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //     //   includeBase64: true,
  //     multiple: false,
  //   }).then(image => {
  //     console.log(image.path);
  //     setProfilePic(image.path);
  //     //   alert(image.path.toString());
  //       // console.log(image.mime);
  //       // setImageMime(image.mime);
  //     setStep(2);
  //   });
  // };
  // const choosePhotoFromLibrary = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 300,
  //     cropping: true,
  //     compressImageQuality: 0.7,
  //   }).then(image => {
  //     console.log(image);
  //     setProfilePic(image.path);
  //     setStep(2);
  //   });
  // };
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <View style={styles.center}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.image}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '900',
              marginBottom: 20,
              marginTop: 10,
            }}>
            Dispatcher
          </Text>
        </View>
        <View style={styles.botContainerWithAvatar}>
          <View style={styles.imageAvatar}>
            <Text />
          </View>
          <View style={styles.botContainer}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
              Hey John, lets start by creating your personal drivers profile.
            </Text>
          </View>
        </View>
        <View style={styles.botContainerWithAvatar}>
          <Image
            source={require('../../../../assets/person.png')}
            style={styles.imageAvatar}
          />
          <View style={styles.botContainer}>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
              Lets start by getting a picture of you
            </Text>
          </View>
        </View>
        <View style={styles.spacer} />
        {/* step 2 */}
        {steps > 1 && (
          <View>
            <View style={styles.floatRight}>
                  <View style={{width: 200,  height: 100}}>
                     <Image source={{uri: uri }} width= {'100%'} height={'100%'} resizeMode="cover"/>
                  </View>
                {/* // <Image source={require('../../../../assets/userupload.png')} /> */}
            </View>
            <View style={styles.spacer} />
            <View style={styles.botContainerWithAvatar}>
              <Image source={profilePic} style={styles.imageAvatar} />
              <View style={styles.botContainer}>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                  What is your speaking language?
                </Text>
              </View>
            </View>
          </View>
        )}
        {/* step 3 */}
        {steps > 2 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.userChatContainer}>
                <Text style={{color: 'white'}}>I speak {language}</Text>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.botContainerWithAvatar}>
              <Image
                source={require('../../../../assets/person.png')}
                style={styles.imageAvatar}
              />
              <View style={styles.botContainer}>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                  What is your home address?
                </Text>
              </View>
            </View>
            <View style={styles.spacer} />
          </View>
        )}
        {/* step 4 */}
        {steps > 3 && (
          <View>
            <View style={styles.floatRight}>
              <View style={styles.userChatContainer}>
                <Text style={{color: 'white'}}>{address}</Text>
              </View>
            </View>
            <View style={styles.spacer} />
            <View style={styles.botContainerWithAvatar}>
              <Image
                source={require('../../../../assets/person.png')}
                style={styles.imageAvatar}
              />
              <View style={styles.botContainer}>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>
                  When is your birthday??
                </Text>
              </View>
            </View>
            <View style={styles.spacer} />
          </View>
        )}
      </ScrollView>
      {/* bottom pick image*/}
      {steps === 1 && (
        <View
          style={{
            backgroundColor: colors.bg.quaternary,
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.toolContainer}>
              <TouchableOpacity onPress={onCameraPress}>
                <Icon name="camera-outline" size={20} />
              </TouchableOpacity>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>Take Picture</Text>
            </View>
            <View style={styles.toolContainer}>
              <TouchableOpacity onPress={onImageLibraryPress}>
                <Icon name="image-outline" size={20} />
              </TouchableOpacity>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>Gallery</Text>
            </View>
          </View>
        </View>
      )}
      {/* bottom choose language*/}
      {steps === 2 && (
        <View
          style={{
            backgroundColor: colors.bg.quaternary,
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                setLanguage('English');
                setStep(3);
              }}>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => {
                setLanguage('Spanish');
                setStep(3);
              }}>
              <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>Spanish</Text>
            </TouchableOpacity>
            <View
              style={styles.btnContainer}
              onPress={() => {
                setLanguage('Russian');
                setStep(3);
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: 14, fontWeight: '400', color: 'black'}}>Russian</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {steps === 3 && (
        <View
          style={{
            backgroundColor: colors.bg.quaternary,
            paddingBottom: 10,
            alignItems: 'center',
            height: 100,
          }}>
          <View>
            <InputForm
              style={{flex: 1}}
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
    </View>
    // </ScrollView>
  );
};

export default SignupChatbot;

const styles = StyleSheet.create({
  container: {
    // padding: 20,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  botContainer: {
    backgroundColor: colors.bg.tertiary,
    color: colors.text.dark,
    padding: 20,
    width: '70%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  userChatContainer: {
    backgroundColor: colors.text.secondary,
    color: colors.text.dark,
    padding: 20,
    // width: '70%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  botContainerWithAvatar: {
    flexDirection: 'row',
    marginBottom: 20,
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
  btnContainer: {
    backgroundColor: 'white',
    marginRight: 15,
    marginBottom: 15,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    width: 380,
  },
  spacer: {
    margin: 10,
  },
  floatRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
