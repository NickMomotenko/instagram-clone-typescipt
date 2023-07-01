import styled, { css } from "styled-components";

export const AvatarWrapp = styled.div<{ size?: number; $noGradient?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? `${size}px` : "40px")};
  height: ${({ size }) => (size ? `${size}px` : "40px")};
  border-radius: 50%;
  border-image-slice: 20;

  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 1;
  }

  &:before {
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    background-image: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    transition: transform 5s ease-in-out;
  }

  &:after {
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    background: #fff;
  }

  &:hover:before {
    transform: rotate(888deg);
  }

  ${({ $noGradient }) =>
    $noGradient &&
    css`
      box-shadow: 0 0 2px #202091;

      &:before,
      &:after {
        display: none;
      }
    `}
`;

export const AvatarImg = styled.div`
  display: block;

  max-height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;

  text-align: center;
`;
