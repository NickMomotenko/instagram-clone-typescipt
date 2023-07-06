import styled from "styled-components";
import { Paper } from "../../UI/Layout";

export const PopupWrapp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  z-index: 15;


  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;

    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(500px);
    background: #ff000059;
  }
`;

export const PopupContent = styled(Paper)`
  max-width: 500px;
  width: 100%;
  position: relative;

  box-shadow: 0 0 5px #fff;
  padding: 0 25px 25px 25px;
  margin: 25px;

  max-height: 96%;
  overflow-y: auto;
`;

export const PopupHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  padding-top: 25px;
`;
