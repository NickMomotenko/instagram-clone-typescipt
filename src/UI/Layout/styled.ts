import styled from "styled-components";

export const ColumnWrapp = styled.div``;

export const RowWrapp = styled.div<{ $center?: boolean; btw?: boolean }>`
  display: flex;

  ${({ $center }) => $center && `align-items:center`};
  ${({ $btw }) => $btw && `justify-content:space-between`};
`;

export const PaperWrapp = styled.div`
  background: #ffffff;
  box-shadow: 0 0 5px #7979de;
  padding: 10px;
  border-radius: 12px;
`;

export const BlockWrapp = styled.div``;
