/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Modal, Portal, Button, Provider} from 'react-native-paper';

import {colors} from '../../../infrastructure/theme/colors';
import {space} from '../../../infrastructure/theme/spacing';
import OrderList from '../components/orderlist.component';
import HeaderTab from '../components/tap.order.component';
import OrderCompleted from '../components/order.completed.component';

const SafeView = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const MainContainer = styled.View``;
export const Lockbackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/search-bg.png'),
})``;
const SearchBarContainer = styled.View`
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
`;
const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: colors.text.disabled,
})`
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.bg.primary};
  color: ${props => props.theme.colors.text.dark};
`;

const SearchIcon = styled(Icon)`
  position: absolute;
  right: 25px;
  top: 18px;
  color: #4cb75c;
  font-size: 18px;
`;
const OrderListContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
`;
const TagLine = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  align-self: center;
  font-size: ${props => props.theme.fontSizes.caption};
  padding-top: ${props => props.theme.space[3]};
`;
const ListItem = styled(FlatList).attrs({
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 20,
  paddingBottom: 100,
  paddingMargin: 100,
})``;

const OrderScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [tab, setTab] = useState(1);

  const DATA = [
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Paid',
      rating: 5,
    },
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Unpaid',
      rating: 3,
    },
    {
      orderId: '#00769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Paid',
      rating: 4,
    },
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Paid',
      rating: 2,
    },
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Paid',
      rating: 5,
    },
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Paid',
      rating: 5,
    },
    {
      orderId: '#15769839',
      amount: 130,
      addres: '7958 Swift Village',
      payment: 'Unpaid',
      rating: 5,
    },
  ];
  const [data, setData] = useState(DATA);

  return (
    <Provider>
      <SafeView />
      <HeaderTab tab={tab} setTab={setTab} />
      {tab === 1 && (
        <MainContainer>
          <Lockbackground>
            <SearchBarContainer>
              <SearchInput
                placeholder="Search by order #"
                value={searchQuery}
                onChangeText={onChangeSearch}
              />
              <SearchIcon name="search" onPress={onChangeSearch} />
            </SearchBarContainer>
          </Lockbackground>

          <OrderListContainer>
            <TagLine>Success! This order’s complete. Nice one.</TagLine>
            <ListItem
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{height: 300}}
              data={data}
              renderItem={({item}) => <OrderList item={item} />}
            />
          </OrderListContainer>
        </MainContainer>
      )}
      {tab === 2 && (
        <MainContainer>
          <Lockbackground>
            <SearchBarContainer>
              <SearchInput
                placeholder="Search by order #"
                value={searchQuery}
                onChangeText={onChangeSearch}
              />
              <SearchIcon name="search" onPress={onChangeSearch} />
            </SearchBarContainer>
          </Lockbackground>
          <OrderListContainer>
            <ListItem
              ListFooterComponent={<View />}
              ListFooterComponentStyle={{height: 280}}
              data={data}
              renderItem={({item}) => <OrderCompleted item={item} />}
            />
          </OrderListContainer>
        </MainContainer>
      )}
    </Provider>
  );
};

export default OrderScreen;
