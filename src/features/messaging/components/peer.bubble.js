/* eslint-disable prettier/prettier */

import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import { colors } from '../../../infrastructure/theme/colors';

const PeerBubble = props => {
  return (
    <View style={styles.peerContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};

export default PeerBubble;

const styles = StyleSheet.create({
  peerContainer: {
    backgroundColor: '#F4F6FB',
    color: colors.text.dark,
    padding: 20,
    width: '60%',
    marginLeft: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  peerRow: {
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
