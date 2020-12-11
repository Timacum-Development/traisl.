import React from "react";
import { PageNumber, PageNumberWrap, PageLine } from "./style";

const Pagination = (props: any) => {
  const { text } = props;
  return (
    <React.Fragment>
      <PageNumberWrap>
        <PageNumber>{text}</PageNumber>
        <PageLine />
        <PageNumber>{text}</PageNumber>
      </PageNumberWrap>
    </React.Fragment>
  );
};

export default Pagination;
