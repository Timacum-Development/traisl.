import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

export const CtaAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  
  50% {
    transform: scale(1.1);
  }
  
  100% {
    transform: scale(1.1);
  }
`;
export const Action = styled.a`
  max-width: 300px;
  padding: 23px 41px;
  background-color: ${color.black};
  color: ${color.white};
  text-transform: uppercase;
  letter-spacing: 3px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 5px 5px ${color.grey});
  transition: 0.25s ease-in-out;

  &:hover {
    animation: ${CtaAnimation} 0.5s ease-in forwards;
    color: ${color.black};
    position: relative;

    &:before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: ${color.white};
      z-index: -1;
    }
  }
`;

export const Arrow = styled.img`
  display: block;
  margin-left: 20px;
`;
