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
};

const Text: React.FC<TextProps> = ({
  text,
  children,
  as,
  color,
  to,
  ...rest
}) => {
  return (
    <TextWrapp as={as} to={to} {...rest}>
      {children}
      {text}
    </TextWrapp>
  );
};

export default Text;
