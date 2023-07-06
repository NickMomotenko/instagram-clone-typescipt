import React from "react";

import { PopupContent, PopupHeader, PopupWrapp } from "./styles";
import Text from "../../UI/Text";
import Button from "../../UI/Button";
import Icon from "../../UI/Icon";

import closeIcon from "../../assets/icons/close.svg";

type PopupProps = {
	children: React.ReactNode;
	ref?: any;
	title?: string;
	onCrossClick?: () => void;
};

const Popup: React.FC<PopupProps> = React.forwardRef(
	({ children, title = "", onCrossClick }, ref: any) => {
		return (
			<PopupWrapp>
				<PopupContent ref={ref}>
					<PopupHeader>
						<Text text={title} $bold style={{ fontSize: 18 }} />
						<Button onClick={onCrossClick}>
							<Icon url={closeIcon} fill="black" />
						</Button>
					</PopupHeader>
					{children}
				</PopupContent>
			</PopupWrapp>
		);
	},
);

export default Popup;
