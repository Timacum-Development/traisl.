import React from "react";

import { Hero, Social, GeyserBg, YellowBg } from "./style";
import MainLink from "../../../shared/components/Link";
import Btn from "../../../shared/components/Button";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero className="container-fluid">
        <Social>
          <MainLink text="Pinterest" />
          <MainLink text="Facebook" />
          <MainLink text="Instagram" />
        </Social>
        <GeyserBg></GeyserBg>
        <YellowBg></YellowBg>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
