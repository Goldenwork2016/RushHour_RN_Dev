import React from 'react';
import styled from 'styled-components/native';

const SplashImage = styled.ImageBackground.attrs({
  source: require('../../../assets/splash.png'),
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  backgroundPosition: 'center',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SplashScreen = () => <SplashImage />;

export default SplashScreen;
