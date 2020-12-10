import React from 'react';
import { HeaderWrap, Logo } from '../Header/style';

//Assets

import LogoImg from '../../../assets/logo.png';

const Header = () => {
	return (
		<HeaderWrap>
			<Logo src={LogoImg} />
		</HeaderWrap>
	);
};

export default Header;
