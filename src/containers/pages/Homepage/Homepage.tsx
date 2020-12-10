import React from "react";

import { MainLink } from "../../../shared/components";

import { Hero, Social, GeyserBg, YellowBg } from "./style";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero className="container-fluid">
        <Social></Social>
        <GeyserBg></GeyserBg>
        <YellowBg></YellowBg>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
