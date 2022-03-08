import React from 'react';

import ArrowIcon from '../../../../../assets/arrowforward.png';
import {
  OnScroll,
  AllDrivs,
  Review,
  SettingContainer,
  ListSection,
  ListItem,
  Title,
  SettingText,
  ForwardImage,
} from '../../components/all-drivs-components/alldrivs.styles';

const AllDrivsScreen = ({navigation}) => {
  return (
    <AllDrivs>
      <Review>Review all DVIR’S</Review>
      <Title>Morning DVIRS</Title>
      <SettingContainer>
        <OnScroll vertical>
          <ListSection onPress={() => navigation.navigate('DrivsReview')}>
            <SettingText>Monday</SettingText>
            <ListItem>
              <SettingText>10/21/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Tuesday</SettingText>
            <ListItem>
              <SettingText>10/22/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Wednesday</SettingText>
            <ListItem>
              <SettingText>10/23/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Thursday</SettingText>
            <ListItem>
              <SettingText>10/24/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Friday</SettingText>
            <ListItem>
              <SettingText>10/25/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Monday</SettingText>
            <ListItem>
              <SettingText>10/21/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
        </OnScroll>
      </SettingContainer>
      <Title>End of trip DVIRS</Title>
      <SettingContainer>
        <OnScroll vertical>
          <ListSection onPress={() => null}>
            <SettingText>Monday</SettingText>
            <ListItem>
              <SettingText>10/21/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Tuesday</SettingText>
            <ListItem>
              <SettingText>10/22/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Wednesday</SettingText>
            <ListItem>
              <SettingText>10/23/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Thursday</SettingText>
            <ListItem>
              <SettingText>10/24/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Friday</SettingText>
            <ListItem>
              <SettingText>10/25/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
          <ListSection>
            <SettingText>Monday</SettingText>
            <ListItem>
              <SettingText>10/21/20</SettingText>
              <ForwardImage source={ArrowIcon} />
            </ListItem>
          </ListSection>
        </OnScroll>
      </SettingContainer>
    </AllDrivs>
  );
};

export default AllDrivsScreen;
