/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import * as RNFS from 'react-native-fs';

import {AirbnbRating, Rating} from 'react-native-ratings';
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
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotChatBubble from '../../dvir/components/botChatBubble';
import BotChatBubbleNoAvatar from '../../dvir/components/bot.bubble.without.avatar';
import BotChatCon from '../components/botCon';
import BotChatConOutline from '../components/botConOutline';
import BottomLeft from '../../../../assets/anglebottomleft.png';
import BottomRight from '../../../../assets/anglebottomright.png';
import ButtonSubmit from './../../dvir/components/button';
import CancelButton from '../components/cancel.button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import PickPicture from './../../account/components/chatbot/choosepicture';
import QRCodeScanner from 'react-native-qrcode-scanner';
import RNImageToPdf from 'react-native-image-to-pdf';
import Signature from 'react-native-signature-canvas';
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
  const [holder, setHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [exp, setExp] = useState('');
  const [email, setEmail] = useState('');
  const [action, setAction] = useState('');

  const [scanned, setScanned] = useState(null);
  const [doc1, setDoc1] = useState(null);
  const [doc2, setDoc2] = useState(null);
  const [doc3, setDoc3] = useState(null);
  const [doc4, setDoc4] = useState(null);

  const [sign, setSign] = useState(null);
  const [plateNumber, setPlateNumber] = useState('');
  const [fName, setFName] = useState('');
  const [isSign, setIsSign] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [receipt, setReceipt] = useState();
  const {orderStop} = route.params;
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
      multiple: false,
    }).then(async image => {
      // console.log(image.path);
      setReceipt(image.path);
      setStep(12);
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
      setReceipt(image.path);
      setStep(12);
    });
  };
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
 const ratingCompleted = (rating)=> {
    console.log('Rating is: ' + rating);
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
  const sendReceipt = async () => {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(constants.apiBaseUrl + 'Accounting/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        customer: orderStop.customer,
      }),
    });
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }
    const resData = await response.json();
    setStep(6);
    console.log(resData);
  };
  const payment = async (method) => {
    const token = await AsyncStorage.getItem('token');
    const response = await fetch(constants.apiBaseUrl + 'Accounting/Payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        orderId: orderStop.orderId,
        paymentId: 27107182,
        paymentAmount: 10,
        paymentMethodType: method,
        customer: orderStop.customer,
        paymentMethod: {
          paymentMethodId: -24372959,
          customerId: orderStop.customer.customerId,
        },
        appliedPayments: [],
      }),
    });
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }
    const resData = await response.json();
    setStep(6);
    console.log(resData);
  };
  const handleOK = async signData => {
    console.log(signData);
    const path = RNFS.DownloadDirectoryPath + '/sign.png';
    await RNFS.writeFile(
      path,
      signData.replace('data:image/png;base64,', ''),
      'base64',
    ).then(async image => {
      setSign('file:///storage/emulated/0/Download/sign.png');

      setError(null);
      setIsSign(false);
      // setIsLoading(true);
    });
  };

  const handleEmpty = () => {
    console.log('Empty');
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
  const style = `.m-signature-pad--footer
    .button {
      background-color: #4CB75C;
      color: #FFF;
    }`;
  return isSign ? (
    <View style={{flex: 1}}>
      <View style={styles.spacer} />
      {/* {isLoading ? (
        <ActivityIndicator size="small" color="#4CB75C" />
      ) : ( */}
      <Signature
        style={{justifyContent: 'flex-end'}}
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Inspection Signature Image"
        clearText="Clear"
        confirmText="Confirm"
        webStyle={style}
      />
      {/* )} */}
    </View>
  ) : (
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
                <BotChatCon>
                  <Text style={styles.text}>Thanks for the documents!</Text>
                </BotChatCon>
                <BotChatConOutline>
                  <Text style={styles.text}>
                    Now for payment... Please collect $350 from{' '}
                    {orderStop.customer.customerName}
                  </Text>
                </BotChatConOutline>
                <BotChatConOutline>
                  <Text style={styles.text}>Choose a payment method</Text>
                </BotChatConOutline>
                {/* <BotChatConOutline>
                  <Text style={styles.text}>
                    Please have The costumer sign below
                  </Text>
                </BotChatConOutline> */}
              </View>
            )}
            {/* {steps > 8 && (
              <View style={{justifyContent: 'space-between'}}>
                <View style={styles.floatRight}>
                  <Image
                    source={require('../../../../assets/signature.png')}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View>
                  <BotChatCon>
                    <Text style={styles.text}>
                      Did you lay out any money along the way?
                    </Text>
                  </BotChatCon>
                </View>
              </View>
            )}
            {steps > 9 && (
              <View style={{justifyContent: 'space-between'}}>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>Yes! I layed out money</Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View>
                  <BotChatCon>
                    <Text style={styles.text}>
                      Where did you lay out money?
                    </Text>
                  </BotChatCon>
                </View>
              </View>
            )}
            {steps > 10 && (
              <View style={{justifyContent: 'space-between'}}>
                <View style={styles.floatRight}>
                  <UserChatBubble>
                    <Text style={{color: 'white'}}>At the airport</Text>
                  </UserChatBubble>
                </View>
                <View style={styles.spacer} />
                <View>
                  <BotChatCon>
                    <Text style={styles.text}>
                      Thank you for laying out money, please attached an image
                      of your reciept
                    </Text>
                  </BotChatCon>
                </View>
              </View>
            )}
            {steps > 11 && (
              <View style={{justifyContent: 'space-between'}}>
                <View style={styles.floatRight}>
                  <Image
                    source={{uri: receipt}}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.spacer} />
                <View>
                  <BotChatCon>
                    <Text style={styles.text}>
                      You will be refunded shhortly.
                    </Text>
                  </BotChatCon>
                  <BotChatCon>
                    <Text style={styles.text}>
                      How would you rate this location?
                    </Text>
                  </BotChatCon>
                </View>
                <View>
                  <Rating
                    type="custom"
                    ratingColor="#4CB75C"
                    ratingBackgroundColor="#c8c7c8"
                    ratingCount={5}
                    imageSize={30}
                    onFinishRating={ratingCompleted}
                    style={{paddingVertical: 10}}
                  />
                </View>
              </View>
            )} */}
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
                  // setStep(8);
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
          {steps === 6 && (
            <View style={styles.action}>
              <CancelButton
                onPress={() => {
                  setStep(7);
                  setAction('Cash');
                }}
                text="Cash"
              />
              <CancelButton
                onPress={() => {
                  setStep(7);
                  setAction('Credit');
                }}
                text="Credit"
              />
              <CancelButton
                onPress={() => {
                  setStep(7);
                  setAction('Invoice');
                }}
                text="Send Invoice"
              />
            </View>
          )}
          {steps === 7 && action === 'Credit' && (
            <View style={styles.action}>
              <Text style={styles.textBold}>Credit card details</Text>
              <View style={styles.inputCon}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  style={{width: getWidth * 0.86}}
                  required
                  value={holder}
                  onChangeText={text => setHolder(text)}
                  placeholder="Card Holder"
                />
              </View>
              <View style={styles.spacer} />
              <View style={styles.inputCon}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  required
                  value={cardNumber}
                  style={{width: getWidth * 0.86}}
                  onChangeText={text => setCardNumber(text)}
                  placeholder="Card Number"
                />
              </View>
              <View style={styles.spacer} />
              <View style={{flexDirection: 'row'}}>
                <View style={styles.inputCon}>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="off"
                    style={{width: getWidth * 0.35}}
                    required
                    value={cardNumber}
                    onChangeText={text => setCardNumber(text)}
                    placeholder="Exp"
                  />
                </View>
                <View style={{width: 20}} />
                <View style={styles.inputCon}>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="off"
                    style={{width: getWidth * 0.4}}
                    required
                    value={cvv}
                    onChangeText={text => setCvv(text)}
                    placeholder="CVV"
                  />
                </View>
              </View>
              <View style={styles.spacer} />
              <ButtonSubmit
                text="Proceed"
                onPress={() => {
                  payment(2);
                }}
              />
            </View>
          )}
          {steps === 7 && action === 'Cash' && (
            <View style={styles.action}>
              <ButtonSubmit
                text="Accept $350 Cash"
                onPress={() => {
                  payment(1);
                }}
              />
            </View>
          )}

          {steps === 7 && action === 'Invoice' && (
            <View style={styles.action}>
              <Text style={styles.textBold}>Send invoice to...</Text>
              <View style={styles.inputCon}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  style={{width: getWidth * 0.86}}
                  required
                  value={holder}
                  onChangeText={text => setHolder(text)}
                  placeholder="Enter Email address"
                />
              </View>
              <View style={styles.spacer} />
              <ButtonSubmit text="Send" onPress={() => {
               setStep(8);
                }} />
            </View>
          )}
          {/* {steps === 8 && <View style={styles.action}></View>} */}
          {steps === 8 && (
            <View style={styles.action}>
              <Text style={styles.textBold}>Email Receipt?</Text>
              <View style={styles.spacer} />
              <ButtonSubmit text="Yes" onPress={() => null} />
              <View style={styles.spacer} />
              <View
                style={{
                  borderColor: 'grey',
                  borderLeftWidth: 5,
                  paddingHorizontal: 10,
                }}>
                <TextInput
                  autoCapitalize="none"
                  autoComplete="off"
                  style={{width: getWidth * 0.86}}
                  required
                  value={holder}
                  onChangeText={text => setHolder(text)}
                  placeholder="Enter Email address"
                />
                <Icon
                  name="send"
                  size={30}
                  onPress={() => {
                    console.log('Hello');
                    sendReceipt();
                  }}
                  color="#4CB75C"
                  style={{position: 'absolute', right: 15, top: 10}}
                />
              </View>
              <View style={styles.spacer} />
              <CancelButton text="No" onPress={() => null} />
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
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
  inputCon: {
    backgroundColor: '#fff',
    // width: getWidth * 0.9,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
