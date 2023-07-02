import React from "react";

import { Outlet } from "react-router-dom";

import { MainWrapp } from "./styled";

import Container from "../../components/Container";
import Header from "../../components/Header";

type MainProps = {

};

const Main: React.FC<MainProps> = () => {
  return (
    <MainWrapp>
      <Header />
      <Container>
        {/* <Row style={{ justifyContent: "center", alignItems: "flex-start" }}> */}
        <Outlet />
        {/* </Row> */}
      </Container>
    </MainWrapp>
  );
};

export default Main;
