import styled from 'styled-components/native';

export const MainContiner = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: left;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const HeadingContainer = styled.View`
  margin-bottom: 135px;
  align-items: center;
`;

export const AuthContainer = styled.ScrollView``;

export const Group = styled.View``;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.text.inverse};
`;

export const SubmitButton = styled.ImageBackground.attrs({
  source: require('../../../../assets/button-bg.png'),
  borderRadius: 12,
})`
    width: 350px;
    align-items: center;
    border-radius: 12px;
    padding-top: ${props => props.theme.space[3]}
    padding-bottom: ${props => props.theme.space[3]}
    margin-bottom: ${props => props.theme.space[2]};
`;

export const OnTouch = styled.TouchableOpacity`
  margin-top: 0;
  margin-bottom: 0;
`;
