/* eslint-disable prettier/prettier */

import { StyleSheet, View } from 'react-native';

import React from 'react';
import { colors } from '../../../infrastructure/theme/colors';

const CurrentUserBubble = props => {
  return (
    <View style={styles.floatRight}>
      <View style={styles.userChatContainer}>{props.children}</View>
    </View>
  );
};

export default CurrentUserBubble;

const styles = StyleSheet.create({
    userChatContainer: {
        backgroundColor: colors.text.secondary,
        color: colors.text.dark,
        padding: 20,
        // width: '70%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginVertical: 10,
        marginRight: 20,
      },
      floatRight: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
      },
});
