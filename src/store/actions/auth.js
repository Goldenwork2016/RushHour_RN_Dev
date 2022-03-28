/* eslint-disable prettier/prettier */

export const SIGNUP = 'SIGNUP';
export const authenticate = ( token ) => {
  return dispatch => {
    dispatch({ type: SIGNUP, token: token });
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
          username: username,
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
