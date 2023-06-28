// import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { LoginWrapp, DemoButton, LoginFormWrapp } from "./styles";

import LogoBanner from "../../components/LogoBanner/LogoBanner";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";

// import { LOGIN } from "../../redux/auth/types";

type LoginProps = {
  isPreloaderActive?: boolean;
};

const Login: React.FC<LoginProps> = ({ isPreloaderActive = false }) => {
  // const dispath = useDispatch();

  return (
    <LoginWrapp>
      <LogoBanner isPreloaderActive={true} />

      <LoginFormWrapp>
        <Outlet />
      </LoginFormWrapp>

      <DemoButton>
        <Text text="If you are here first time" />
        <Text text="You can use Demo Version , with no login and registration" />
        <DefaultButton
          text="Try Demo Version"
          onClick={(e) => {
            e.preventDefault();

            // dispath({
            //   type: LOGIN,
            //   payload: {
            //     data: ["test@mail.ru", "11241414"],
            //     isPreview: true,
            //   },
            // });
          }}
        />
      </DemoButton>
    </LoginWrapp>
  );
};

export default Login;
