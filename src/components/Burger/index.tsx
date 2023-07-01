import React from "react";

import { BurgerWrapp, BurgerLine } from "./styled";

type BurgerProps = {
  $isActive?: boolean;
  onClick?: () => void;
  style?: any;
};

const Burger: React.FC<BurgerProps> = ({ $isActive, onClick, ...rest }) => {
  return (
    <BurgerWrapp $isActive={$isActive} onClick={onClick} {...rest}>
      <BurgerLine />
      <BurgerLine />
      <BurgerLine />
    </BurgerWrapp>
  );
};

export default Burger;
