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
};

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  active,
  fill,
  ...rest
}) => {
  return (
    <ButtonWrapp {...rest}>
      {text && text}
      {icon && <Icon url={icon} fill={active ? "red" : "#D7E0EB"} />}
    </ButtonWrapp>
  );
};

export default Button;
