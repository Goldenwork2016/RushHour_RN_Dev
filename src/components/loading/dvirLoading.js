/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useCallback, useEffect, useState} from 'react';

import {Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import styled from 'styled-components/native';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const LoadingText = styled.Text`
  width: 230px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
`;

const LoadingImage = styled.Image`
  width: 80%;
  height: 50%;
`;

var seconds = 0;

const DVIRLoading = ({navigation}) => {
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
          if (progress.progress.timerValue == 5) {
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
    <LoadingContainer>
      <Image source={require('../../../assets/rushhour_2.png')} />
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
    </LoadingContainer>
  );
};

export default DVIRLoading;
