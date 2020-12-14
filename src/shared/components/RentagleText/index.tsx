import React from "react";
import { HeadingTextWrap } from "./style";

const CardText = (props: any) => {
  const { heading, text, style } = props;
  return (
    <HeadingTextWrap>
      <h3>{heading}</h3>
      <p style={style}>{text}</p>
    </HeadingTextWrap>
  );
};

export default CardText;
