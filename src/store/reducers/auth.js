/* eslint-disable prettier/prettier */

import {FORGETPASSWORD, LOGIN, RESETPASSWORD, SIGNUP} from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
      };
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
      };
    case FORGETPASSWORD:
      return {
        token: action.token,
      };
    case RESETPASSWORD:
      return {token: action.token};

    default:
      return state;
  }
};
