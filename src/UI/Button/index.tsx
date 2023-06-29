import React from "react";

import styled from "styled-components";

import Icon from "../Icon";

const ButtonWrapp = styled.button``;

type ButtonProps = {
  text?: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
  style?: any;
};

const Button: React.FC<ButtonProps> = ({ text, icon, active, ...props }) => {
  return (
    <ButtonWrapp {...props}>
      {text && text}
      {icon && <Icon url={icon} fill={active ? "red" : "#D7E0EB"} />}
    </ButtonWrapp>
  );
};

export default Button;
