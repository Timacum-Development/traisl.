import React from "react";
import { PageNumber } from "./style";

const Pagination = (props: any) => {
  const { text } = props;
  return <PageNumber>{text}</PageNumber>;
};

export default Pagination;
