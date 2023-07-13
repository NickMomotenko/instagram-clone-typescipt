import styled from "styled-components";
import { PostWrapp } from "../../UI/Post/PostStyles";

export const SkeletonWrapp = styled(PostWrapp)`
	max-height: 445px;
	min-height: 445px;

	svg {
		max-height: 100%;
		max-width: 100%;
		min-width: 100%;
	}
`;
