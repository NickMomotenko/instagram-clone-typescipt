import Button from "../../UI/Button";
import { CreatePost } from "./index";
import styled from "styled-components";

export const CreatePostWrapp = styled.div``;

export const CreatePostImagePreview = styled.div`
  display: inline-block;
  height: 100px;
  width: 100px;
  border-radius: 5px;
  margin-right: 5px;
  position: relative;

  overflow: hidden;

  transition: transform 0.4s;

  cursor: pointer;

  &:hover {
    transform: scale(1.04);
  }
`;

export const CreatePostImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CreatePostDropInput = styled.input`
  display: none;
`;

export const CreatePostDropLabel = styled.label`
  display: inline-block;
  border: 1px solid #9d6b6b;
  color: #9d6b6b;
  padding: 7px 27px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CreatePostImageCrossBtn = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  margin:5px;

  svg {
    fill: #fff;
  }
`;
