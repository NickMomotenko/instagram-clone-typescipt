import styled, { css } from "styled-components";
import { BView } from "./types";

export const ButtonWrapp = styled.button<{ view?: BView }>`
  ${({ view }) =>
    view === "ghost" &&
    css`
      text-decoration: underline;
      color: #fff;
    `}
`;
