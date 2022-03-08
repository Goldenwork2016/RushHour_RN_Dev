import React from 'react';

import StarIcon from '../../../../../assets/starmedal.png';
import TrophyIcon from '../../../../../assets/trophy.png';
import MedalIcon from '../../../../../assets/medal.png';
import Medal1 from '../../../../../assets/medal1.png';
import Medal2 from '../../../../../assets/medal2.png';
import Medal3 from '../../../../../assets/medal3.png';

import {
  OnScroll,
  UserAchievmentContainer,
  AchievmentListContainer,
  AchievmentList,
  AchievmentCompleted,
  AchievmentImage,
  AchievmentProgress,
  AchievmentText,
  ProgressPoints,
} from '../../components/user-achievments-components/user-achievment.styles';

const AchievmentScreen = () => {
  return (
    <OnScroll>
      <UserAchievmentContainer>
        <AchievmentListContainer>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={StarIcon} />
              <AchievmentText>Million mile award</AchievmentText>
            </AchievmentCompleted>
          </AchievmentList>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={MedalIcon} />
              <AchievmentText>Safe driving award</AchievmentText>
            </AchievmentCompleted>
          </AchievmentList>
        </AchievmentListContainer>
        <AchievmentListContainer>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={TrophyIcon} />
              <AchievmentText>Ordered 10 big Macs this month!</AchievmentText>
            </AchievmentCompleted>
          </AchievmentList>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={Medal2} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.7} color="#4CB75C" />
          </AchievmentList>
        </AchievmentListContainer>
        <AchievmentListContainer>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={Medal3} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.2} color="#4CB75C" />
          </AchievmentList>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentProgress source={Medal1} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.7} color="#4CB75C" />
          </AchievmentList>
        </AchievmentListContainer>
        <AchievmentListContainer>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentImage source={Medal2} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.2} color="#4CB75C" />
          </AchievmentList>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentProgress source={Medal3} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.4} color="#4CB75C" />
          </AchievmentList>
        </AchievmentListContainer>
        <AchievmentListContainer>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentProgress source={Medal3} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.2} color="#4CB75C" />
          </AchievmentList>
          <AchievmentList>
            <AchievmentCompleted>
              <AchievmentProgress source={Medal1} />
            </AchievmentCompleted>
            <ProgressPoints progress={0.4} color="#4CB75C" />
          </AchievmentList>
        </AchievmentListContainer>
      </UserAchievmentContainer>
    </OnScroll>
  );
};

export default AchievmentScreen;
