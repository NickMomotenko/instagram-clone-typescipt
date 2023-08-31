import {
	LogoWrapp,
	LogoPicture,
	LogoPictureSource,
	LogoPictureImage,
} from "./styled";

import defaultLogo from "../../assets/icons/logo.png";
import logo480 from "../../assets/icons/logo-480.png";

export const Logo = (props: any) => {
	return (
		<LogoWrapp href="#" {...props}>
			<LogoPicture>
				<LogoPictureSource media="(max-width:480px)" srcSet={logo480} />
				<LogoPictureImage src={defaultLogo} alt="Logo icon" />
			</LogoPicture>
		</LogoWrapp>
	);
};
