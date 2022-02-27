/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';

import BotChatBubble from '../components/botChatBubble';
import BotChatBubbleNoAvatar from '../components/bot.bubble.without.avatar';
import ButtonSubmit from '../components/button';

const DVIRReady = ({navigation}) => {
  const scrollViewRef = useRef();
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../../../assets/dvir_bg.png')}>
      <ScrollView
        contentContainerStyle={{padding: 20}}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <View style={styles.spacer} />
        <View style={styles.spacer} />
        <BotChatBubble text="Awesome! Lets start the day by completing the daily Drivers Vehical Inspection Report - DVIR" />
        <BotChatBubbleNoAvatar text="Let me know when your ready to begin" />
        <View style={styles.spacer} />
      </ScrollView>
      <View
        style={{
          paddingHorizontal: 5,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems:'center',
        }}>
            <ButtonSubmit text="Ready" onPress={()=> navigation.navigate('DVIRChatBot')}/>
      </View>
    </ImageBackground>
  );
};

export default DVIRReady;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    // width: '100%'
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
    overflow: 'hidden',
    borderWidth: 3,
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
    marginBottom: 20,
    marginTop: 10,
    color: 'black',
  },
  exYear: {
    borderRadius: 10,
    borderColor: '#F4F6FB',
    padding: 15,
    borderWidth: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});
