import styled from 'styled-components/native';

const overlayColor = 'rgba(244, 246, 251, 0.86)';
export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const NotificationContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;
export const Notification = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.theme.colors.bg.tertiary};
  padding: ${props => props.theme.space[3]};
  border-radius: 12px;
  margin-bottom: ${props => props.theme.space[3]};
`;
export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.text.dark};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin: ${props => props.theme.space[3]};
  font-weight: bold;
`;
export const ImageIcon = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: ${props => props.theme.space[3]};
`;

export const NotificationText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
  width: 188px;
  margin-right: ${props => props.theme.space[3]};
`;

export const TimeText = styled.Text`
  color: ${props => props.theme.colors.text.disabled};
  font-size: 13px;
  align-self: baseline;
  text-transform: uppercase;
`;

export const DeleteOverly = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${overlayColor};
  border-radius: 12px;
  z-index: 99;
  padding-right: -100px;
`;
export const Delete = styled.Image`
  position: absolute;
  right: 10px;
  top: 8px;
  width: 16px;
  height: 16px;
  z-index: 9999;
`;
export const OnTouch = styled.TouchableOpacity`
  padding: ${props => props.theme.space[2]};
`;
