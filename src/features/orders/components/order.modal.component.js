import {Modal, Portal} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';

const ModalContainer = styled.View`
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.space[3]};
  background_olor: ${props => props.theme.colors.bg.primary}
  margin: ${props => props.theme.space[3]};
  border-radius: 12px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  border-bottom-color: ${props => props.theme.colors.bg.tertiary}
  padding-bottom: ${props => props.theme.space[3]}
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin-top: ${props => props.theme.space[3]};
  margin-bottom: ${props => props.theme.space[3]};
  justify-content: space-evenly;
`;

const CloseIcon = styled(Icon)`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #93929a;
`;

const HeaderGroup = styled.View``;
const OnTouch = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.bg.tertiary};
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.space[4]};
  width: 67px;
  height: 67px;
`;

const Address = styled.Text`
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text.dark};
  padding-bottom: ${props => props.theme.space[2]};
  padding-top: ${props => props.theme.space[2]};
`;
const OrderId = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.text.dark};
`;
const ImageCall = styled.Image`
  width: 31px;
  height: 31px;
`;
const ImageMessage = styled.Image`
  width: 28px;
  height: 24px;
  align-self: center;
  margin-top: 6px;
`;

const Section = styled.View`
  margin-bottom: ${props => props.theme.space[3]};
`;
const ItemList = styled.View`
  padding: 0px;
  color: ${props => props.theme.colors.text.error};
  margin: 0px;
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
`;
const SectionTitle = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  font-weight: bold;
  color: #bec2ce;
`;
const BulletText = styled.Text`
  color: #bec2ce;
  font-size: ${props => props.theme.fontSizes.body};
  font-weight: bold;
`;
const ListText = styled.Text`
  color: ${props => props.theme.colors.text.dark};
  font-size: ${props => props.theme.fontSizes.text};
  flex: 1;
  padding-left: ${props => props.theme.space[2]};
`;

const ScannedDocuments = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  width: 130px;
  height: 112px;
  border: 1px;
  border-color: #93929a;
  border-radius: 12px;
  margin-right: ${props => props.theme.space[2]};
  margin-top: ${props => props.theme.space[2]};
  align-items: center;
  justify-content: center;
`;
const ScannedScrollView = styled.ScrollView``;
const DocumentText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
`;
const VerifyImage = styled.Image`
  width: 10px;
  height: 9px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
const Signature = styled.View`
  border: 1px;
  border-color: #bec2ce;
  border-width: 1px;
  border-radius: 12px;
  margin-top: ${props => props.theme.space[2]};
`;
const SignatureImage = styled.Image`
  width: 110px;
  height: 70px;
`;
const Rating = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.theme.space[2]};
`;

const RatingIcon = styled(Icon)`
  font-size: ${props => props.theme.fontSizes.h5};
  color: #4cb75c;
`;

const OrderModal = ({visible, hideModal, item}) => {
  // const {orderId, payment, rating} = item;

  const ratingArray = Array.from(new Array(Math.floor(5)));

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          borderRadius: 12,
          marginLeft: 16,
          marginRight: 16,
          paddingBottom: 20,
        }}>
        <>
          <ScrollView vertical>
            <TouchableOpacity onPress={hideModal}>
              <CloseIcon name="close" />
            </TouchableOpacity>
            <ModalContainer>
              <ModalHeader>
                <HeaderGroup>
                  <Address>{item.customer.customerName}</Address>
                  <OrderId>#{item.orderId}</OrderId>
                </HeaderGroup>
                <HeaderGroup>
                  <OnTouch>
                    <ImageCall
                      source={require('../../../../assets/phone.png')}
                    />
                  </OnTouch>
                </HeaderGroup>
                <HeaderGroup>
                  <OnTouch>
                    <ImageMessage
                      source={require('../../../../assets/textmessage.png')}
                    />
                  </OnTouch>
                </HeaderGroup>
              </ModalHeader>
              <Section>
                <SectionTitle>Details</SectionTitle>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>{item.orderStops[0].address.fullAddress}</ListText>
                </ItemList>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>
                    {item.orderItems[0].orderItemStops[0].quantity} Pallets
                  </ListText>
                </ItemList>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>
                    Pallets handed over to Brill - Truck 204, at meeting point
                    x.{' '}
                  </ListText>
                </ItemList>
              </Section>
              <Section>
                <SectionTitle>Payment Details</SectionTitle>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  {/* <ListText
                    style={[
                      payment === 'Paid'
                        ? {
                            color: '#4cb75c',
                            fontWeight: 'bold',
                          }
                        : {color: 'red', fontWeight: 'bold'},
                    ]}>
                    {payment}
                  </ListText> */}
                </ItemList>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>Credit card</ListText>
                </ItemList>
              </Section>
              <Section>
                <SectionTitle>Scanned Documents</SectionTitle>
                <ScannedScrollView horizontal>
                  <ScannedDocuments>
                    <VerifyImage
                      source={require('../../../../assets/right.png')}
                    />
                    <DocumentText>SCl</DocumentText>
                  </ScannedDocuments>
                  <ScannedDocuments>
                    <VerifyImage
                      source={require('../../../../assets/right.png')}
                    />
                    <DocumentText>POD</DocumentText>
                  </ScannedDocuments>
                  <ScannedDocuments>
                    <VerifyImage
                      source={require('../../../../assets/right.png')}
                    />
                    <DocumentText>ISO</DocumentText>
                  </ScannedDocuments>
                </ScannedScrollView>
              </Section>
              <Section>
                <SectionTitle>Client signature</SectionTitle>
                <Signature>
                  <SignatureImage
                    source={require('../../../../assets/signature.png')}
                  />
                </Signature>
              </Section>
              <Section>
                <SectionTitle>
                  This location was given a {5} star rating
                </SectionTitle>
                <Rating>
                  {ratingArray.map((r, i) => (
                    <RatingIcon key={i} name="star" />
                  ))}
                </Rating>
              </Section>
            </ModalContainer>
          </ScrollView>
        </>
      </Modal>
    </Portal>
  );
};
export default OrderModal;
