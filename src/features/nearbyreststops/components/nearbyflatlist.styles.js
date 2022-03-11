import styled from 'styled-components/native';

export const ListContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${props => props.theme.space[3]};
`;

export const ImageContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  margin-right: ${props => props.theme.space[3]};
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 70px;
  border-radius: 12px;
`;
export const ListImage = styled.Image`
  width: 43px;
  height: 36px;
`;

export const ContentContainer = styled.View`
  flex-grow: 1;
`;
export const ListHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${props => props.theme.space[2]};
`;
export const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #93929a;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;
export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: bold;
  color: ${props => props.theme.colors.text.dark};
`;
export const ListText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: #93929a;
`;
export const ListTimeText = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: #93929a;
  text-transform: capitalize;
`;
