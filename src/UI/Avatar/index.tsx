import Text from "../Text";

import { AvatarWrapp, AvatarImg } from "./styled";

type AvatarProps = {
  url?: string;
  fullname?: string;
  textSize?: number | string;
  size?: number;
  as?: any;
};

const Avatar: React.FC<AvatarProps> = (props) => {
  const { url, fullname, textSize } = props;

  const shortFormOfFullname = fullname
    ?.split(" ")
    .map((word) => word.charAt())
    .join("");

  return (
    <AvatarWrapp {...props}>
      <AvatarImg>
        <Text
          text={shortFormOfFullname}
          bold
          style={{ fontSize: textSize ? `${textSize}px` : 16 }}
        />
      </AvatarImg>
    </AvatarWrapp>
  );
};

export default Avatar;
