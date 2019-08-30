import styled from 'styled-components';

export const StyledStartButton = styled.div`
	box-sizing: border-box;
	margin: 0 0 2vh 0;
	padding: 20px;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	border: none;
	color: white;
	background: #333;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1rem;
	outline: none;
	cursor: pointer;

	&::selection {
		background: transparent;
	}

	@${(props) => props.mediaQuery} {
		width: 46%;
		font-size: .8rem;
		min-height: 15px;
		font-size: minmax(3vmin, 14px);
		margin: 1vh 2%;
	}
`;
