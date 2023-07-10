import React from "react";
import ContentLoader from "react-content-loader";

import { SkeletonWrapp } from "./styled";

type SkeletonProps = {
	itemTag?: string;
	style?: any;
	rest?: any;
}

export const Skeleton: React.FC<SkeletonProps> = ({ itemTag = "div", ...rest }) => {
	return (
		<SkeletonWrapp as={itemTag}>
			<ContentLoader
				speed={2}
				width="100%"
				height={445}
				// viewBox="0 0 322 445"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				{...rest}
			>
				<circle cx="20" cy="26" r="20" />
				<rect x="58" y="12" rx="2" ry="2" width="140" height="10" />
				<rect x="58" y="29" rx="2" ry="2" width="140" height="10" />
				<rect x="0" y="60" rx="15" ry="15" width="100%" height="180" />
				<rect x="0" y="395" rx="10" ry="10" width="75" height="15" />
				<rect x={`calc(50% - 20px)`} y="254" rx="6" ry="6" width="40" height="7" />
				<rect x="0" y="312" rx="10" ry="10" width="100%" height="25" />
				<rect x="0" y="360" rx="10" ry="10" width="100%" height="17" />
				<rect x={`calc(100% - 33px)`} y="273" rx="10" ry="10" width="33" height="25" />
				<rect x="0" y="273" rx="10" ry="10" width="33" height="25" />
				<rect x="39" y="274" rx="10" ry="10" width="33" height="25" />
				<rect x="78" y="274" rx="10" ry="10" width="33" height="25" />
			</ContentLoader>
		</SkeletonWrapp>
	);
};
