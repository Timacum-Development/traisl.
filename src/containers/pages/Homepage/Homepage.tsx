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
  Travel,
  Experience,
  Nature,
  ExperienceText,
  SideText,
  SideParagraph,
  Promo,
  YellowRectangle,
  PromoImg,
} from "./style";
import MainLink from "../../../shared/components/Link";
import Btn from "../../../shared/components/Button";
import Pagination from "../../../shared/components/Slider";
import CardText from "../../../shared/components/RentagleText";
import Credits from "../../../shared/components/PhotoCredit";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

// Assets

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero className="container2">
        <Social>
          <MainLink text="Pinterest" />
          <MainLink text="Facebook" />
          <MainLink text="Instagram" />
        </Social>
        <Buttons>
          <a>
            <Btn play />
          </a>
          <ButtonPageWrap>
            <a>
              <Btn blk />
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
      <Travel className="container2">
        <Experience>
          <SideText>
            <SideParagraph>
              The warmth of Icelanders is disarming, as is their industriousn
            </SideParagraph>
          </SideText>
          <Pagination text="2" style={{ padding: "0px 26px 0px 0px" }} />
          <ExperienceText>
            <h2>Extraordinary experience on the Iceland.</h2>
            <h5>
              It's the power of Icelandic nature to turn the prosaic into the
              extraordinary.{" "}
            </h5>
            <p>
              An underpopulated island marooned near the top of the globe,
              Iceland is, literally, a country in the making. It's a vast
              volcanic laboratory where mighty forces shape the earth: geysers
              gush, mudpots gloop, ice-covered volcanoes rumble and glaciers cut
              great pathways through the mountains. Its supercharged splendour
              seems designed to remind visitors of their utter insignificance in
              the greater scheme of things. And it works a treat: some crisp
              clean air, an eyeful of the cinematic landscapes, and everyone is
              transfixed.
            </p>
          </ExperienceText>
        </Experience>
        <Nature>
          <a>
            <Btn />
          </a>
        </Nature>
        <Credits photoby="Photo:" text="Nicole B." />
      </Travel>
      <Promo className="container2">
        <YellowRectangle>
          <Pagination text="3" />
          <CardText
            heading="Topping headlines, topping bucket lists.
            There seems no end to the glorious talents of the breathtaking northern destination."
            text="And it works a treat: some crisp clean air, an eyeful of the cinematic landscapes, and everyone is transfixed."
            style={{ maxWidth: "600px" }}
          />
          <PromoImg>
            <a>
              <Btn play />
            </a>
          </PromoImg>
        </YellowRectangle>
      </Promo>
    </React.Fragment>
  );
};

export default Homepage;
