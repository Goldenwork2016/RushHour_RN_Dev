import styled from 'styled-components/native';
import {FlatList, Dimensions, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const isAndroid = Platform.OS === 'android';

export const TitleText = styled.Text`
  font-size: ${props => props.theme.fontSizes.text};
  color: ${props => props.theme.colors.text.dark};
  text-align: center;
  margin-bottom: ${props => props.theme.space[2]};
`;
export const ViolationContainer = styled.View`
  padding-top: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.primary};
`;

export const TrainingVideos = styled.View`
  margin-bottom: ${props => props.theme.space[4]};
  align-items: space-between;
  justify-content: space-between;
`;

export const ListItem = styled(FlatList).attrs({
  ListFooterComponentStyle: {height: 50},
  paddingLeft: 30,
  paddingRight: 30,
  paddingTop: 20,
})``;
export const FlatlistSpacer = styled.View``;
export const OnTouch = styled(TouchableOpacity)``;
