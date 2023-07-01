import styled from "styled-components";

export const CustomSliderWrapp = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const CustomSliderItem = styled.div`
  min-width: 100%;
  border-radius: 15px;
  height: 180px;
`;

const btnSize = 6;

export const SliderButton = styled.button<{ active?: boolean }>`
  display: inline-block;
  height: ${btnSize}px;
  width: ${btnSize}px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "blue" : "grey")};
  margin-right: 5px;
`;
