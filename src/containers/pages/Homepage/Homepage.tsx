import React from "react";

import {
  Hero,
  Social,
  GeyserBg,
  YellowBg,
  Buttons,
  ButtonPageWrap,
  PageNumberWrap,
  PageLine,
  Intro,
  TextWrap,
  HeadingWrap,
} from "./style";
import MainLink from "../../../shared/components/Link";
import Btn from "../../../shared/components/Button";
import Pagination from "../../../shared/components/Slider";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

// Assets
import PlayButton from "../../../assets/play-btn.png";
import RightSlider from "../../../assets/black-slider.png";
import LeftSlider from "../../../assets/yellow-slider.png";
import ZoomButton from "../../../assets/zoom.png";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero className="container-fluid">
        <Social>
          <MainLink text="Pinterest" />
          <MainLink text="Facebook" />
          <MainLink text="Instagram" />
        </Social>
        <Buttons>
          <a>
            <Btn play btnUrl={PlayButton} />
          </a>
          <ButtonPageWrap>
            <a>
              <Btn blk btnUrl={RightSlider} />
            </a>
            <PageNumberWrap>
              <Pagination text="2" />
              <PageLine />
              <Pagination text="5" />
            </PageNumberWrap>
          </ButtonPageWrap>
        </Buttons>
        <GeyserBg></GeyserBg>
        <YellowBg></YellowBg>
        <Intro>
          <HeadingWrap>
            <Pagination text="1" style={{ padding: "10px 29px 0px 0px" }} />
            <h1>Meet the volcanoes, geysers, hot springs and lava fields.</h1>
          </HeadingWrap>
          <TextWrap>
            <h5>
              Iceland, a Nordic island nation, is defined by its dramatic
              landscape...
            </h5>
            <p>
              Massive glaciers are protected in Vatnajökull and Snæfellsjökull
              national parks. Most of the population lives in the capital,
              Reykjavik, which runs on geothermal power and is home to the
              National and Saga museums, tracing Iceland’s Viking history.
            </p>
          </TextWrap>
        </Intro>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
