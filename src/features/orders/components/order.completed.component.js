import OrderModal from './order.modal.component';
import React from 'react';
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

const AddreasText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: #93929a;
  margin-bottom: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[1]};
  margin-top: ${props => props.theme.space[3]};
`;

const ButtonEdit = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.tertiary};
  padding: ${props => props.theme.space[3]};
  width: 47%;
  align-items: center;
  border-radius: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[3]};
`;
const ButtonText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.text};
`;

const OrderCompleted = ({item}) => {
  // const {orderId} = item;
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <OrderListContainer>
      <OrderInfo>
        <UserName>Order #{item.orderId}</UserName>
      </OrderInfo>
      <OrderInfo>
        <AddreasText>
          {item.orderStops[0].address.fullAddress} {'\n'}{' '}
          {item.customer.customerName}
        </AddreasText>
      </OrderInfo>
      <OrderInfo>
        <ButtonEdit>
          <ButtonText>Edit</ButtonText>
        </ButtonEdit>

        <ButtonEdit onPress={showModal}>
          <ButtonText>View Details</ButtonText>
        </ButtonEdit>
      </OrderInfo>
      <OrderModal visible={visible} hideModal={hideModal} item={item} />
    </OrderListContainer>
  );
};

export default OrderCompleted;
