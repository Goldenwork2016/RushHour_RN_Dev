import styled from 'styled-components/native';

export const ScanContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  min-height: 100%;
`;
export const Divider = styled.View`
  padding: ${props => props.theme.space[4]};
`;

export const ScanText = styled.Text`
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.text.dark};
  align-self: center;
  margin-top: ${props => props.theme.space[3]};
`;
