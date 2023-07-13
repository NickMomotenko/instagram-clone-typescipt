import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import { CustomSliderWrapp, SliderButton } from "./styled";

import { Row } from "../../UI/Layout";
import { LazyImage } from "../../containers/LazyImage";

type CustomSliderProps = {
	slides?: string[];
};

const CustomSlider: React.FC<CustomSliderProps> = ({ slides }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const wrappRef = React.useRef<any>(null);
	const listRef = React.useRef<any>(null);

	const config = {
		delta: 1, // min distance(px) before a swipe starts
		preventDefaultTouchmoveEvent: true, // call e.preventDefault *See Details*// call e.preventDefault *See Details*
		trackTouch: true, // track touch input
		trackMouse: true, // track mouse input
		rotationAngle: 0, // set a rotation angle
	};

	const doTransition = (index: number) => {
		listRef.current.style.transform = `translateX(-${index * 100}%)`;
	};

	const changeActiveSlide = (index: number) => {
		setActiveIndex(index);
		doTransition(index);
	};

	let handlers = useSwipeable({
		onSwiped: (eventData) => {
			if (eventData.deltaX > 0) {
				setActiveIndex((prev) => {
					if (prev === 0) return 0;
					doTransition(prev - 1);
					return prev - 1;
				});
			} else {
				setActiveIndex((prev) => {
					if (prev === slides.length - 1) {
						doTransition(prev);
						return prev;
					} else {
						doTransition(prev + 1);
						return prev + 1;
					}
				});
			}
		},
		...config,
	});

	return (
		<CustomSliderWrapp ref={wrappRef} {...handlers}>
			<Row ref={listRef} style={{ transition: "transform .4s" }}>
				{slides?.map((slide: string, index: number) => {
					return <LazyImage key={index} src={slide} {...handlers} />;
				})}
			</Row>
			<Row style={{ justifyContent: "center", marginTop: 10 }}>
				{slides?.map((_, index) => (
					<SliderButton
						key={index}
						active={index === activeIndex}
						onClick={() => changeActiveSlide(index)}
					/>
				))}
			</Row>
		</CustomSliderWrapp>
	);
};

export default CustomSlider;
