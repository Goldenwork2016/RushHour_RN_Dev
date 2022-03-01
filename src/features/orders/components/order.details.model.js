/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Modal, Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

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
  border-radius: 50px;
  width: 102px;
  height: 102px;
  justify-content: center;
  align-items: center;
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
  width: 46px;
  height: 46px;
`;
const ImageMessage = styled.Image`
  width: 42px;
  height: 36px;
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

const ContactConatiner = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

const OrderDetailModal = ({visible, hideModal, item}) => {
  const {orderId, payment} = item;

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
                  <Address>Belle Umo</Address>
                  <OrderId>{orderId}</OrderId>
                </HeaderGroup>
              </ModalHeader>
              <Section>
                <SectionTitle>Details</SectionTitle>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>7958 Swift Village</ListText>
                </ItemList>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>9 Pallets</ListText>
                </ItemList>
                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText
                    style={[
                      payment === 'Paid'
                        ? {
                            color: '#4CB75C',
                            fontWeight: 'bold',
                          }
                        : {color: 'red', fontWeight: 'bold'},
                    ]}>
                    {payment}
                  </ListText>
                </ItemList>
              </Section>
              <Section>
                <SectionTitle>Notes</SectionTitle>

                <ItemList>
                  <BulletText>{'\u2022'}</BulletText>
                  <ListText>7958 Swift Village</ListText>
                </ItemList>
              </Section>
              <ContactConatiner>
                <OnTouch>
                  <ImageCall source={require('../../../../assets/phone.png')} />
                </OnTouch>

                <OnTouch>
                  <ImageMessage
                    source={require('../../../../assets/textmessage.png')}
                  />
                </OnTouch>
              </ContactConatiner>
            </ModalContainer>
          </ScrollView>
        </>
      </Modal>
    </Portal>
  );
};
export default OrderDetailModal;
