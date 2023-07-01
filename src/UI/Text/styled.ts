import styled from "styled-components";

export const TextWrapp = styled.div<{
  $bold?: boolean;
  $center?: boolean;
  rest?: any;
  $textColor?: string;
}>`
  font-size: 14px;
  color: ${({ $textColor }) => $textColor || "#1B1D28"};
  font-weight: ${({ $bold }) => ($bold ? "600" : "400")};
  text-align: ${({ $center }) => $center && "center"};
`;
