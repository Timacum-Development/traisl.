import styled from "styled-components";
import { color } from "../../styles";

export const Action = styled.a`
  min-width: 200px;
  max-width: 300px;
  padding: 23px 0;
  background-color: ${color.black};
  color: ${color.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
`;

export const Arrow = styled.img`
  display: block;
  margin-left: 20px;
`;
