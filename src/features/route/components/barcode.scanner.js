import {
  AngleBottomLeft,
  AngleBottomRight,
  AngleTopLeft,
  AngleTopRight,
  BarCodeScanner,
  BarcodeDetected,
  BarcodeText,
  BottomOverlay,
  LeftAndRightOverlay,
  Lockbackground,
  OverlayWrapper,
  PlaceholderIcon,
  Rectangle,
  RectangleContainer,
  ScanBar,
  TopOverlay,
} from '../../settings/components/scan-components/barcode.scanner';
import React, {useState} from 'react';

import BottomLeft from '../../../../assets/anglebottomleft.png';
import BottomRight from '../../../../assets/anglebottomright.png';
import {Dimensions} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import TopLeft from '../../../../assets/angletopleft.png';
import TopRight from '../../../../assets/angletopright.png';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const PalletBarCodeScanner = () => {
  const [scanCode, setScanCode] = useState('');
  const onSuccess = e => {
    setScanCode(e.data);
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: SCREEN_WIDTH * -0.18,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };

  return (
    <BarCodeScanner>
      {scanCode ? (
        <Lockbackground>
          <BarcodeDetected>
            <BarcodeText>Barcode detected</BarcodeText>
          </BarcodeDetected>
        </Lockbackground>
      ) : null}

      <QRCodeScanner
        showMarker
        onRead={onSuccess}
        cameraStyle={{height: SCREEN_HEIGHT}}
        customMarker={
          <RectangleContainer>
            <TopOverlay />
            <OverlayWrapper>
              <LeftAndRightOverlay />
              <Rectangle>
                <AngleTopLeft source={TopLeft} />
                <AngleTopRight source={TopRight} />
                <AngleBottomLeft source={BottomLeft} />
                <AngleBottomRight source={BottomRight} />
                <PlaceholderIcon />
                <ScanBar
                  direction="alternate-reverse"
                  iterationCount="infinite"
                  duration={1700}
                  easing="linear"
                  animation={makeSlideOutTranslation(
                    'translateY',
                    SCREEN_WIDTH * -0.54,
                  )}
                />
              </Rectangle>
              <LeftAndRightOverlay />
            </OverlayWrapper>

            <BottomOverlay />
          </RectangleContainer>
        }
      />
    </BarCodeScanner>
  );
};

export default PalletBarCodeScanner;
