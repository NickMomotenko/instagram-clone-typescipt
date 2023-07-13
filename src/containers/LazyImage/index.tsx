import React, { useEffect, useRef, useState } from "react";

import { LazyImageSrc, LazyImageWrapp } from "./styled";

type LazyImageProps = {
	src: string;
};

export const LazyImage: React.FC<LazyImageProps> = ({ src }) => {
	const [source, setSource] = useState("");

	const imageRef = useRef<any>(null);

	useEffect(() => {
		const img = new Image();
		img.src = src;

		setSource(src);

		img.onload = () => {
			if (imageRef.current) imageRef.current.style.filter = `blur(0)`;
		};
	}, [src]);

	return (
		<LazyImageWrapp>
			<LazyImageSrc
				style={{ backgroundImage: `url(${source})` }}
				ref={imageRef}
			></LazyImageSrc>
		</LazyImageWrapp>
	);
};
