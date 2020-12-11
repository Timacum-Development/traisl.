import React from "react";

import {
  Hero,
  Social,
  GeyserBg,
  YellowBg,
  Buttons,
  ButtonPageWrap,
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
            <Pagination text="1" />
          </ButtonPageWrap>
        </Buttons>
        <GeyserBg></GeyserBg>
        <YellowBg></YellowBg>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
