import React from "react";
import { LinkFirst, LinkSecond } from "./style";

const MainLink = (props: any) => {
  console.log(props);

  const { onClick, text, social } = props;
  return (
    <React.Fragment>
      {social ? (
        <LinkFirst onClick={onClick} href="#">
          {text}
        </LinkFirst>
      ) : (
        <LinkSecond onClick={onClick}>{text}</LinkSecond>
      )}
    </React.Fragment>
  );
};

export default MainLink;
