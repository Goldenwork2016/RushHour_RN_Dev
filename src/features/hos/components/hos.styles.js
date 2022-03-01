import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../infrastructure/theme/colors';

export const isAndroid = Platform.OS === 'android';
export const DeviceStatus = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const HeaderTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.h5};
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.text.dark};
  ${isAndroid ? 'padding-top: 12px;' : 'padding-top: 7px;'}
  padding-bottom: ${props => props.theme.space[2]};
`;
export const MainContainer = styled.ScrollView`
  height: 100%;
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const SearchBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/search-bg.png'),
})``;

export const SubmitButton = styled.ImageBackground.attrs({
  source: require('../../../../assets/button-bg.png'),
  borderRadius: 12,
})`
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[3]};
  align-items: center;
`;
export const SearchBarContainer = styled.View`
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
`;
export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: colors.text.disabled,
})`
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: #fff;
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
`;

export const CycleTimeContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.disabled};
  background-color: ${props => props.theme.colors.bg.tertiary};
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: ${props => props.theme.space[3]};
`;

export const Cycle = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
  width: 50%;
  border-right: 1px;
  border-color: #4b4a4a;
  border-right-width: 1px;
  padding-right: ${props => props.theme.space[2]};
`;
export const AvailableTime = styled.View`
  border-right: 5px solid red;
  flex-direction: row;
  align-self: flex-start;
  width: 50%;
  padding-left: ${props => props.theme.space[2]};
`;
export const DayStatus = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  font-weight: 300;
  color: ${props => props.theme.colors.text.dark};
`;
export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 25px;
  top: 18px;
  color: #93929a;
  font-size: 18px;
`;
export const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -20px;
  padding-bottom: 30px;
`;
export const BodyConatiner = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
`;

export const OnTouch = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.tertiary};
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[3]};
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
`;
export const StartButtonText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.inverse};
`;
export const DeserveText = styled.Text`
  align-self: center;
  color: ${props => props.theme.colors.text.dark};
`;
