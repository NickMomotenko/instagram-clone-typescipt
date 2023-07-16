import styled from "styled-components";

export const VoiceMessageWrapp = styled.div<{
	duration?: any;
	currentTime?: any;
}>`
	max-width: 300px;
	min-width: 300px;
	padding: 10px;
	border-radius: 10px;
	background-color: #c6bbf6;
	min-height: 52px;
	max-height: 52px;

	position: relative;
	overflow: hidden;

	&:before {
		content: "";

		display: block;
		height: 100%;
		width: ${({ duration, currentTime }) =>
			!duration && !currentTime
				? "0%"
				: `calc((${currentTime} * 100%) / ${duration})`};
		transition: width 0.02s;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;

		background: rgb(183 176 213 / 40%);
		pointer-events: none;
	}
`;

export const VoiceMessageContent = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	z-index: 1;
	width: 100%;
`;

export const VoiceGraph = styled.div`
	display: inline-block;
	height: 35px;
	width: 100%;
	margin-left: 10px;
`;

export const VoiceTimer = styled.div`
	margin-left: 10px;
	font-size: 11px;
`;
