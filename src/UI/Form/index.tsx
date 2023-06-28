import React from "react";

import { FormWrapp } from "./styled";

type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (event: any) => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return <FormWrapp onSubmit={onSubmit}>{children}</FormWrapp>;
};

export default Form;
