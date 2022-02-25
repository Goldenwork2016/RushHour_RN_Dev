/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../../infrastructure/theme/colors';

const BotChatBubble = props => {
  return (
    <View style={styles.botContainerWithAvatar}>
      <Image
        source={require('../../../../../assets/person.png')}
        style={styles.imageAvatar}
      />
      <View style={styles.botContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
};

export default BotChatBubble;

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
