import styled from "styled-components";
import { color } from "../../styles";

export const PageNumber = styled.p`
  font-size: 0.875rem;
  font-family: "museo_sans700", sans;
  font-weight: 700;
`;

export const PageNumberWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageLine = styled.div`
  width: 51px;
  height: 3px;
  background-color: ${color.black};
`;
