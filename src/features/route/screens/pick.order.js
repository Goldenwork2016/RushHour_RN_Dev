/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */

import {ScrollView, StyleSheet, Text, View} from 'react-native';

import BotChatBubble from '../../dvir/components/botChatBubble';
import BotChatBubbleNoAvatar from '../../dvir/components/bot.bubble.without.avatar';
import ButtonSubmit from '../../dvir/components/button';
import {Image} from 'react-native';
import React from 'react';
import ZigzagView from 'react-native-zigzag-view';
import {colors} from './../../../infrastructure/theme/colors';
import {useEffect} from 'react';
import {useRef} from 'react';

const PickOrder = ({route, navigation}) => {
  const {orderStop} = route.params;
  const scrollViewRef = useRef();
// customerName: routes[0].customer.customerName,
                // orderId: routes[0].orderNumber,
                // address: routes[0].address.addressLine1,
                // phone: routes[0].customer.phone,
                // orderItem: routes[0].routeItems,
  // useEffect(() => {
  //   // console.log(orderItem[0].orderItem.orderItemType);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <ScrollView
      contentContainerStyle={{padding: 20, backgroundColor: 'white' }}
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }>
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <BotChatBubble text="Awesome!" />
      <BotChatBubbleNoAvatar text="Here are the details for your pickup" />
      <View style={styles.spacer} />
      <ZigzagView backgroundColor="#FFF" surfaceColor="#F4F6FB">
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
            <Text style={styles.titleBold}>NOTED</Text>
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
                source={require('../../../../assets/message1.png')}
                style={styles.icon}
              />
              <Text style={styles.text}>Message</Text>
            </View>
          </View>
        </View>
      </ZigzagView>
      <View style={styles.spacer} />
      <ButtonSubmit
        text="Got it"
        // onPress={
        onPress={() => navigation.navigate('OrderDetail', {orderStop: orderStop})}
      />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
      <View style={styles.spacer} />
    </ScrollView>
  );
};

export default PickOrder;

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
    // overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 3,
    backgroundColor: 'white',
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
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
  },
});
