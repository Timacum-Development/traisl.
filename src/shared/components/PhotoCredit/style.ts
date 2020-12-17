import styled from "styled-components";
import { color } from "../../styles";

export const CreditWrap = styled.div`
  padding: 0 45px;
  display: flex;
  justify-content: center;
  writing-mode: vertical-lr;
`;

export const CreditText = styled.p`
  font-size: 0.875rem;
  color: ${color.grey};
  font-family: "museo_sans700", sans;
  font-weight: 700;
`;

export const CreditName = styled.p`
  font-size: 0.875rem;
  color: ${color.black};
  font-family: "museo_sans700", sans;
  font-weight: 700;
`;
