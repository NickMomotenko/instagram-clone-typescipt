import styled, { css } from "styled-components";

export const DefaultButtonWrapp = styled.button<{
  $fullWidth?: boolean;
  $bgColor?: string;
  rest?: any;
}>`
  padding: 7px 27px;
  background-color: #000000;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;

  &:disabled {
    background-color: #eceaea;
    cursor: not-allowed;
  }

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}

  ${({ $bgColor }) =>
    $bgColor &&
    css`
      background-color: ${$bgColor};
    `}
`;
