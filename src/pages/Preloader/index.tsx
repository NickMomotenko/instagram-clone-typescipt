import React from "react";

import {
  PreloaderWrapp,
  PreloaderLogo,
  PreloaderLogoBg,
  PreloaderContent,
} from "./styled";

type PreloaderProps = {
  isActive?: boolean;
};

const Preloader: React.FC<PreloaderProps> = ({ isActive }) => {
  return (
    <PreloaderWrapp $activeStatus={isActive}>
      <PreloaderLogoBg>
        <PreloaderContent>
          <PreloaderLogo />
        </PreloaderContent>
      </PreloaderLogoBg>
    </PreloaderWrapp>
  );
};

export default Preloader;
