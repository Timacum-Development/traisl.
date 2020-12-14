import React from "react";
import { Action } from "./style";

const CallToAction = (props: any) => {
  const { text } = props;
  return <Action>{text}</Action>;
};

export default CallToAction;
