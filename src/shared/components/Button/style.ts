import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const Play = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const PlayBtn = styled.img`
  display: block;
  width: 81px;
  height: 81px;
  filter: drop-shadow(0 5px 5px ${color.grey});

  &:hover {
    animation: ${Play} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
`;

export const Slider = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  75% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const BlackSlider = styled.img`
  display: block;
  width: 101px;
  height: 101px;

  &:hover {
    animation: ${Slider} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  }
`;

export const YellowSlider = styled.img`
  display: block;
  width: 101px;
  height: 101px;

  &:hover {
    animation: ${Slider} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
  }
`;

export const Zoom = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1.5);
  }
`;

export const ZoomBtn = styled.img`
  display: block;
  width: 51px;
  height: 51px;
  margin: 40px;

  &:hover {
    animation: ${Zoom} 1s ease-in forwards;
  }
`;
