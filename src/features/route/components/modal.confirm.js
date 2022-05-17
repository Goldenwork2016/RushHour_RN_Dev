/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Dimensions, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

import BotWhiteChatBubble from './botBubbleWhite';
import ButtonSubmit from '../../dvir/components/button';
import CancelButton from './cancel.button';
import React from 'react';

const getHeight = Dimensions.get('window').height;
const ConfirmModal = ({isVisible, hideModal, onPickPress, onCancelPress}) => {
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
        <View style={{flex: 1, justifyContent: 'space-between', marginBottom: 40, marginTop: 100}}>
        <BotWhiteChatBubble text="Great Driving! Please confirm you were able to access the relevant  location."/>
          <View>
          <ButtonSubmit text="I have arrived successfully"
            // onPress={
            onPress={onPickPress}
          />
          <CancelButton text="Pickup/ delivery attempt unsuccessful" onPress={onCancelPress}/>
          </View>
         
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmModal;

