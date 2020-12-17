import styled from "styled-components";
import { color } from "../../styles";

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
`;

export const Arrow = styled.img`
  display: block;
  margin-left: 20px;
`;
