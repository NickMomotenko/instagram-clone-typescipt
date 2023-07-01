import styled from "styled-components";

import Button from "../Button";
import { Row } from "../Layout";

export const VideoWrapp = styled.div`
  position: relative;
`;

export const VideoBottomControls = styled(Row)`
  position: absolute;
  bottom: 15px;
  z-index: 2;
  padding: 0 15px;
  width: 100%;
  justify-content: space-between;
`;

export const VideoUpControls = styled(VideoBottomControls)`
  bottom: auto;
  top: 15px;
`;

export const MuteButton = styled(Button)<{ mute?: boolean }>`
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 20px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: -4%;
    transform: rotate(45deg);

    opacity: ${({ mute }) => (mute ? "1" : "0")};
  }
`;
