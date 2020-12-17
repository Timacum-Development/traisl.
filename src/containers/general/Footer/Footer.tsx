import React from "react";
import {
  FooterWrap,
  FooterInside,
  FirstMenu,
  SecondMenu,
  InfoWrap,
  ContactInfo,
  YellowBox,
  Adress,
  AdressWrap,
} from "./style";

import CallToAction from "../../../shared/components/CTA";

import MainLink from "../../../shared/components/Link";
const Footer = () => {
  return (
    <FooterWrap>
      <YellowBox>
        <AdressWrap>
          <Adress
            type="text"
            placeholder="Enter your email address..."
          ></Adress>
          <CallToAction
            text="Subscribe"
            style={{
              filter: "none",
              position: "absolute",
              right: "0px",
              top: "-6px",
            }}
          />
        </AdressWrap>
      </YellowBox>
      <FooterInside className="container">
        <FirstMenu>
          <InfoWrap>
            <h6>Iceland</h6>
            <ul>
              <li>
                <MainLink text="Homepage" />
              </li>
              <li>
                <MainLink text="About Iceland" />
              </li>
              <li>
                <MainLink text="The History" />
              </li>
              <li>
                <MainLink text="Great Nature" />
              </li>
              <li>
                <MainLink text="Best Places" />
              </li>
            </ul>
          </InfoWrap>
          <InfoWrap>
            <h6>Company</h6>
            <ul>
              <li>
                <MainLink text="About traisl" />
              </li>
              <li>
                <MainLink text="Our mission" />
              </li>
              <li>
                <MainLink text="The team" />
              </li>
              <li>
                <MainLink text="The history" />
              </li>
              <li>
                <MainLink text="Location" />
              </li>
            </ul>
          </InfoWrap>
          <InfoWrap>
            <h6>Legal</h6>
            <ul>
              <li>
                <MainLink text="Terms of use" />
              </li>
              <li>
                <MainLink text="Privacy policy" />
              </li>
              <li>
                <MainLink text="Imprint" />
              </li>
              <li>
                <MainLink text="Sitemap" />
              </li>
              <li>
                <MainLink text="Credits" />
              </li>
            </ul>
          </InfoWrap>
        </FirstMenu>
        <SecondMenu>
          <InfoWrap>
            <h6>Contact</h6>
            <ul>
              <li>
                <ContactInfo>Traisl.</ContactInfo>
              </li>
              <li>
                <MainLink text="Höfðabakki 27a" />
              </li>
              <li>
                <MainLink text="Reykjavík, Iceland" />
              </li>
              <li>
                <MainLink text="P: +354 4 278 94 832a" />
              </li>
              <li>
                <ContactInfo>E: info@traisl.co</ContactInfo>
              </li>
            </ul>
          </InfoWrap>
          <InfoWrap>
            <h6>Social</h6>
            <ul>
              <li>
                <MainLink text="Instagram" />
              </li>
              <li>
                <MainLink text="Facebook" />
              </li>
              <li>
                <MainLink text="Pinterest" />
              </li>
            </ul>
          </InfoWrap>
        </SecondMenu>
      </FooterInside>
    </FooterWrap>
  );
};

export default Footer;
