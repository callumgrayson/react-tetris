import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${(props) => props.height},
		calc(80vh / ${(props) => props.height})
	);
	grid-template-columns: repeat(
		${(props) => props.width},
		calc(80vh / ${(props) => props.height})
	);
	grid-gap: 1px;
	border: 2px solid #333;
	background: #111;

	@${(props) => props.mediaQuery} {
		grid-template-rows: repeat(
			${(props) => props.height},
			calc(50vh / ${(props) => props.height})
		);
		grid-template-columns: repeat(
			${(props) => props.width},
			calc(50vh / ${(props) => props.height})
		);
		margin-top: 1vh;
	}
`;
