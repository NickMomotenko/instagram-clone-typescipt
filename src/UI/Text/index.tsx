import { TextWrapp } from "./styled";

type TextProps = {
  text: string;
  children?: React.ReactNode;
  as?: any;
  rest?: any;
  style?: any;
  bold?: boolean;
  to?: string;
  color?: string;
};

const Text: React.FC<TextProps> = ({
  text,
  children,
  as,
  bold,
  color,
  to,
  ...rest
}) => {
  return (
    <TextWrapp as={as} bold={bold} to={to} {...rest}>
      {children}
      {text}
    </TextWrapp>
  );
};

export default Text;
