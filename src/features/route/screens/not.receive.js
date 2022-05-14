/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {ScrollView, StyleSheet, View} from 'react-native';

import BotChatBubble from '../../dvir/components/botChatBubble';
import React from 'react';
import {useRef} from 'react';

const NotReceived = ({navigation}) => {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      contentContainerStyle={{padding: 20, flex: 1, backgroundColor: 'white'}}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }>
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <BotChatBubble text="Lets move on to your next task, we will attempt at this task once again, tomorrow." />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
    </ScrollView>
  );
};

export default NotReceived;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    // width: '100%'
  },
  header: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingVertical: 8,
  },
  section: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingVertical: 15,
    marginTop: 5,
  },
  center: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    backgroundColor: 'white',
    // borderColor: 'red',
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
    textAlign: 'center',
    // marginBottom: 20,
    // marginTop: 10,
    color: 'black',
  },
  titleBold: {
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'justify',
    // marginBottom: 20,
    // marginTop: 10,
    color: 'grey',
  },
  textMedium: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'justify',
    // marginBottom: 20,
    // marginTop: 10,
    color: 'black',
  },
  icon: {width: 30, height: 30, marginBottom: 5},
  iconContainer:{flexDirection: 'row', marginVertical: 20, justifyContent:'space-around'},
});
