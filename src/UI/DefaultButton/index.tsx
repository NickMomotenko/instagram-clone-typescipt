import { DefaultButtonWrapp } from "./styled";

export type DefaultButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    fullWidth?: boolean;
    $bgColor?: string;
    as?: any;
    rest?: any;
  };

const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  as,
  type = "button",
  fullWidth,
  $bgColor,
  ...rest
}) => {
  return (
    <DefaultButtonWrapp
      as={as}
      type={type}
      fullWidth={fullWidth}
      $bgColor={$bgColor}
      {...rest}
    >
      {text}
    </DefaultButtonWrapp>
  );
};

export default DefaultButton;
