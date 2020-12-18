import styled from "styled-components";
import { color } from "../../../shared/styles";

//Assets
import Bg1 from "../../../assets/geyser.png";
import LakeImg from "../../../assets/lake.png";
import WaterImg from "../../../assets/water.png";
import IslandImg from "../../../assets/island.png";
import SnowImg from "../../../assets/snow.png";
import LandscapeImg from "../../../assets/mountain.png";

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
  /* justify-content: center; */
  justify-content: flex-end;
  align-items: center;
  padding: 197px 0 199px 0;
  /* margin-bottom: 197px; */
`;

export const Experience = styled.div`
  display: flex;
  width: 60%;
  padding: 0 98px 0 129px;
  /* max-width: 781px;
  margin: 0 auto; */
`;

export const ExperienceText = styled.div`
  max-width: 491px;
`;

export const Nature = styled.div`
  width: 30%;
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
`;

export const SideParagraph = styled.p`
  position: relative;
  font-family: "museo_sans500", sans;
  font-weight: 500;
  font-style: italic;

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
  padding-bottom: 198px;
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
`;

export const YellowRectangle = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1381px;
  background-color: ${color.lightYellow};
  padding: 144px 104px 126px 463px;
  position: relative;

  &:before {
    content: "";
    width: 7px;
    height: 145px;
    background-color: ${color.black};
    position: absolute;
    left: 395px;
    top: 30%;
  }

  &:after {
    content: "";
    width: 16px;
    height: 51px;
    background-color: ${color.yellow};
    position: absolute;
    right: -15px;
    bottom: 120px;
    z-index: -1;
  }
`;

export const YellowContent = styled.div`
  display: flex;
  align-items: flex-start;
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
  bottom: -127px;
  filter: drop-shadow(0 10px 10px ${color.grey});
`;

export const ImageGallery = styled.section`
  display: flex;
  justify-content: center;
`;

export const ImageFirst = styled.div`
  width: 100%;
  height: 483px;
  background: url(${IslandImg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

export const ImageSecond = styled.div`
  width: 100%;
  height: 483px;
  background: url(${SnowImg}) no-repeat center top;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  z-index: -1;
`;

export const FirstImageWrap = styled.div`
  width: 48%;
  /* padding-bottom: 240px; */
  padding-bottom: 110px;
  position: relative;

  &:after {
    content: "";
    width: 16px;
    height: 51px;
    background-color: ${color.yellow};
    position: absolute;
    right: -16px;
    top: 170px;
  }
`;

export const SecondImageWrap = styled.div`
  display: flex;
  width: 48%;
  padding-top: 270px;
  position: relative;
  left: -110px;

  &:before {
    content: "";
    width: 16px;
    height: 51px;
    background-color: ${color.yellow};
    position: absolute;
    left: -16px;
    bottom: 0px;
    z-index: -1;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -320px;
  left: 180px;
  z-index: 40;
`;
export const About = styled.section`
  padding: 196px 200px 299px 165px;
  display: flex;
`;

export const AboutText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`;

export const Offer = styled.section`
  padding-left: 100px;
`;

export const Mountain = styled.div`
  max-width: 1581px;
  background: url(${LandscapeImg}) no-repeat center top;
  background-position: cover;
  position: relative;
  display: flex;
  justify-content: flex-end;

  &:after {
    content: "";
    width: 201px;
    height: 16px;
    background-color: ${color.yellow};
    position: absolute;
    bottom: -16px;
    left: 100px;
  }
`;

export const YellowOffer = styled.div`
  max-width: 841px;
  padding: 71px 100px 50px 82px;
  background-color: ${color.lightYellow};
  position: relative;
  bottom: 100px;
  right: 100px;
  position: relative;

  &:after {
    content: "";
    width: 16px;
    height: 51px;
    position: absolute;
    right: -16px;
    top: 50px;
    background-color: ${color.yellow};
  }
`;

export const Quotes = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 198px 0 256px 0;
  position: relative;
`;

export const QuoteImg = styled.img`
  display: block;
  width: 78px;
  height: 64px;
`;

export const QuoteImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 34px;
`;

export const QuoteWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QuoteName = styled.div`
  width: 100%;
  text-align: center;
`;

export const TextFlex = styled.div`
  display: flex;
`;

export const FamousQuote = styled.p`
  font-family: "museo_sans700", sans;
  font-weight: 700;
  color: ${color.grey};
  writing-mode: vertical-lr;
  position: absolute;
  right: 46px;
  top: 50%;
  transform: translateY(-50%);
`;
