import styled from "styled-components";
import { color } from "../../../shared/styles";

export const FooterWrap = styled.div`
  background-color: ${color.black};
`;

export const FooterInside = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 100px 10px 115px;
`;

export const FirstMenu = styled.div`
  display: flex;
`;

export const SecondMenu = styled.div`
  display: flex;
`;

export const InfoWrap = styled.div`
  margin-right: 120px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ContactInfo = styled.a`
  font-size: 0.875rem;
  color: ${color.yellow};
`;

export const YellowBox = styled.div`
  margin-left: 100px;
  max-width: 841px;
  padding: 40px 100px;
  background-color: ${color.yellow};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const Adress = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background-color: transparent;
  padding: 23px 0 20px 0;
  outline: none;

  &::placeholder {
    font-family: "museo_sans700", sans;
    font-weight: 700;
    color: ${color.black};
  }
`;

export const AdressWrap = styled.div`
  position: relative;
`;
