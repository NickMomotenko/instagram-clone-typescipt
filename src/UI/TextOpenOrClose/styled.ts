import styled, { css } from "styled-components";

export const TextOpenOrCloseWrapp = styled.div<{ $boolFlag?: boolean }>`
  font-size: 14px;
  color: #4f5160;
  font-weight: 600;

  ${({ $boolFlag }) =>
    $boolFlag === false &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
