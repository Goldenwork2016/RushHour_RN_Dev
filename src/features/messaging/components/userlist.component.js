import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const UserListContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-bottom: ${props => props.theme.space[3]};
`;
const UserInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const UserName = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.dark};
`;
const TruckText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text.secondary};
`;
const ImageUser = styled.Image``;

const ImageContainer = styled.View`
  padding-right: ${props => props.theme.space[4]};
`;

const UserList = ({item}) => {
  return (
    <UserListContainer
      style={item.index === 0 ? styles.dispatcherImg : styles.userImg}>
      <ImageContainer>
        <ImageUser
          style={item.index === 0 ? styles.dispatcher : styles.user}
          source={require('../../../../assets/dispatcher.png')}
        />
      </ImageContainer>
      <UserInfo
        style={item.index === 0 ? styles.dispatcherInfo : styles.userInfo}>
        <UserName>Haary wings</UserName>
        <TruckText>Truck 231</TruckText>
      </UserInfo>
    </UserListContainer>
  );
};

const styles = StyleSheet.create({
  dispatcherImg: {paddingRight: 0},
  userImg: {paddingLeft: 15},
  dispatcherInfo: {paddingRight: 0},
  userInfo: {paddingLeft: 20},
  dispatcher: {width: 91, height: 91, borderRadius: 40},
  user: {width: 56, height: 56, borderRadius: 40},
});
export default UserList;
