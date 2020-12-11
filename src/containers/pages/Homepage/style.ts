import styled from "styled-components";
import { color } from "../../../shared/styles";

//Assets
import Bg1 from "../../../assets/geyser.png";

export const Hero = styled.section`
  display: flex;
  /* justify-content: flex-end; */
`;

export const Social = styled.div`
  width: 7%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 220px 0;
`;

export const GeyserBg = styled.div`
  width: 48%;
  height: 841px;
  background: url(${Bg1}) no-repeat center;
  background-size: cover;
  position: relative;

  &:before {
    content: "";
    width: 241px;
    height: 16px;
    background-color: ${color.yellow};
    position: absolute;
    top: -15px;
    right: 0;
  }
`;

export const Buttons = styled.div`
  width: 40%;
  position: absolute;
  left: 53%;
  top: 50%;
  z-index: 5;
`;

export const ButtonPageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 223px;
`;
export const YellowBg = styled.div`
  width: 52%;
  height: 841px;
  background-color: ${color.lightYellow};
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const PageNumberWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageLine = styled.div`
  width: 51px;
  height: 3px;
  background-color: ${color.grey};
  margin: 0 19px;
`;
