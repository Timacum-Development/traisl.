import React from "react";
import { PageNumber } from "./style";

const Pagination = (props: any) => {
  const { text, style } = props;
  return <PageNumber style={style}>{text}</PageNumber>;
};

export default Pagination;
