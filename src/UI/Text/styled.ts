import styled from "styled-components";

export const TextWrapp = styled.div<{
  $bold?: boolean;
  $center?: boolean;
  rest?: any;
}>`
  font-size: 14px;
  color: ${({ color }) => color || "#1B1D28"};
  font-weight: ${({ $bold }) => ($bold ? "600" : "400")};
  text-align: ${({ $center }) => $center && "center"};
`;
