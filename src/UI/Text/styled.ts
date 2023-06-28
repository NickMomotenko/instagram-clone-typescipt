import styled from "styled-components";

export const TextWrapp = styled.div<{
  bold?: boolean;
  rest?: any;
}>`
  font-size: 14px;
  color: ${(props) => props.color || "#1B1D28"};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;
