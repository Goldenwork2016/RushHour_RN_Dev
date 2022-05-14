/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';

import React from 'react';

const OrderDetailsModal = ({isVisible, hideModal, orderStop}) => {
  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          marginLeft: 16,
          marginRight: 16,
          paddingBottom: 20,
          justifyContent: 'center',
        }}>
        <View style={{padding: 20}}>
          <View style={styles.header}>
            <Text style={styles.textBold}>{orderStop.customer.customerName}</Text>
            <Text style={styles.textBold}>{orderStop.address.fullAddress}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.titleBold}>Details</Text>
            <Text style={styles.textMedium}>
              Order #{orderStop.orderNumber} {orderStop.routeItems[0].quantity}{' '}
              {orderStop.routeItems[0].orderItem.orderItemType}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'red'}}>Unpaid </Text>
              <Text style={styles.textMedium}> - collect $350 upon pickup</Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.titleBold}> NOTED</Text>
            <Text style={styles.textMedium}>{orderStop.routeItems[0].notes}</Text>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.image}>
              <Image
                source={require('../../../../assets/call.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>Call</Text>
            </View>
            <View style={styles.image}>
              <Image
                source={require('../../../../assets/textmessage.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>Message</Text>
            </View>
          </View>
          <TouchableOpacity onPress={hideModal}>
            <Text style={{color: '#93929A', textAlign: 'center', fontSize: 20}}>
              _________
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  );
};

export default OrderDetailsModal;

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
      overflow: 'visible',
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 3,
      backgroundColor: '#F4F6FB',
      // borderColor: 'red',
    },
    imageAvatar: {
      width: 40,
      height: 40,
      borderRadius: 150 / 2,
      overflow: 'hidden',
      marginRight: 5,
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
