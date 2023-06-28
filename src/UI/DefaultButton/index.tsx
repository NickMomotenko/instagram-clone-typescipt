import { DefaultButtonWrapp } from "./styled";

export type DefaultButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    text?: string;
    fullWidth?: boolean;
    $bgColor?: string;
    as?: any;
    rest?: any;
    to?: string;
  };

const DefaultButton: React.FC<DefaultButtonProps> = ({
  text,
  as,
  to,
  type = "button",
  fullWidth,
  $bgColor,
  ...rest
}) => {
  return (
    <DefaultButtonWrapp
      as={as}
      type={type}
      to={to}
      fullWidth={fullWidth}
      $bgColor={$bgColor}
      {...rest}
    >
      {text}
    </DefaultButtonWrapp>
  );
};

export default DefaultButton;
