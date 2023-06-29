import { Block } from "../Layout";
import Text from "../Text";

import { TextOpenOrCloseWrapp } from "./styled";

type TextOpenOrCloseProps = {
  text: string;
  boolFlag?: boolean;
  buttonText?: string;
  buttonTextColor?: string;
  buttonClick?: () => void;
  buttonPosition?: any;
};

const TextOpenOrClose: React.FC<TextOpenOrCloseProps> = ({
  text = "",
  boolFlag,
  buttonText,
  buttonTextColor,
  buttonClick,
  buttonPosition,
}) => {
  const textSybolLimit = 30;
  const isWithButton = text.length > textSybolLimit;

  return (
    <Block
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: !isWithButton ? 14 : 0,
      }}
    >
      <TextOpenOrCloseWrapp boolFlag={boolFlag}>{text}</TextOpenOrCloseWrapp>
      {isWithButton && (
        <Text
          as="button"
          text={buttonText}
          bold
          color={buttonTextColor}
          onClick={buttonClick}
          style={{ alignSelf: buttonPosition ? buttonPosition : "flex-end" }}
        />
      )}
    </Block>
  );
};

export default TextOpenOrClose;
