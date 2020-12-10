import React from "react";
import {
  HeaderWrap,
  Logo,
  RightWrap,
  SearchWrap,
  Search,
  Language,
  Burger,
  Magnifier,
  BurgerLine,
  LanguageTxt,
} from "../Header/style";

//Assets

import LogoImg from "../../../assets/logo.png";
import MagnifierImg from "../../../assets/magnifier.png";

const Header = () => {
  return (
    <HeaderWrap className="container">
      <a href="">
        <Logo src={LogoImg} />
      </a>
      <RightWrap>
        <SearchWrap>
          <Search />
          <Magnifier src={MagnifierImg} />
        </SearchWrap>
        <Language>
          <LanguageTxt> En • Is </LanguageTxt>
        </Language>
        <Burger>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </Burger>
      </RightWrap>
    </HeaderWrap>
  );
};

export default Header;
