import React from "react";
import { LinkFirst } from "./style";

const MainLink = (props: any) => {
  console.log(props);

  const { onClick, text } = props;
  return (
    <React.Fragment>
      <LinkFirst onClick={onClick} href="#">
        {text}
      </LinkFirst>
    </React.Fragment>
  );
};

export default MainLink;
