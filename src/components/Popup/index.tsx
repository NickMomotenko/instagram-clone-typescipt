import React from "react";

import {PopupWrapp, PopupContent} from "./styles";

type PopupProps = {
  children: React.ReactNode;
  ref?: any;
};

const Popup: React.FC<PopupProps> = React.forwardRef(
  ({children}, ref: any) => {
    return (
      <PopupWrapp>
        <PopupContent ref={ref}>{children}</PopupContent>
      </PopupWrapp>
    );
  }
);

export default Popup;
