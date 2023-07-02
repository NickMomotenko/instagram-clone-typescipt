import React from "react";

import { PopupWrapp, PopupContent } from "./styles";

type PopupProps = {
  isActive: boolean;
  children: React.ReactNode;
};

const Popup: React.FC<PopupProps> = ({ isActive, children }) => {
  return (
    <PopupWrapp $active={isActive}>
      <PopupContent>{children}</PopupContent>
    </PopupWrapp>
  );
};

export default Popup;
