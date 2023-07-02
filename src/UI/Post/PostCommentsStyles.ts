import styled from "styled-components";

import { Row } from "../Layout";

export const PostCommentsWrapp = styled.div<{ $active?: boolean }>`
  position: absolute;
  left: ${({ $active }) => ($active ? "0" : "-100%")};
  top: 0;
  opacity: ${({ $active }) => ($active ? "1" : "0")};

  z-index: 20;
  transition: left 0.4s, right 0.4s, opacity 0.6s;

  height: 100%;
  width: 100%;
  padding: 30px 20px 15px;
  background-color: #221818de;

  display: flex;
  flex-direction: column;
`;

export const PostRow = styled.div`
  margin-bottom: 15px;
  display: flex;
  padding: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostCommentsContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 5px;
`;

export const PostCommentsBottom = styled.div``;

export const PostDeleteBtn = styled.div`
  margin-left: 7px;

  svg {
    height: 13px;
  }
`;

export const PostChangeBtn = styled.div`
  svg * {
    fill: #d7e0eb;
  }

  &:hover{
    * {
      fill:red;
    }
  }
`;
