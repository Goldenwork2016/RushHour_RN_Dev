/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import BotChatBubble from '../../dvir/components/botChatBubble';
import CancelButton from '../components/cancel.button';
import Icon from 'react-native-vector-icons/Ionicons';
import OrderDetailsModal from '../components/order.details.modal';
import {Provider} from 'react-native-paper';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {colors} from '../../../infrastructure/theme/colors';
import {useRef} from 'react';
import {useState} from 'react';

const getWidth = Dimensions.get('window').width;
// const getHeight = Dimensions.get('window').height;

const OrderDetail = ({route,navigation}) => {
  const scrollViewRef = useRef();
  const [checkedDetail, setCheckedDetail] = useState(false);
  const [visible, setVisible] = useState(false);

  const {orderStop} = route.params;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const renderItems = () => {
    return orderStop.routeItems.map((data, index) => {
      const [checkedPalled, setCheckedPalled] = useState(false);
      return (
        <View style={styles.checkContainer} key={index}>
            {checkedPalled ? (
              <Icon
                name="checkbox-outline"
                size={40}
                color={colors.brand.primary}
                onPress={() => {
                  setCheckedPalled(!checkedPalled);
                }}
              />
            ) : (
              <Icon
                name="square"
                size={40}
                color="white"
                onPress={() => {
                  setCheckedPalled(!checkedPalled);
                }}
              />
            )}
            <Text style={styles.textBold}>{data.quantity} {data.orderItem.orderItemType}, Weight: {data.orderItem.formatedWeight.replace('lb', '')} {data.orderItem.formattedUnitOfMeasure === '' ? 'lb' : data.orderItem.formattedUnitOfMeasure}</Text>
          </View>
      );
    });
  };
  return (
    <Provider>
      <View style={styles.container}>
        <ImageBackground
          width={getWidth}
          resizeMode="cover"
          source={require('../../../../assets/gradient_bg.png')}
          style={{
            width: getWidth,
            resizeMode: 'cover',
            padding: 10,
            backgroundColor: '#4CB75C',
            marginTop: 40,
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
            Order Details
          </Text>
          <TouchableOpacity onPress={showModal}>
            <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>
              _________________
            </Text>
          </TouchableOpacity>
        </ImageBackground>
        <ScrollView
          contentContainerStyle={{
            padding: 20,
            flex: 1,
            backgroundColor: 'white',
          }}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          <View style={styles.spacer} />
          <View style={styles.spacer} />
          <BotChatBubble text="Firstly, please confirm the order details" />
        </ScrollView>
        <View style={styles.action}>
          {renderItems()}
          <View style={{margin: 20}}>
            <CancelButton text="Next"  onPress={()=> navigation.navigate('OrderChatBot', {orderStop: orderStop})}/>
          </View>
        </View>
      </View>
      <OrderDetailsModal isVisible={visible} hideModal={hideModal} orderStop={orderStop} />
    </Provider>
  );
};

export default OrderDetail;

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
  check: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
  },
  checkContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: getWidth,
  },
  action: {
    backgroundColor: '#F4F6FB',
    paddingHorizontal: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    width: getWidth,
    // position: 'absolute',
    // bottom: 0,
    // height: 100,
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
    marginHorizontal: 30,
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
  icon: {width: 25, height: 25, marginBottom: 5},
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-around',
  },
});
