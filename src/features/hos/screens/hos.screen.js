import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import ProgressCircle from '../components/hos.component';
import {
  DeviceStatus,
  HeaderTitle,
  MainContainer,
  SearchBackground,
  SubmitButton,
  SearchBarContainer,
  SearchInput,
  CycleTimeContainer,
  Cycle,
  AvailableTime,
  DayStatus,
  SearchIcon,
  BodyConatiner,
  ProgressContainer,
  OnTouch,
  ButtonText,
  StartButtonText,
  DeserveText,
} from '../components/hos.styles';

const HosScreen = () => {
  const [selected, setSelected] = useState('Driving');

  const onChangeSearch = query => setSelected(query);
  const data = [
    {
      percentage: 14,
      color: '#3BC2DE',
      max: 14,
      title: '14 hr. on duty limit',
    },
    {
      percentage: 0,
      color: '#3BC2DE',
      max: 14,
      title: '11 hr. on duty limit',
    },
    {
      percentage: 0,
      color: '#3BC2DE',
      max: 100,
      title: 'Until break',
    },
    {
      percentage: 14,
      color: '#3BC2DE',
      max: 14,
      title: 'Until end of cycle',
    },
  ];

  return (
    <>
      <DeviceStatus />
      <MainContainer>
        <HeaderTitle>Hours of service</HeaderTitle>
        <SearchBackground>
          <SearchBarContainer>
            <SearchInput
              placeholder="1km"
              value={selected}
              onChangeText={setSelected}
            />
            <SearchIcon name="chevron-down-outline" onPress={onChangeSearch} />
          </SearchBarContainer>
        </SearchBackground>
        <CycleTimeContainer>
          <Cycle>
            <DayStatus>Cycle 14 h/70 h</DayStatus>
          </Cycle>
          <AvailableTime>
            <DayStatus>Available time 56:30 h</DayStatus>
          </AvailableTime>
        </CycleTimeContainer>
        <BodyConatiner>
          <ProgressContainer>
            {data.map((p, i) => {
              return (
                <ProgressCircle
                  key={i}
                  percentage={p.percentage}
                  color={p.color}
                  delay={500 + 100 * i}
                  max={p.max}
                  title={p.title}
                />
              );
            })}
          </ProgressContainer>
          <OnTouch onPress={() => null}>
            <ButtonText>Nearest reststops</ButtonText>
          </OnTouch>
          <SubmitButton>
            <TouchableOpacity onPress={() => null}>
              <StartButtonText>Start Break</StartButtonText>
            </TouchableOpacity>
          </SubmitButton>
          <DeserveText>🎉 You deserve it’</DeserveText>
        </BodyConatiner>
      </MainContainer>
    </>
  );
};

export default HosScreen;
