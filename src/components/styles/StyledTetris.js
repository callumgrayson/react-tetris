import styled from 'styled-components';

import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${bgImage}) #000;
	background-size: cover;
	overflow: hidden;
`;

export const StyledTetris = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 5vh;
	margin: 0 auto;
	max-width: 900px;

	aside {
		width: 100%;
		max-width: 300px;
		min-width: 200px;
		display: block;
		padding: 0 20px;
	}

	@${(props) => props.mediaQuery} {
		flex-direction: column-reverse;
		align-items: center;
		padding: 5vw 2vw;

		aside {
			width: 100%;
			max-width: 100%;
			display: flex;
			flex-direction: column;
			padding: 0 2px;
			min-height: 132px;

			.display-area {
				display: flex;
				flex-wrap: wrap;
			}
		}
	}
`;
