import React from "react";

import { PopupWrapp, PopupContent } from "./styles";

type PopupProps = {
  isActive: boolean;
  children: React.ReactNode;

  contentRef?: any;
};

const Popup: React.FC<PopupProps> = React.forwardRef(
  ({ isActive, children, contentRef }) => {
    return (
      <PopupWrapp $active={isActive}>
        <PopupContent ref={contentRef}>{children}</PopupContent>
      </PopupWrapp>
    );
  }
);

export default Popup;
