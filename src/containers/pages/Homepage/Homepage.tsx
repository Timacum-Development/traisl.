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
  YellowContent,
  PromoImg,
  ImageGallery,
  ImageFirst,
  ImageSecond,
  FirstImageWrap,
  SecondImageWrap,
  SliderWrapper,
  About,
  AboutText,
  Offer,
  Mountain,
  YellowOffer,
  Quotes,
  QuoteImg,
  QuoteWrap,
  QuoteImgWrap,
  QuoteName,
} from "./style";

import MainLink from "../../../shared/components/Link";
import Btn from "../../../shared/components/Button";
import Pagination from "../../../shared/components/Slider";
import CardText from "../../../shared/components/RentagleText";
import CallToAction from "../../../shared/components/CTA";
import Credits from "../../../shared/components/PhotoCredit";
import {
  convertTypeAcquisitionFromJson,
  getTsBuildInfoEmitOutputFilePath,
} from "typescript";

// Assets

import QuoteImage from "../../../assets/quote.png";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero className="container2">
        <Social>
          <MainLink text="Pinterest" />
          <MainLink text="Facebook" />
          <MainLink text="Instagram" />
        </Social>
        <GeyserBg>
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
        </GeyserBg>
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
          <Pagination text="2" style={{ padding: "10px 26px 0px 0px" }} />
          <ExperienceText>
            <h2>Extraordinary experience on the Iceland.</h2>
            <h5>
              It's the power of Icelandic nature to turn the prosaic into the
              extraordinary.{" "}
            </h5>
            <p className="justify">
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
        <Credits photoby="Photo:" text="NicoleB." />
      </Travel>
      <Promo className="container2">
        <YellowRectangle>
          <YellowContent>
            <Pagination text="3" />
            <CardText
              heading="Topping headlines, topping bucket lists.
            There seems no end to the glorious talents of the breathtaking northern destination."
              text="And it works a treat: some crisp clean air, an eyeful of the cinematic landscapes, and everyone is transfixed."
              style={{ maxWidth: "600px" }}
            />
          </YellowContent>
          <PromoImg>
            <a>
              <Btn play />
            </a>
          </PromoImg>
        </YellowRectangle>
      </Promo>
      <ImageGallery className="container2">
        <FirstImageWrap>
          <ImageFirst>
            <a>
              <Btn />
            </a>
          </ImageFirst>
          <SliderWrapper>
            <a>
              <Btn reverse />
            </a>
            <a>
              <Btn ylw />
            </a>
          </SliderWrapper>
          <PageNumberWrap className="gallery-pagination">
            <Pagination text="7" />
            <PageLine />
            <Pagination text="23" />
          </PageNumberWrap>
        </FirstImageWrap>
        <SecondImageWrap>
          <ImageSecond>
            <a>
              <Btn />
            </a>
          </ImageSecond>
        </SecondImageWrap>
      </ImageGallery>
      <About className="container2">
        <Pagination text="4" style={{ padding: "10px 30px 0px 0px" }} />
        <div>
          <h2 className="h2-style">Mindblowing island and its nature.</h2>
          <AboutText>
            <p className="justify-second">
              Don't for a minute think it's all about the great outdoors. The
              counterpoint to so much natural beauty is found in Iceland's
              cultural life, which celebrates a literary legacy that stretches
              from medieval sagas to contemporary thrillers by way of Nobel
              Prize winners.
            </p>
            <p className="justify-second">
              Live music is everywhere, as is visual art, handicrafts and
              locavore cuisine. The world's most northerly capital is home to
              the kind of egalitarianism, green thinking and effortless style
              that its Nordic brethren are famous for – all of which is wrapped
              in Iceland's assured individuality.
            </p>
            <SideText className="side-txt-second">
              <SideParagraph>
                Clean air, an eyeful of the cinematic landscapes, and everyone
                is transfixed.
              </SideParagraph>
            </SideText>
          </AboutText>
          <CallToAction text="Read more" />
        </div>
      </About>
      <Offer className="container2">
        <Mountain>
          <YellowOffer>
            <CardText
              heading="The flights and accomondations on Iceland through our partners"
              text="Iceland is a country of sharp contrasts. A place where fire and ice co-exist. Where dark winters are offset by the summer’s midnight sun. A country where insular existence has spurred a rich and vibrant culture."
            />
            <a>
              <Btn
                play
                style={{ position: "absolute", left: "-40px", bottom: "80px" }}
              />
            </a>
            <CallToAction text="Check offers" />
          </YellowOffer>
        </Mountain>
      </Offer>
      <Quotes className="container2">
        <QuoteImgWrap>
          <QuoteImg src={QuoteImage} />
        </QuoteImgWrap>
        <QuoteWrap>
          <Pagination text="6" />
          <h4 className="h4-style">
            People travel to faraway places to watch, in fascination, the people
            they ignore at home.
          </h4>
        </QuoteWrap>
        <QuoteName>
          <p className="p-style">Dagobert D. Runes</p>
        </QuoteName>
      </Quotes>
    </React.Fragment>
  );
};

export default Homepage;
