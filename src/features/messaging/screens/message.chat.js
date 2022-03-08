/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

import CurrentUserBubble from '../components/current.user.bubble';
import Icon from 'react-native-vector-icons/Ionicons';
import InputForm from '../../../components/form-control/InputFormComponent';
import PeerBubble from '../components/peer.bubble';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../../../infrastructure/theme/colors';

const getWidth = Dimensions.get('window').width;
const MessagingChat = ({navigation}) => {
const scrollViewRef = useRef();
  const [typeMessage, setMessage] = useState('');
  const [messages, setMessages] = useState([
    'Hi',
    'Hello',
  ]);

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            backgroundColor: colors.bg.tertiary,
            justifyContent: 'flex-start',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../../assets/headshots.png')}
            style={styles.imageAvatar}
          />
          <Text
            style={{
              marginLeft: 20,
              color: 'black',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            Chat with Zach - Truck 154
          </Text>
        </View>
        <Text
          style={
            (styles.text, {alignSelf: 'center', margin: 20, color: '#BEC2CE'})
          }>
          Today at 5:03 PM
        </Text>
        <PeerBubble text="Hello, are you nearby?" />
        <CurrentUserBubble>
          <Text style={(styles.text, {color: 'white'})}>
            I’ll be there in a few mins
          </Text>
        </CurrentUserBubble>
        <PeerBubble text="OK, I am waiting at Vinmark Store" />
        {messages.map(x => {
         return <CurrentUserBubble>
            <Text style={{color: 'white'}}>{x}</Text>
          </CurrentUserBubble>;
          //   </View>;
        })}
      </ScrollView>
      <View>
        <View
          style={{
            backgroundColor: '#F4F6FB',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
          }}>
          <InputForm
            // style={{flex: 1}}
            autoCapitalize="none"
            name="message"
            placeholder="Sup buddy..."
            value={typeMessage}
            style={{backgroundColor: 'white', width: getWidth * 0.95}}
            onChangeText={text => setMessage(text)}
          />
          <Icon
            name="send"
            size={30}
            onPress={()=>{
                setMessages(oldM=>[...oldM, typeMessage]);
               setMessage('');
            }}
            color="#4CB75C"
            style={{position: 'absolute', right: 15, top: 40}}
          />
        </View>
      </View>
    </View>
  );
};

export default MessagingChat;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  circleCon: {
    width: 100,
    height: 100,
    backgroundColor: '#F4F6FB',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  spacer: {
    margin: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  textBold: {
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
  floatRight: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  checked: {
    width: 37,
    height: 37,
    backgroundColor: '#2E3A59',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  action: {
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: getWidth,
    // position: 'absolute',
    // bottom: 0,
    // height: 100,
  },
  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    marginRight: 10,
    // borderWidth: 3,
    // borderColor: 'red',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {color: 'black', fontSize: 24, fontWeight: 'bold'},
});
