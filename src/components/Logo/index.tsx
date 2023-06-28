import { LogorWrapp, LogoIcon } from "./styled";

import logoIcon from "../../assets/icons/logo.png";

export const Logo = (props: any) => {
  return (
    <LogorWrapp href="#" {...props}>
      <LogoIcon alt="logotype" src={logoIcon} />
    </LogorWrapp>
  );
};
