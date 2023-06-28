import { TextWrapp } from "./styled";

type TextProps = {
  text: string;
  children?: React.ReactNode;
  as?: any;
  rest?: any;
};

const Text: React.FC<TextProps> = ({ text, children, as, ...rest }) => {
  return (
    <TextWrapp as={as} {...rest}>
      {children}
      {text}
    </TextWrapp>
  );
};

export default Text;
