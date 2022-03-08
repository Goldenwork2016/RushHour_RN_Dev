import React from 'react';

import MarkRight from '../../../../../assets/mark.png';
import MarkWrong from '../../../../../assets/markcross.png';
import Sign from '../../../../../assets/sign.png';

import {
  OnScroll,
  ReviewContainer,
  ReviewTitle,
  ListOfMorning,
  ItemOfMorning,
  ListOfText,
  ListCommentText,
  MarkIcon,
  Signature,
  SignImage,
  DeclarationText,
} from '../../components/all-drivs-components/drivs.review.styles';

const DrivsReviewScreen = () => {
  return (
    <OnScroll>
      <ReviewContainer>
        <ReviewTitle>Monday Morning</ReviewTitle>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>
              Headlights function on both high and low beam
            </ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Turn signals function properly</ListOfText>
            <ListCommentText>1 Comment</ListCommentText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>
              Brake lights function including the third break light
            </ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkWrong} />
          <ItemOfMorning>
            <ListOfText>Turn signals function properly</ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Horn sounds</ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Mirrors function and are clean</ListOfText>
            <ListCommentText>1 Comment</ListCommentText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Breaks fuction correctly</ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Reverse light/back-up alarm functions</ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <ListOfMorning>
          <MarkIcon source={MarkRight} />
          <ItemOfMorning>
            <ListOfText>Breaks lights function properly</ListOfText>
          </ItemOfMorning>
        </ListOfMorning>
        <Signature>
          <SignImage source={Sign} />
        </Signature>
        <DeclarationText>
          I’ve personally inspected this vehicle and found it to be in the
          condition listed above.
        </DeclarationText>
      </ReviewContainer>
    </OnScroll>
  );
};

export default DrivsReviewScreen;
