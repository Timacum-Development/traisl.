import styled from 'styled-components';
import { color } from '../../../shared/styles';

export const HeaderWrap = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 50px;
	background-color: ${color.yellow};
`;

export const Logo = styled.img`
	display: block;
`;
