import styled from 'styled-components/native';

export const MusicContainer = styled.View`
  min-height: 100%;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const BackGroundImage = styled.ImageBackground.attrs({
  source: require('../../../../assets/headphone.png'),
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  backgroundPosition: 'center',
  marginTop: '65%',
  imageStyle: {
    height: 273,
  },
})`
  flex: 1;
`;

export const MusicText = styled.Text`
  margin-top: ${props => props.theme.space[3]};
  text-align: center;
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.caption};
`;
