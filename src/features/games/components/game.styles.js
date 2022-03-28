import styled from 'styled-components/native';

export const GameContainer = styled.View`
  min-height: 100%;
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const BackGroundImage = styled.ImageBackground.attrs({
  source: require('../../../../assets/games.png'),
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  backgroundPosition: 'center',
  marginTop: '70%',
  imageStyle: {
    height: 185,
  },
})`
  flex: 1;
`;
export const GameText = styled.Text`
  margin-top: ${props => props.theme.space[3]};
  text-align: center;
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.caption};
`;
