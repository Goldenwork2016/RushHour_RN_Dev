import styled from 'styled-components/native';
import {Badge} from 'react-native-paper';

export const SettingContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  flex: 1;
  justify-content: center;
`;

export const ListSection = styled.TouchableOpacity`
  margin-left: ${props => props.theme.space[4]};
  margin-right: ${props => props.theme.space[4]};
  background-color: ${props => props.theme.colors.bg.primary};
  padding-top: ${props => props.theme.space[3]};
  padding-bottom: ${props => props.theme.space[3]};
  padding-left: ${props => props.theme.space[4]};
  padding-right: ${props => props.theme.space[4]};
  margin-bottom: 21px;
  border-radius: 12px;
  border: 1px;
  border-color: #93929a;
  justify-content: space-between;
  flex-direction: row;
`;

export const ListItem = styled.View`
  flex-direction: row;
`;
export const NotificationBadge = styled(Badge)`
  background-color: #3bc2de;
  color: ${props => props.theme.colors.text.inverse};
  margin-left: ${props => props.theme.space[2]};
`;
export const SettingText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.text};
`;

export const ForwardImage = styled.Image`
  margin-top: ${props => props.theme.space[1]}
  width: 5px;
  height: 10px;
`;
