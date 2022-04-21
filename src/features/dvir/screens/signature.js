/* eslint-disable prettier/prettier */

import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Signature from 'react-native-signature-canvas';

const SignatureScreen = ({navigation}) => {
  const [signature, setSign] = useState(null);

  const handleOK = (sign) => {
    // console.log(sign);
    navigation.goBack();
    setSign(sign);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: #4CB75C;
      color: #FFF;
    }`;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={'contain'}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleOK}
        onEmpty={handleEmpty}
        descriptionText="Inspection Signature Image"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  );
};
export default SignatureScreen;
const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 200,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  previewText: {
    color: '#FFF',
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#69B2FF',
    width: 120,
    textAlign: 'center',
    marginTop: 10,
  },
});