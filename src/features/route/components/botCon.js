/* eslint-disable prettier/prettier */

import {Image, StyleSheet, View} from 'react-native';

import React from 'react';
import { colors } from '../../../infrastructure/theme/colors';

const BotChatCon = props => {
  return (
    <View style={styles.botContainerWithAvatar}>
      <Image
        source={require('../../../../assets/person.png')}
        style={styles.imageAvatar}
      />
      <View style={styles.botContainer}>
        {props.children}
      </View>
    </View>
  );
};

export default BotChatCon;

const styles = StyleSheet.create({
  botContainer: {
    backgroundColor: colors.bg.tertiary,
    color: colors.text.dark,
    padding: 20,
    width: '70%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  botContainerWithAvatar: {
    flexDirection: 'row',
    marginBottom: 20,
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
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
});
