import { useEffect } from "react";

import { LogoBannerWrapp } from "./styled";

import Text from "../../UI/Text";
import { Logo } from "../Logo";
import { useActive } from "../../hooks/useActive";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const LogoBanner = () => {
	const { isPreloaderActive } = useSelector((state: RootState) => state.app);

	return (
		<LogoBannerWrapp $active={isPreloaderActive}>
			<Logo />
			<Text
				text="Developed by Nick Momotenko"
				// style={{ fontSize: 16, marginTop: 6 }}
			/>
		</LogoBannerWrapp>
	);
};

export default LogoBanner;
