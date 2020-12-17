import styled, { keyframes } from "styled-components";
import { color } from "../../styles";

const SocialAnimation = keyframes`
  0% {
    /* border-bottom: 2px solid ${color.black};
    padding-bottom: 9px; */
    text-decoration: underline;
    text-underline-offset: 9px;
    text-decoration-thickness: 2px;
  }

  100% {
    /* border-bottom: 2px solid ${color.black};
    padding-bottom: 9px; */
    text-decoration: underline;
    text-underline-offset: 9px;
    text-decoration-thickness: 2px;
  }
`;

export const LinkFirst = styled.a`
  font-size: 0.875rem;
  color: ${color.grey};
  transition: 0.25s ease-in-out;
  transform: rotate(270deg);
  transition: 0.25s ease-in-out;

  &:hover {
    color: ${color.black};
    animation: ${SocialAnimation} 0.25s ease-in-out forwards;
  }
`;

export const InfoAnimation = keyframes`
  0% {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: ${color.yellow};
  }
  
  100% {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: ${color.yellow};
  }
`;

export const LinkSecond = styled.p`
  font-size: 0.875rem;
  color: ${color.grey};
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${color.white};
    font-family: "museo_sans700", sans;
    text-shadow: 0 1px ${color.white};
    animation: ${InfoAnimation} 0.25s ease-in-out forwards;
  }
`;
