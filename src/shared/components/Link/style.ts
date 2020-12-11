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

  &:hover {
    color: ${color.black};
    animation: ${SocialAnimation} 0.25s ease-in-out forwards;
  }
`;
