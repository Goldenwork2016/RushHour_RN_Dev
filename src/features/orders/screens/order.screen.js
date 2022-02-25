import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../infrastructure/theme/colors';
import OrderList from '../components/orderlist.component';

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
  background-color: #fff;
  color: #000;
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

const ChatListView = styled(FlatList).attrs({
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 32,
  paddingBottom: 100,
  paddingMargin: 100,
})``;

const OrderScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
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
        <ChatListView
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 150}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          renderItem={item => <OrderList item={item} />}
        />
      </OrderListContainer>
    </MainContainer>
  );
};

export default OrderScreen;
