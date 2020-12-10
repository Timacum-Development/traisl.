import styled from "styled-components";
import { color } from "../../../shared/styles";

//Assets
import Bg1 from "../../../assets/geyser.png";

export const Hero = styled.section`
  display: flex;
  /* justify-content: flex-end; */
`;

export const Social = styled.div`
  width: 10%;
`;

export const GeyserBg = styled.div`
  width: 48%;
  height: 841px;
  background: url(${Bg1}) no-repeat center;
  background-size: cover;
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
