import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const getHeights = Dimensions.get('window').height;

export const Lockbackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/background.png'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LockIcon = styled.ImageBackground.attrs({
  source: require('../../../../assets/lock.png'),
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  backgroundPosition: 'center',
  marginLeft: '30%',
  marginTop:
    getHeights < 800 && getHeights > 700
      ? getHeights - 80
      : getHeights < 700
      ? getHeights - 55
      : getHeights - 120,
  imageStyle: {
    width:
      getHeights < 800 && getHeights > 700 ? 25 : getHeights < 700 ? 0 : 130,
    height:
      getHeights < 800 && getHeights > 700 ? 70 : getHeights < 700 ? 50 : 100,
  },
  position: 'absolute',
  bottom: 0,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
