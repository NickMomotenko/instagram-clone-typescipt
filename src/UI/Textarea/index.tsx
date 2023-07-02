import React from "react";

import { TextareaBody, TextareaWrapp, TextareaLimitCounter } from "./styled";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  currentLimit?: number | string;
  ref?: any;
};

const Textarea: React.FC<TextareaProps> = React.forwardRef(
  ({ currentLimit, ...rest }, ref) => {
    return (
      <TextareaBody>
        <TextareaWrapp ref={ref} {...rest}></TextareaWrapp>
        {currentLimit && (
          <TextareaLimitCounter>{currentLimit}</TextareaLimitCounter>
        )}
      </TextareaBody>
    );
  }
);

export default Textarea;
