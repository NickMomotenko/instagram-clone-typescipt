import React from "react";

import { TextareaBody, TextareaWrapp, TextareaLimitCounter } from "./styled";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  currentLimit?: number | string;
};

const Textarea: React.FC<TextareaProps> = (props) => {
  const { currentLimit } = props;

  return (
    <TextareaBody>
      <TextareaWrapp {...props}></TextareaWrapp>
      {currentLimit && (
        <TextareaLimitCounter>{currentLimit}</TextareaLimitCounter>
      )}
    </TextareaBody>
  );
};

export default Textarea;
