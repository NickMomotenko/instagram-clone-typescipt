import styled, { css } from "styled-components";

import Button from "../Button";
import { Row } from "../Layout";

export const PostWrapp = styled.div<{ $isMyPost?: boolean }>`
  background: #ffffff;
  border: 1px solid;
  box-shadow: 0px 0px 10px rgb(222 230 237 / 40%);
  border-radius: 30px;
  padding: 15px 5px;

  display: inline-block;
  vertical-align: top;

  margin-bottom: 20px;

  position: relative;
  overflow: hidden;

  border-color: ${({ $isMyPost }) => $isMyPost ? "#ff000030" : "#f0f6fd"};
`;

export const PostImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 15px;
  min-height: 180px;
`;

export const PostRow = styled(Row)`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PostButton = styled(Button)`
  margin-right: 9px;

  &:last-child {
    margin-right: 0;
  }
`;

export const PostLikedText = styled.div`
  font-size: 13px;
  color: #1b1d28;
  font-weight: 400;
`;

export const PostShareToWrapp = styled.div`
  text-align: center;
`;

export const PostShareToList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostShareToItem = styled.li`
  width: 25px;
  height: 25px;
  margin-right: 15px;

  button {
    display: block;
  }

  path,
  g {
    fill: "#fff";
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const PostReportWrapp = styled.div``;

export const PostReportTextarea = styled.div`
  margin-bottom: 15px;
`;

export const PostShareIcon = styled.div<{ title: string }>`
  height: 25px;
  width: 25px;

  svg {
    ${({ title }) =>
            title === "instagram" &&
            css`
              fill: transparent;

              path {
                stroke: #d7e0eb;
              }
            `}

    ${({ title }) =>
            title === "twitter" &&
            css`
              width: 25px;
            `}
  }
`;
