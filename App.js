/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import Navigation from './src/infrastructure/navigation';
import Loading from './src/components/loading/LoadingComponent';

const App = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [user, setUser] = useState(true);

  setTimeout(() => {
    setIsLoad(true);
  }, 3000);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        {isLoad ? <Navigation user={user} /> : <Loading />}
        <StatusBar style="auto" />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
