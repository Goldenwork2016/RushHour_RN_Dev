import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {space} from '../../../infrastructure/theme/spacing';
import {colors} from '../../../infrastructure/theme/colors';
import UserList from '../components/userlist.component';

const MainContainer = styled.View``;
const SearchBarContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
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
const ChatContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const ChatListView = styled(FlatList).attrs({
  paddingLeft: 32,
  paddingRight: 32,
  paddingTop: 32,
  paddingBottom: 32,
})``;

const MessageScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <MainContainer>
      <SearchBarContainer>
        <SearchInput
          placeholder="Search user"
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
        <SearchIcon name="search" onPress={onChangeSearch} />
      </SearchBarContainer>
      <ChatContainer>
        <ChatListView
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 150}}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          renderItem={(item, index) => <UserList item={item} index={index} />}
        />
      </ChatContainer>
    </MainContainer>
  );
};

export default MessageScreen;
