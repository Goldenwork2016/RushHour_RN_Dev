/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/**
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useMemo, useState} from 'react';
import {applyMiddleware, createStore} from 'redux';

import {AuthContext} from './src/services/auth/auth.context';
import Loading from './src/components/loading/LoadingComponent';
import Navigation from './src/infrastructure/navigation';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/components/loading/splash.screen';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import authReducer from './src/store/reducers/auth';
import {theme} from './src/infrastructure/theme';
import thunk from 'redux-thunk';

const App = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [isSplash, setIssplash] = useState(false);
  const [user, setUser] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUser('yes');
    },
    signOut: () => {
      setUser(null);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIssplash(true);
    }, 1000);

    setTimeout(() => {
      setIsLoad(true);
    }, 3000);
  }, []);
  const middlewares = [thunk];

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );

  const store = createStoreWithMiddleware(authReducer);
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={authContext}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {isLoad && isSplash ? (
              <Navigation user={user} />
            ) : !isSplash && !isLoad ? (
              <SplashScreen />
            ) : (
              <Loading />
            )}
            <StatusBar style="auto" />
          </ThemeProvider>
        </Provider>
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

export default App;
