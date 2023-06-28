import React from "react";

import { ContainerWrapp } from "./styled";

type ContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return <ContainerWrapp {...rest}>{children}</ContainerWrapp>;
};

export default Container;
