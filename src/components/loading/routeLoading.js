/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Image, ImageBackground} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {ProgressBar} from 'react-native-paper';
import styled from 'styled-components/native';

// import {Image} from 'react-native';

// const LoadingContainer = styled.ImageBackground`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;

// `;

const LoadingText = styled.Text`
  width: 230px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
  marginTop: 20;
`;

// const LoadingImage = styled.Image`
//     width: 40,
//     height: 40,
//     borderRadius: 150 / 2,
//     overflow: 'hidden',
//     marginRight: 10,
// `;

var seconds = 0;

const RouteLoading = ({navigation}) => {
  const initial = {
    timerValue: 0,
    progress: 0,
  };

  const [progress, setProgress] = useState(initial);

  const timer = useCallback(() => {
    const intervalId = setInterval(() => {
      if (!progress.progress.timerValue) {
        return;
      }
      setProgress(
        {
          timerValue: progress.progress.timerValue + 1,
        },
        () => {
          if (progress.progress.timerValue === 5) {
            setProgress({
              timerValue: 0,
            });
          }
        },
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [progress.progress.timerValue]);

  const incrementSeconds = () => {
    setInterval(() => {
      seconds = seconds + 1;

      if (seconds > 5) {
        seconds = 1;
      }
      setProgress({
        seconds: seconds,
        progress: (25 * seconds) / 100,
      });
    }, 600);
  };

  useEffect(() => {
    timer();
    incrementSeconds();
  }, [timer]);

  return (
    <ImageBackground
      style={{
        paddingTop: 40,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
      source={require('../../../assets/routeLoadingBg.png')}>
      <Image
        style={{
          width: 100,
          height: 100,
          borderRadius: 150 / 2,
          overflow: 'hidden',
          marginRight: 10,
        }}
        source={require('../../../assets/dispatcher.png')}
      />
      <LoadingText>“Your all set, Drive safely”</LoadingText>
      <ProgressBar
        progress={progress.progress}
        color="#4CB75C"
        style={{
          height: 5,
          width: 230,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
    </ImageBackground>
  );
};

export default RouteLoading;
