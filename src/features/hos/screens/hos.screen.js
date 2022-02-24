import React, {useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../infrastructure/theme/colors';

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
const ChatContainer = styled.View`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const HosScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <MainContainer>
      <Lockbackground>
        <SearchBarContainer>
          <SearchInput
            placeholder="1km"
            value={searchQuery}
            onChangeText={onChangeSearch}
          />
          <SearchIcon name="search" onPress={onChangeSearch} />
        </SearchBarContainer>
      </Lockbackground>
      <ChatContainer>
        <Text>hello me</Text>
      </ChatContainer>
    </MainContainer>
  );
};

export default HosScreen;
