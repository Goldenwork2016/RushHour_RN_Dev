/* eslint-disable prettier/prettier */

import { StyleSheet, View } from 'react-native';

import React from 'react';

const ToolContainer = (props) => {
  return (
    <View style={styles.action}>
        {props.children}
    </View>
  );
};

export default ToolContainer;

const styles = StyleSheet.create({
    action: {
        backgroundColor: '#F4F6FB',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // position:'absolute',
        // bottom:0,
        width:'100%',
        // height: 100,
      },
});
