import styled from "styled-components";
import { color } from "../../../shared/styles";

//Assets
import Bg1 from "../../../assets/geyser.png";
import LakeImg from "../../../assets/lake.png";
import WaterImg from "../../../assets/water.png";
import IslandImg from "../../../assets/island.png";
import SnowImg from "../../../assets/snow.png";

export const Hero = styled.section`
  display: flex;
  /* margin-bottom: 195px; */
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

  &:after {
    content: "";
    width: 16px;
    height: 55px;
    background-color: ${color.yellow};
    position: absolute;
    bottom: 0;
    right: -15px;
  }
`;

export const Buttons = styled.div`
  /* position: absolute;
  left: 53%;
  top: 51%; */
  /* width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 25; */
  max-width: 650px;
  z-index: 25;
  position: relative;
  left: 770px;
  top: 392px;
`;

export const ButtonPageWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  padding-top: 40px;
`;

export const PageLine = styled.div`
  width: 51px;
  height: 3px;
  background-color: ${color.grey};
  margin: 0 19px;
  opacity: 1;
`;

export const Intro = styled.div`
  max-width: 676px;
  padding-top: 100px;
  position: relative;
  left: -63px;
  z-index: 20;
`;

export const TextWrap = styled.div`
  padding-left: 187px;
`;

export const HeadingWrap = styled.div`
  display: flex;
`;

export const Travel = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 197px 0 199px 0;
  /* margin-bottom: 197px; */
`;

export const Experience = styled.div`
  display: flex;
  width: 50%;
  padding: 0 98px 0 200px;
`;

export const ExperienceText = styled.div`
  max-width: 491px;
`;

export const Nature = styled.div`
  width: 35%;
  height: 601px;
  background: url(${LakeImg}) no-repeat right;
  background-position: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const SideText = styled.div`
  display: flex;
  align-items: center;
  padding: 120px 47px 0 0;
`;

export const SideParagraph = styled.p`
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 5px;
    background-color: ${color.black};
    position: absolute;
    top: -40px;
  }
`;

export const Promo = styled.section`
  /* padding-right: 200px; */
  padding-bottom: 198px;
`;

export const YellowRectangle = styled.div`
  max-width: 1381px;
  background-color: ${color.lightYellow};
  padding: 144px 110px 147px 395px;
  position: relative;

  &:before {
    content: "";
    width: 201px;
    height: 16px;
    background-color: ${color.yellow};
    position: absolute;
    top: -15px;
    left: 199px;
  }

  &:after {
    content: "";
    width: 16px;
    height: 51px;
    background-color: ${color.yellow};
    position: absolute;
    right: -15px;
  }
`;

export const PromoImg = styled.div`
  width: 401px;
  height: 251px;
  background: url(${WaterImg}) no-repeat center;
  background-position: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -100px;
`;

export const ImageGallery = styled.section`
  display: flex;
`;

export const ImageFirst = styled.div`
  width: 100%;
  height: 483px;
  background: url(${IslandImg}) no-repeat center;
  background-position: cover;
  display: flex;
  align-items: flex-end;
`;

export const ImageSecond = styled.div`
  width: 40%;
  height: 483px;
  background: url(${SnowImg}) no-repeat center;
  background-position: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const FirstImageWrap = styled.div`
  width: 40%;
  padding-bottom: 240px;
`;

export const About = styled.section``;
