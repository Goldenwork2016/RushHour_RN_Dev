import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../infrastructure/theme/colors';

export const NearbyConatiner = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const SearchBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/search-bg.png'),
})``;
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
export const SearchIcon = styled(Icon)`
  position: absolute;
  right: 25px;
  top: 18px;
  color: #93929a;
  font-size: 18px;
`;
export const NearbyText = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  padding: ${props => props.theme.space[3]};
`;

export const NearbyStopsConatiner = styled.View``;

export const ListItem = styled(FlatList).attrs({
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 20,
})``;

export const FlatlistSpacer = styled.View``;
