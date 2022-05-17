/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';

export const FORGETPASSWORD = 'FORGETPASSWORD';
export const RESETPASSWORD = 'RESETPASSWORD';
export const reAuthenticate = () => {
  return dispatch => {
    dispatch({type: FORGETPASSWORD});
    dispatch({type: RESETPASSWORD});
  };
};
export const forgetPassword = email => {
  return async dispatch => {
    const response = await fetch(
      'https://beta.rushhourapp.com/api/v1/Auth/ForgotPassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          UserName: email,
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
    await AsyncStorage.setItem(
        'reset_email', email,
      );
    console.log(resData);
    dispatch(reAuthenticate());
  };
};
export const resetPassword = (password, confirmPassword, token) => {
  return async dispatch => {
    const email = await AsyncStorage.getItem('reset_email');
    const response = await fetch(
      'https://beta.rushhourapp.com/api/v1/Auth/ResetPassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          userName: email,
          password: password,
          confirmPassword: confirmPassword,
          token: token,
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
    dispatch(reAuthenticate());
  };
};
