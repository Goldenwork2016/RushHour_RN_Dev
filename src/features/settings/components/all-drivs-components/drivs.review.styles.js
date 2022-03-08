import styled from 'styled-components/native';

export const OnScroll = styled.ScrollView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const ReviewContainer = styled.View`
  padding: ${props => props.theme.space[4]};
`;
export const ReviewTitle = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.space[2]};
`;

export const ListOfMorning = styled.View`
  flex-direction: row;
  padding-left: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[3]};
`;
export const ItemOfMorning = styled.View`
  max-width: 219px;
`;
export const ListOfText = styled.Text`
  color: #1d232e;
  font-size: ${props => props.theme.fontSizes.text};
  margin-bottom: ${props => props.theme.space[1]};
`;
export const ListCommentText = styled.Text`
  color: #807f7f;
  font-size: ${props => props.theme.fontSizes.caption};
`;
export const MarkIcon = styled.Image`
  width: 27px;
  height: 27px;
  margin-right: ${props => props.theme.space[3]};
`;

export const Signature = styled.View`
  border: 1px solid #93929a;
  box-sizing: border-box;
  border-radius: 12px;
  padding: ${props => props.theme.space[3]};
  margin-top: ${props => props.theme.space[4]};
  align-items: center;
`;
export const SignImage = styled.Image`
  width: 170px;
  height: 36px;
`;

export const DeclarationText = styled.Text`
  color: #1d232e;
  font-size: ${props => props.theme.fontSizes.caption};
  padding: ${props => props.theme.space[3]}
  margin-bottom: ${props => props.theme.space[1]};
  text-align: center;
`;
