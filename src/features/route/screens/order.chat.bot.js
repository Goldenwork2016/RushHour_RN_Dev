/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import {
  AngleBottomLeft,
  AngleBottomRight,
  AngleTopLeft,
  AngleTopRight,
  BarCodeScanner,
  BarcodeDetected,
  BarcodeText,
  BottomOverlay,
  LeftAndRightOverlay,
  Lockbackground,
  OverlayWrapper,
  PlaceholderIcon,
  Rectangle,
  RectangleContainer,
  ScanBar,
  TopOverlay,
} from '../../settings/components/scan-components/barcode.scanner';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {AsyncStorage} from '@react-native-async-storage/async-storage';
import BotChatBubble from '../../dvir/components/botChatBubble';
import BotChatBubbleNoAvatar from '../../dvir/components/bot.bubble.without.avatar';
import BottomLeft from '../../../../assets/anglebottomleft.png';
import BottomRight from '../../../../assets/anglebottomright.png';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import QRCodeScanner from 'react-native-qrcode-scanner';
import RNImageToPdf from 'react-native-image-to-pdf';
import TopLeft from '../../../../assets/angletopleft.png';
import TopRight from '../../../../assets/angletopright.png';
import UserChatBubble from '../../account/components/chatbot/userChatBubble';
import {constants} from './../../../core/constants';

// import 'react-native-reanimated';



const getWidth = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const OrderChatBot = ({route, navigation}) => {
  const [steps, setStep] = useState(1);
  const [isBarcode, setIsbarcode] = useState(false);
  const scrollViewRef = useRef();
  const [scanCode, setScanCode] = useState('');
  const [error, setError] = useState('');

  const [scanned, setScanned] = useState(null);
  const [doc1, setDoc1] = useState(null);
  const [doc2, setDoc2] = useState(null);
  const [doc3, setDoc3] = useState(null);
  const [doc4, setDoc4] = useState(null);
  const {orderStop} = route.params;
  const takePhotoFromCameraScan = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setScanned(image.path);
      setStep(2);
    });
  };
  const takePhotoFromCameraDoc1 = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      console.log(image.path.replace(/file:\/\//g, ''));
      setDoc1(image.path);
      setStep(3);
    });
  };
  const takePhotoFromCameraDoc2 = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setDoc2(image.path);
      setStep(4);
    });
  };
  const takePhotoFromCameraDoc3 = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setDoc3(image.path);
      setStep(5);
    });
  };
  const takePhotoFromCameraDoc4 = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      createPdf(image.path);
      setDoc4(image.path);
      setStep(6);
    });
  };
  const onSuccess = e => {
    setScanCode(e.data);
    console.log(e.data);
    const orderNumber = orderStop.orderNumber;
    orderStop.routeItems.forEach(item => {
      if (orderNumber === e.data) {
        setIsbarcode(false);
        setStep(2);
      } else {
        setIsbarcode(false);
        setStep(1);
        setError('Invalid order code, please rescan');
      }
    });
  };
  const createPdf = async image4 => {
    try {
      const options = {
        imagePaths: [
          doc1.replace(/file:\/\//g, ''),
          doc2.replace(/file:\/\//g, ''),
          doc3.replace(/file:\/\//g, ''),
          image4.replace(/file:\/\//g, ''),
        ],
        name: 'scanned_documents.pdf',
        quality: 0.7, // optional compression paramter
        targetPathRN: '/storage/emulated/0/Download/', // only for android version 9 and lower
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);

      console.log(pdf.filePath);
      const token = await AsyncStorage.getItem('token');
      const docFormdata = new FormData();
      docFormdata.append('file', {
        type: 'image/jpg',
        uri: pdf.filePath,
        name: pdf.filePath.split('/').pop(),
      });
      docFormdata.append('type', `${orderStop.orderNumber}`);
      docFormdata.append('id', `${orderStop.orderNumber}`);
      // https://beta.rushhourapp.com/api/v1/Attachments/upload/:entityType/:entityId
      const uploadRes = await fetch(
        constants.apiBaseUrl +
          `Attachments/upload/${orderStop.orderNumber}/${orderStop.orderNumber}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: 'text/plain',
            Authorization: 'Bearer ' + token,
          },
          body: docFormdata,
        },
      );
      const docUrl = await uploadRes.json();
      console.log('res ' + docUrl);
    } catch (e) {
      console.log(e);
    }
  };
  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };
  const renderPallets = () => {
    return orderStop.routeItems.map((data, index) => {
      return (
        <Text style={{color: 'white'}} key={index}>
          {data.quantity} {data.orderItem.orderItemType}, Weight:{' '}
          {data.orderItem.formatedWeight.replace('lb', '')}{' '}
          {data.orderItem.formattedUnitOfMeasure === ''
            ? 'lb'
            : data.orderItem.formattedUnitOfMeasure}
        </Text>
      );
    });
  };
  return (
    <View style={{flex: 1}}>
      {isBarcode ? (
        <BarCodeScanner>
          {scanCode ? (
            <Lockbackground>
              <BarcodeDetected>
                <BarcodeText>Barcode detected</BarcodeText>
              </BarcodeDetected>
            </Lockbackground>
          ) : null}

          <QRCodeScanner
            showMarker
            onRead={onSuccess}
            cameraStyle={{height: SCREEN_HEIGHT}}
            customMarker={
              <RectangleContainer>
                <TopOverlay />
                <OverlayWrapper>
                  <LeftAndRightOverlay />
                  <Rectangle>
                    <AngleTopLeft source={TopLeft} />
                    <AngleTopRight source={TopRight} />
                    <AngleBottomLeft source={BottomLeft} />
                    <AngleBottomRight source={BottomRight} />
                    <PlaceholderIcon />
                    <ScanBar
                      direction="alternate-reverse"
                      iterationCount="infinite"
                      duration={1700}
                      easing="linear"
                      animation={makeSlideOutTranslation(
                        'translateY',
                        SCREEN_WIDTH * -0.54,
                      )}
                    />
                  </Rectangle>
                  <LeftAndRightOverlay />
                </OverlayWrapper>

                <BottomOverlay />
              </RectangleContainer>
            }
          />
        </BarCodeScanner>
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
            <BotChatBubble text="Hows it going?" />
            <BotChatBubbleNoAvatar text="Firstly, please confirm the order details" />
            <UserChatBubble>{renderPallets()}</UserChatBubble>
            <View style={styles.spacer} />
            <BotChatBubble text="Please scan the barcodes on each pallet" />
            {error !== '' ? <BotChatBubbleNoAvatar text={error} /> : null}
            <View style={styles.spacer} />
            {steps > 1 && (
              <View>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>Pallet Scanned</Text>
                    {/* <Image
                      style={{
                        borderRadius: 25,
                        width: 180,
                        height: 163,
                        resizeMode: 'cover',
                      }}
                      source={{uri: scanned}}
                    /> */}
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <BotChatBubble text="Next, I need you to scan in the following 4 documents" />
                <BotChatBubble text="1- Bill of Lading (BOL)" />
              </View>
            )}
            {steps > 2 && (
              <View>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Image
                      style={{
                        borderRadius: 25,
                        width: 180,
                        height: 163,
                        resizeMode: 'cover',
                      }}
                      source={{uri: doc1}}
                    />
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>Bill of Lading (BOL)</Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <BotChatBubble text="2- Proof of delivery (POD)" />
              </View>
            )}
            {steps > 3 && (
              <View>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Image
                      style={{
                        borderRadius: 25,
                        width: 180,
                        height: 163,
                        resizeMode: 'cover',
                      }}
                      source={{uri: doc2}}
                    />
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>
                      Proof of Delivery (POD)
                    </Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <BotChatBubble text="3- Tripsheet (TRP)" />
              </View>
            )}
            {steps > 4 && (
              <View>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Image
                      style={{
                        borderRadius: 25,
                        width: 180,
                        height: 163,
                        resizeMode: 'cover',
                      }}
                      source={{uri: doc3}}
                    />
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>Tripsheet (TRP)</Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <BotChatBubble text="4- Cat Scale (SCL)" />
              </View>
            )}
            {steps > 5 && (
              <View>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Image
                      style={{
                        borderRadius: 25,
                        width: 180,
                        height: 163,
                        resizeMode: 'cover',
                      }}
                      source={{uri: doc4}}
                    />
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>Cat Scale (SCL)</Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
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
              <TouchableOpacity
                onPress={() => {
                  setIsbarcode(true);
                }}>
                <View style={styles.circleCon}>
                  <Image
                    source={require('../../../../assets/scan.png')}
                    style={{width: 34, height: 34}}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {steps === 2 && (
            <View
              style={{
                paddingHorizontal: 5,
                alignContent: 'center',
                height: '20%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={takePhotoFromCameraDoc1}>
                <View style={styles.circleCon}>
                  <Icon name="camera" size={30} color="#4CB75C" />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {steps === 3 && (
            <View
              style={{
                paddingHorizontal: 5,
                alignContent: 'center',
                height: '20%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={takePhotoFromCameraDoc2}>
                <View style={styles.circleCon}>
                  <Icon name="camera" size={30} color="#4CB75C" />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {steps === 4 && (
            <View
              style={{
                paddingHorizontal: 5,
                alignContent: 'center',
                height: '20%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={takePhotoFromCameraDoc3}>
                <View style={styles.circleCon}>
                  <Icon name="camera" size={30} color="#4CB75C" />
                </View>
              </TouchableOpacity>
            </View>
          )}
          {steps === 5 && (
            <View
              style={{
                paddingHorizontal: 5,
                alignContent: 'center',
                height: '20%',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity onPress={takePhotoFromCameraDoc4}>
                <View style={styles.circleCon}>
                  <Icon name="camera" size={30} color="#4CB75C" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default OrderChatBot;

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
