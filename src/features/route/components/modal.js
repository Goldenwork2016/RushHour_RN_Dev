/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

import ButtonSubmit from '../../dvir/components/button';
import React from 'react';

const getHeight = Dimensions.get('window').height;
const ArrivedModal = ({isVisible, hideModal, onPress}) => {
  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'transparent',
          borderRadius: 12,
          marginLeft: 16,
          marginRight: 16,
          paddingBottom: 20,
          justifyContent: 'center',
          height: getHeight,
        }}>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 40}}>
          <ButtonSubmit
            text="Arrived"
            onPress={onPress}
          />
        </View>
      </Modal>
    </Portal>
  );
};

export default ArrivedModal;

