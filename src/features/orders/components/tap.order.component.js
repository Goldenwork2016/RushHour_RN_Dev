import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
const HeaderTabContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg.primary};
`;
const HeaderTabWrapper = styled.View`
  background-color: ${props => props.theme.colors.bg.tertiary};
  flex-direction: row;
  padding-top: ${props => props.theme.space[1]};
  padding-bottom: ${props => props.theme.space[1]};
  padding-left: ${props => props.theme.space[2]};
  padding-right: ${props => props.theme.space[2]};
  margin: ${props => props.theme.space[2]};
  margin-bottom: ${props => props.theme.space[2]};
  border-radius: 12px;
`;

const OnTouch = styled.TouchableOpacity`
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
  padding-left: ${props => props.theme.space[3]};
  padding-right: ${props => props.theme.space[3]};
`;
const OnTouchText = styled.Text`
  color: #93929a;
`;
const HeaderTab = ({tab, setTab}) => {
  return (
    <HeaderTabContainer>
      <HeaderTabWrapper>
        <OnTouch
          onPress={() => setTab(1)}
          style={tab === 1 && styles.buttonTab}>
          <OnTouchText style={[tab === 1 && {color: '#3BC2DE'}]}>
            New Orders
          </OnTouchText>
        </OnTouch>
        <OnTouch
          onPress={() => setTab(2)}
          style={tab === 2 && styles.buttonTab}>
          <OnTouchText style={[tab === 2 && {color: '#3BC2DE'}]}>
            Completed Orders
          </OnTouchText>
        </OnTouch>
      </HeaderTabWrapper>
    </HeaderTabContainer>
  );
};
const styles = StyleSheet.create({
  buttonTab: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
export default HeaderTab;
