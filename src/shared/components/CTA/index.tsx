import React from "react";
import { Action, Arrow } from "./style";

//Assets
import ArrowImg from "../../../assets/yellow-arrow.png";

const CallToAction = (props: any) => {
  const { text, style } = props;
  return (
    <Action style={style}>
      {text}
      <Arrow src={ArrowImg} />
    </Action>
  );
};

export default CallToAction;
