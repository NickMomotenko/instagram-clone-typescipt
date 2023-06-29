import { Outlet } from "react-router-dom";

import { LoginWrapp, DemoButton, LoginFormWrapp } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { LOGIN } from "../../redux/auth/types";

type LoginProps = {
  isPreloaderActive?: boolean;
};

const Login: React.FC<LoginProps> = ({ isPreloaderActive = false }) => {
  const dispath = useDispatch<AppDispatch>();

  const handleLogin = () => {
    dispath({
      type: LOGIN,
      payload: {
        data: ["test@mail.ru", "11241414"],
        isPreview: true,
      },
    });
  };

  return (
    <LoginWrapp>
      <LogoBanner isPreloaderActive={true} />

      <LoginFormWrapp>
        <Outlet />
      </LoginFormWrapp>

      <DemoButton>
        <Text text="If you are here first time" $bold />
        <Text
          text="You can use Demo Version , with no login and registration"
          style={{ marginBottom: 10 }}
        />
        <DefaultButton text="Try Demo Version" onClick={handleLogin} />
      </DemoButton>
    </LoginWrapp>
  );
};

export default Login;
