import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const OrderListContainer = styled.View`
  flex-direction: column;
  padding-bottom: ${props => props.theme.space[3]};
  border: 1px solid ${props => props.theme.colors.text.disabled};
  background-color: t ${props => props.theme.colors.ui.light};
  border-radius: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[3]};
  padding: ${props => props.theme.space[3]};
`;
const OrderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const UserName = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.dark};
  margin-bottom: ${props => props.theme.space[2]};
`;
const TruckText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: ${props => props.theme.space[2]};
`;
const StatusText = styled.Text`
  color: ${props => props.theme.colors.brand.primary};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.body};
`;
const ButtonEdit = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.tertiary};
  padding: ${props => props.theme.space[3]};
  width: 47%;
  align-items: center;
  border-radius: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[3]};
`;

const OrderList = ({item}) => {
  return (
    <OrderListContainer>
      <OrderInfo>
        <UserName>Order #15769839</UserName>
        <TruckText>amount: 231</TruckText>
      </OrderInfo>
      <OrderInfo>
        <TruckText>7958 Swift Village {'\n'} Belle Umo</TruckText>
        <StatusText>Paid</StatusText>
      </OrderInfo>
      <OrderInfo>
        <ButtonEdit>
          <TruckText>edit</TruckText>
        </ButtonEdit>
        <ButtonEdit>
          <TruckText>View Details</TruckText>
        </ButtonEdit>
      </OrderInfo>
    </OrderListContainer>
  );
};

export default OrderList;
