import React from "react";

import { InputWrapp, InputChanger, InputLabel } from "./styled";

import Text from "../Text";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  error?: string;
  labelName?: string;
  noError?: boolean;
  ref?: any;
  props?: any;
};

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      value,
      type = "text",
      error,
      onChange,
      onFocus,
      onKeyDown,
      placeholder,
      name,
      icon,
      labelName,
      noError,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapp {...props}>
        {/* {icon && <Icon url={icon} style={{ marginRight: 10 }} />} */}
        {labelName && <InputLabel>{labelName}</InputLabel>}
        <InputChanger
          ref={ref}
          value={value}
          type={type}
          onChange={(e) => onChange(e)}
          onKeyDown={onKeyDown}
          style={{ borderBottomColor: error && `red` }}
          placeholder={placeholder}
          name={name}
          required={required}
        />
        {noError ? (
          <></>
        ) : (
          <Text
            text={error && error}
            style={{
              marginTop: 5,
              fontSize: 12,
              paddingLeft: 15,
              minHeight: 15,
              textAlign: "left",
            }}
          />
        )}
      </InputWrapp>
    );
  }
);

export default Input;
