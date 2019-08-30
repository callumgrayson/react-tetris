import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ text, mediaQuery }) => (
	<StyledDisplay mediaQuery={mediaQuery}>{text}</StyledDisplay>
);

export default Display;
