import React from 'react';
import styled from 'styled-components/native';

import ArrowIcon from '../../../../../assets/arrowforward.png';
import {
  ListSection,
  ListItem,
  SettingText,
  ForwardImage,
} from '../../components/setting.styles';

import {
  ScanContainer,
  Divider,
  ScanText,
} from '../../components/scan-components/scan.styles';

const ScanScreen = ({navigation}) => {
  return (
    <>
      <ScanContainer>
        <ScanText>Scan and review all documents here</ScanText>
        <Divider />
        <ListSection onPress={() => navigation.navigate('BarcodeScanner')}>
          <ListItem>
            <SettingText>Scan Bar Code</SettingText>
          </ListItem>
          <ForwardImage source={ArrowIcon} />
        </ListSection>
        <ListSection onPress={() => null}>
          <ListItem>
            <SettingText>Scan Documents</SettingText>
          </ListItem>
          <ForwardImage source={ArrowIcon} />
        </ListSection>
      </ScanContainer>
    </>
  );
};

export default ScanScreen;
