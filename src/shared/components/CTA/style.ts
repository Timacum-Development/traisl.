import styled from "styled-components";
import { color } from "../../styles";

export const Action = styled.a`
  /* min-width: 200px; */
  max-width: 260px;
  padding: 23px;
  background-color: ${color.black};
  color: ${color.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 5px 5px ${color.grey});
`;

export const Arrow = styled.img`
  display: block;
  margin-left: 20px;
`;
