import styled from "styled-components";

export const LazyImageWrapp = styled.div`
	max-width: 100%;
	min-width: 100%;
	width: 100%;
	border-radius: 15px;
	min-height: 180px;

	overflow: hidden;
`;

export const LazyImageSrc = styled.div`
	background-size: cover;
	filter: blur(3px);

	width: 100%;
	height: 100%;
`;
