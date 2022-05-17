/* eslint-disable prettier/prettier */

import {FORGETPASSWORD, RESETPASSWORD} from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
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
