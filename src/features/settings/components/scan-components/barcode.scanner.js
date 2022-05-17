import * as Animatable from 'react-native-animatable';

import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const overlayColor = 'rgba(244, 246, 251, 0.5)'; // this gives us a black color with a 50% transparency

const rectDimensions = SCREEN_WIDTH * 0.65; // this is equivalent to 255 from a 393 device width
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = 'white';

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = 'red';

export const BarCodeScanner = styled.View`
  height: 100%;
  background-color: ${props => props.theme.colors.bg.primary};
`;
export const RectangleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const Rectangle = styled.View`
  height: ${rectDimensions}px;
  width: ${rectDimensions}px;
  border-style: dashed;
  border-width: ${rectBorderWidth}px;
  border-color: ${rectBorderColor};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  margin-right: 2px;
`;

export const OverlayWrapper = styled.View`
  flex-direction: row;
`;
export const TopOverlay = styled.View`
  flex: 1;
  height: ${SCREEN_WIDTH}px;
  margin-top: -200px;
  width: ${SCREEN_WIDTH}px;
  background-color: ${overlayColor};
  justify-content: center;
  alignitems: center;
  z-index: 0;
`;

export const BottomOverlay = styled.View`
  flex: 1;
  height: ${SCREEN_WIDTH}px;
  width: ${SCREEN_WIDTH}px;
  background-color: ${overlayColor};
  paddingbottom: ${SCREEN_WIDTH * 0.25}px;
  z-index: 0;
`;
export const LeftAndRightOverlay = styled.View`
  height: ${SCREEN_WIDTH * 0.65}px;
  width: ${SCREEN_WIDTH}px;
  background-color: ${overlayColor};
  z-index: 0;
`;
export const ScanBar = styled(Animatable.View)`
  width: ${scanBarWidth}px;
  height: ${scanBarHeight}px;
  padding-top: 2px;
  background-color: ${scanBarColor};
`;
export const Lockbackground = styled.ImageBackground.attrs({
  source: require('../../../../../assets/search-bg.png'),
})`
  z-index: 999;
`;
export const BarcodeDetected = styled.TouchableOpacity`
  padding: ${props => props.theme.space[3]};
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
export const BarcodeText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.inverse};
`;

export const PlaceholderIcon = styled.Image`
  height: ${SCREEN_WIDTH * 0.73}px;
`;
export const AngleTopLeft = styled.Image`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 20px;
  height: 20px;
`;
export const AngleTopRight = styled.Image`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
`;
export const AngleBottomLeft = styled.Image`
  position: absolute;
  bottom: -4px;
  left: -5px;
  width: 20px;
  height: 20px;
  z-index: -999;
`;
export const AngleBottomRight = styled.Image`
  position: absolute;
  bottom: -4px;
  right: -5px;
  width: 20px;
  height: 20px;
`;
