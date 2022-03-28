/* eslint-disable prettier/prettier */

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const authenticate = ( token ) => {
  return dispatch => {
    dispatch({ type: SIGNUP, token: token });
    dispatch({ type: LOGIN, token: token });
  };
};
export const signup = (email, password, name, username, fleetId) => {
  return async dispatch => {
    const response = await fetch(
      'https://beta.rushhourapp.com/api/v1/Drivers/Register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          userName: username,
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
    dispatch(
      authenticate(
        resData.token,
      )
    );
  };
};
export const login = (fleetId, password, username,) => {
  return async dispatch => {
    const response = await fetch(
      'https://beta.rushhourapp.com/api/v1/Auth/Login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/plain',
        },
        body: JSON.stringify({
          fleetId: fleetId,
          password: password,
          userName: username,
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
    dispatch(
      authenticate(
        resData.token,
      )
    );
  };
};
