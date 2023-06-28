import React from "react";

import { IconWrapp } from "./styled";

type IconProps = {
  url: string;
  fill?: string;
};

const Icon: React.FC<IconProps> = ({ url, fill = "#D7E0EB", ...props }) => {
  return <IconWrapp src={url} fill={fill} {...props} />;
};

export default Icon;
