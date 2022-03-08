import styled from 'styled-components/native';

export const OnScroll = styled.ScrollView`
  padding-right: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[2]};
`;
export const AllDrivs = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
`;

export const Review = styled.Text`
  align-self: center;
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.caption};
  margin-top: ${props => props.theme.space[3]};
`;

export const SettingContainer = styled.View`
  justify-content: center;
  flex: 1;
  margin-bottom: ${props => props.theme.space[3]};
`;

export const ListSection = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  border-radius: 12px;
  border: 1px;
  border-color: #93929a;
  justify-content: space-between;
  flex-direction: row;
`;

export const ListItem = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: bold;
  margin-top: ${props => props.theme.space[3]}
  margin-left: 24px;
  margin-bottom: ${props => props.theme.space[3]}
`;

export const SettingText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.text};
  margin_right: ${props => props.theme.space[3]};
`;

export const ForwardImage = styled.Image`
  margin-top: ${props => props.theme.space[1]}
  width: 5px;
  height: 10px;
`;
