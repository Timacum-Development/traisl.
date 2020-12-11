import React from "react";
import { PlayBtn, BlackSlider, YellowSlider, ZoomBtn } from "./style";

const Btn = (props: any) => {
  const { play, blk, ylw, btnUrl } = props;

  return (
    <React.Fragment>
      {play ? (
        <PlayBtn src={btnUrl} />
      ) : !play && blk ? (
        <BlackSlider src={btnUrl} />
      ) : !blk && ylw ? (
        <YellowSlider src={btnUrl} />
      ) : (
        <ZoomBtn src={btnUrl} />
      )}
    </React.Fragment>
  );
};

export default Btn;
