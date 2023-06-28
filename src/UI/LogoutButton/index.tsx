import React from "react";

import { LogoutButtonWrapp, LogoutButtonIcon } from "./styled";

type LogoutButtonProps = {
  icon?: string;
  onClick?: () => void;
};

const LogoutButton: React.FC<LogoutButtonProps> = ({ icon, onClick }) => {
  return (
    <LogoutButtonWrapp onClick={onClick}>
      <LogoutButtonIcon src={icon} />
    </LogoutButtonWrapp>
  );
};

export default LogoutButton;
