import React from 'react';

import {
  GameContainer,
  BackGroundImage,
  GameText,
} from '../components/game.styles';

const GameScreen = () => {
  return (
    <BackGroundImage>
      <GameContainer>
        <GameText>Who said life’s all work no play?</GameText>
        <BackGroundImage />
      </GameContainer>
    </BackGroundImage>
  );
};

export default GameScreen;
