import { TextWrapp } from "./styled";

type TextProps = {
  text: string;
  children?: React.ReactNode;
  as?: any;
  rest?: any;
  style?: any;
  $bold?: boolean;
  to?: string;
  color?: string;
  $center?: boolean;
  href?: string;
  onClick?: () => void;
  $textColor?: string;
};

const Text: React.FC<TextProps> = ({
  text,
  children,
  as,
  color,
  $textColor,
  to,
  ...rest
}) => {
  return (
    <TextWrapp as={as} to={to} $textColor={$textColor} {...rest}>
      {children}
      {text}
    </TextWrapp>
  );
};

export default Text;
