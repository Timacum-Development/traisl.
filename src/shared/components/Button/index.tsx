import React from "react";
import { PlayBtn, BlackSlider, YellowSlider, ZoomBtn } from "./style";

//Assets

import PlayButton from "../../../assets/play-btn.png";
import RightSlider from "../../../assets/black-slider.png";
import LeftSlider from "../../../assets/yellow-slider.png";
import ZoomButton from "../../../assets/zoom.png";
import BlackReverse from "../../../assets/black-reverse.png";

const Btn = (props: any) => {
  const { play, blk, ylw, reverse } = props;

  return (
    <React.Fragment>
      {play ? (
        <PlayBtn src={PlayButton} />
      ) : !play && blk ? (
        <BlackSlider src={RightSlider} />
      ) : !blk && ylw ? (
        <YellowSlider src={LeftSlider} />
      ) : !blk && reverse ? (
        <BlackSlider src={BlackReverse} />
      ) : (
        <ZoomBtn src={ZoomButton} />
      )}
    </React.Fragment>
  );
};

export default Btn;
