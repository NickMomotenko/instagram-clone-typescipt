import styled from "styled-components";
import { Block } from "../Layout";

import { PostCommentsWrapp } from "./PostCommentsStyles";

export const PostOptionsWrapp = styled(PostCommentsWrapp)<{
  $active?: boolean;
}>`
  left: auto;
  right: ${({ $active }) => ($active ? "0" : "-100%")};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostOptionsList = styled(Block)`
  text-align: center;
`;

export const PostOptionsItem = styled(Block)`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostOptionsLink = styled(Block)`
  color: #fff;
  font-size: 18px;
`;

export const PostOptionsContent = styled.div`
  width: 100%;
`;

export const PostOptionsBtnBack = styled.div`
  position: absolute;
  top: 30px;
  left: 20px;

  svg path{
    fill: #fff;
  }
`;
