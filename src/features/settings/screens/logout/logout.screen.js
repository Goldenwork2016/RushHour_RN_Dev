import React, {useState, useContext} from 'react';
import {Portal, Provider} from 'react-native-paper';

import {AuthContext} from '../../../../services/auth/auth.context';
import AlertIcon from '../../../../../assets/danger.png';

import {
  LogOutContainer,
  LogOutModal,
  ModalContent,
  LogOutHeader,
  LogOutContent,
  HeaderTitle,
  AlertImage,
  LogOutText,
  Lockbackground,
  CancelButtom,
  CancelButtomText,
  SignOutButtom,
  LogOutButtomText,
} from '../../components/logout-components/logout.styles';

const LogoutScreen = ({navigation}) => {
  const [visible, setVisible] = useState(true);
  const {signOut} = useContext(AuthContext);

  return (
    <Provider>
      <LogOutContainer>
        <Portal>
          <LogOutModal visible={visible}>
            <ModalContent>
              <LogOutHeader>
                <HeaderTitle>Important note</HeaderTitle>
              </LogOutHeader>
              <LogOutContent>
                <AlertImage source={AlertIcon} />
                <LogOutText>
                  Sure you want to log out? Your assigned tasks aren’t yet
                  complete.
                </LogOutText>
                <Lockbackground>
                  <CancelButtom onPress={() => navigation.goBack('Logout')}>
                    <CancelButtomText>Cancel</CancelButtomText>
                  </CancelButtom>
                </Lockbackground>
                <SignOutButtom onPress={signOut}>
                  <LogOutButtomText>Sign out</LogOutButtomText>
                </SignOutButtom>
              </LogOutContent>
            </ModalContent>
          </LogOutModal>
        </Portal>
      </LogOutContainer>
    </Provider>
  );
};

export default LogoutScreen;
