import React from "react";

import { Outlet } from "react-router-dom";

import { MainWrapp } from "./styled";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Popup from "../../components/Popup";

import { Row } from "../../UI/Layout";

type MainProps = {
  popup?: any;
};

const Main: React.FC<MainProps> = ({ popup }) => {
  return (
    <MainWrapp>
      <Header />
      <Container>
        {/* <Row style={{ justifyContent: "center", alignItems: "flex-start" }}> */}
        <Outlet />
        {/* </Row> */}
      </Container>
      {popup?.isActive && <Popup {...popup} />}
    </MainWrapp>
  );
};

export default Main;
