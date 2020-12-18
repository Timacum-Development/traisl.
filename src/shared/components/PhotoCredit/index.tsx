import React from "react";
import { CreditWrap, CreditText, CreditName } from "./style";

const Credits = (props: any) => {
  const { photoby, text, style } = props;
  return (
    <CreditWrap style={style}>
      <CreditText>{photoby}</CreditText>
      <CreditName>{text}</CreditName>
    </CreditWrap>
  );
};

export default Credits;
