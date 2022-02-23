import styled from 'styled-components/native';

export const MainContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg.tertiary};
`;

export const DashboardText = styled.Text`
  text-align: center;
  background-color: ${props => props.theme.colors.bg.tertiary};
  color: ${props => props.theme.colors.text.dark};
`;
export const BoxContainer = styled.View`
  justify-content: space-around;
  flex-direction: row;
  margin: 20px;
  align-items: center;
  border-radius: 5px;
`;
export const ItemBox = styled.TouchableOpacity`
  width: 146px;
  height: 146px;
  background-color: ${props => props.theme.colors.bg.primary};
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #93929a;
  align-items: center;
`;

export const BoxText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
`;

export const ImageIcon = styled.Image`
  margin-bottom: ${props => props.theme.space[2]};
`;
