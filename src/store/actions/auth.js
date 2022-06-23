/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {constants} from '../../core/constants';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const REG2 = 'REG2';
export const REG3 = 'REG3';
export const REGDVIR = 'REGDVIR';
export const authenticate = token => {
  return dispatch => {
    dispatch({type: SIGNUP, token: token});
    dispatch({type: LOGIN, token: token});
    dispatch({type: REG2, token: token});
    dispatch({type: REG3, token: token});
    dispatch({type: REGDVIR, token: token});
  };
};

export const signup = (email, password, firstname, lastname, fleetId) => {
  return async dispatch => {
    const response = await fetch(
    constants.apiBaseUrl +  'Drivers/Register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstname,
          lastName: lastname,
          // username: username,
          fleetId: fleetId,
        }),
      },
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.token));
    saveUserData(firstname, lastname, firstname + ' ' + lastname, email);
  };
};

export const signup2 = (
  firstname,
  lastname,
  driverImage,
  phoneNumber,
  dob,
  experience,
  language,
  addressLine1,
) => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', {
      type: 'image/jpg',
      uri: driverImage,
      name: driverImage.split('/').pop(),
    });
    const imageUploadRes = await fetch(
      constants.apiBaseUrl +  'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: formData,
      },
    );
    const driverImageUrl = await imageUploadRes.json();
    // console.log('hobby');
    // console.log(driverImageUrl.data);
    const response = await fetch(
      constants.apiBaseUrl + 'Drivers',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname,
          driverImage: driverImageUrl.data,
          phoneNumber: phoneNumber,
          dob: dob,
          experience: experience,
          language: language,
          addressLine1: addressLine1,
        }),
      },
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }
    await AsyncStorage.setItem('driverImage', driverImageUrl.data);
    await AsyncStorage.setItem('phoneNumber', phoneNumber.toString());
    await AsyncStorage.setItem('dob', dob.toString());
    await AsyncStorage.setItem('experience', experience.toString());
    await AsyncStorage.setItem('language', language);
    await AsyncStorage.setItem('addressLine1', addressLine1);
    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.token));
    // saveUserData(firstname,lastname, firstname + ' ' + lastname, email);
  };
};

export const signup3 = (
  firstname,
  lastname,
  vehicleBrand,
  licenseNumber,
  licenseImage,
  registrationCardImage,
  insuranceCardImage,
  vehicleToDisplay,
) => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');
    const licenseFormData = new FormData();
    licenseFormData.append('file', {
      type: 'image/jpg',
      uri: licenseImage,
      name: licenseImage.split('/').pop(),
    });
    const licenseImageRes = await fetch(
      constants.apiBaseUrl + 'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: licenseFormData,
      },
    );
    const licenseImageURL = await licenseImageRes.json();
    console.log('licenseImageURL' + licenseImageURL.data);

    const insuranceFormData = new FormData();
    insuranceFormData.append('file', {
      type: 'image/jpg',
      uri: insuranceCardImage,
      name: insuranceCardImage.split('/').pop(),
    });
    const insuranceRes = await fetch(
      constants.apiBaseUrl + 'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: insuranceFormData,
      },
    );
    const insuranceURL = await insuranceRes.json();

    const registrationCardFormData = new FormData();
    registrationCardFormData.append('file', {
      type: 'image/jpg',
      uri: registrationCardImage,
      name: registrationCardImage.split('/').pop(),
    });
    const registrationRes = await fetch(
      constants.apiBaseUrl + 'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: registrationCardFormData,
      },
    );
    const registrationURL = await registrationRes.json();
    // console.log('registrationUrl' + registrationURL.data);
    const driverImage = await AsyncStorage.getItem('driverImage');
    const phoneNumber = await AsyncStorage.getItem('phoneNumber');
    // const dob = await AsyncStorage.getItem('dob');
    const experience = await AsyncStorage.getItem('experience');
    const language = await AsyncStorage.getItem('language');
    const addressLine1 = await AsyncStorage.getItem('addressLine1');
    const response = await fetch(
      constants.apiBaseUrl + 'Drivers',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          firstName: firstname,
          lastName: lastname,
          driverImage: driverImage,
          phoneNumber: phoneNumber,
          // dob: dob,
          experience: experience,
          language: language,
          addressLine1: addressLine1,
          vehicleBrand: vehicleBrand,
          licenseNumber: licenseNumber,
          licenseImage: licenseImageURL.data,
          registationCardImage: registrationURL.data,
          insurancenCardImage: insuranceURL.data,
          vehicleToDisplay: vehicleToDisplay,
        }),
      },
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.token));
    // saveUserData(firstname,lastname, firstname + ' ' + lastname, email);
  };
};
export const regDVIR = (
  plateNumber,
  frontTruckImage,
  backTruckImage,
  headlightsCheck,
  turnSignalsCheck,
  brakeLightsCheck,
  fluidLeaksCheck,
  hornCheck,
  inspectionSignatureImage,
) => {
  return async dispatch => {
    const token = await AsyncStorage.getItem('token');

    const frontSideFormData = new FormData();
    frontSideFormData.append('file', {
      type: 'image/jpg',
      uri: frontTruckImage,
      name: frontTruckImage.split('/').pop(),
    });
    const frontRes = await fetch(
      'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: frontSideFormData,
      },
    );
    const frontURL = await frontRes.json();

    const backSideFormData = new FormData();
    backSideFormData.append('file', {
      type: 'image/jpg',
      uri: backTruckImage,
      name: backTruckImage.split('/').pop(),
    });
    const backRes = await fetch(
      constants.apiBaseUrl + 'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: backSideFormData,
      },
    );
    const backURL = await backRes.json();

    const inspectionSignatureFormData = new FormData();
    inspectionSignatureFormData.append('file', {
      type: 'image/jpg',
      uri: inspectionSignatureImage,
      name: inspectionSignatureImage.split('/').pop(),
    });
    const inspectionSignatureRes = await fetch(
      constants.apiBaseUrl + 'Images/upload',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: inspectionSignatureFormData,
      },
    );
    const inspectionSignatureURL = await inspectionSignatureRes.json();

    const response = await fetch(
      constants.apiBaseUrl + 'Drivers/StatusCheck',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({
          plateNumber: plateNumber,
          frontTruckImage: frontURL.data,
          backTruckImage: backURL.data,
          headlightsCheck: headlightsCheck,
          turnSignalsCheck: turnSignalsCheck,
          brakeLightsCheck: brakeLightsCheck,
          fluidLeaksCheck: fluidLeaksCheck,
          hornCheck: hornCheck,
          inspectionSignatureImage: inspectionSignatureURL.data,
        }),
      },
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }

    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.token));
    // saveUserData(firstname,lastname, firstname + ' ' + lastname, email);
  };
};
export const login = (fleetId, email, password) => {
  return async dispatch => {
    const response = await fetch(
      constants.apiBaseUrl + 'Auth/Login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          fleetId: fleetId,
          userName: email,
          password: password,
        }),
      },
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.messages[0];
      console.log(errorResData);
      throw new Error(errorId);
    }

    const resData = await response.json();
    const gottenToken = resData.data;
    await AsyncStorage.setItem('token', gottenToken);
    // const token = await AsyncStorage.getItem('token');
    // // console.log(token);
    // console.log(token);
    dispatch(authenticate(resData.token));
    // saveDataToStorage(resData.token);
  };
};

const saveUserData = async (firstName, lastName, fullName, email) => {
  await AsyncStorage.setItem('firstName', firstName);
  await AsyncStorage.setItem('lastName', lastName);
  await AsyncStorage.setItem('fullName', fullName);
  await AsyncStorage.setItem('email', email);
};
