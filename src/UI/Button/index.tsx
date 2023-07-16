import React from "react";

import Icon from "../Icon";

import { ButtonWrapp } from "./styled";
import { BView } from "./types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	text?: string;
	icon?: string;
	active?: boolean;
	onClick?: () => void;
	style?: any;
	mute?: boolean;
	view?: BView;
	fill?: string;
	children?: React.ReactNode;
	disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
	text,
	icon,
	active,
	fill,
	children,
	...rest
}) => {
	return (
		<ButtonWrapp {...rest}>
			{children}
			{icon && <Icon url={icon} fill={active ? "red" : "#D7E0EB"} />}
		</ButtonWrapp>
	);
};

export default Button;
