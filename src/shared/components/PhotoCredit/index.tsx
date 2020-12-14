import React from "react";
import { CreditWrap, CreditText, CreditName } from "./style";

const Credits = (props: any) => {
  const { photoby, text } = props;
  return (
    <CreditWrap>
      <CreditText>{photoby}</CreditText>
      <CreditName>{text}</CreditName>
    </CreditWrap>
  );
};

export default Credits;
