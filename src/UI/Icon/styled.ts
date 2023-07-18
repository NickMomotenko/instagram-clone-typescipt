import styled from "styled-components";

import { ReactSVG } from "react-svg";

export const IconWrapp = styled(ReactSVG)`
	fill: ${(props) => (props.fill ? props.fill : "#383A42")};
	display: inline-block;
	min-width: 15px;

	&:hover {
		fill: red;
		transition: fill 0.3s;
	}
`;
