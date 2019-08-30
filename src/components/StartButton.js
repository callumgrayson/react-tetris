import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback, mediaQuery }) => (
	<StyledStartButton onClick={callback} mediaQuery={mediaQuery}>
		Start Game
	</StyledStartButton>
);

export default StartButton;
