/**
 *
 * @format
 * @flow strict-local
 */

import Loading from './src/components/loading/LoadingComponent';
import Navigation from './src/infrastructure/navigation';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/components/loading/splash.screen';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';

const App = () => {
  const [isLoad, setIsLoad] = React.useState(false);
  const [isSplash, setIssplash] = React.useState(false);

  setTimeout(() => {
    setIssplash(true);
  }, 1000);

  setTimeout(() => {
    setIsLoad(true);
  }, 3000);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {isLoad && isSplash ? (
          <Navigation />
        ) : !isSplash && !isLoad ? (
          <SplashScreen />
        ) : (
          <Loading />
        )}
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
