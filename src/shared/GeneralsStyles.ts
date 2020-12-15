import { createGlobalStyle } from "styled-components";
import { color } from "../shared/styles";

export default createGlobalStyle`
	@font-face {
		font-family: 'museo_sans300', sans;
		src: url('museosans-300-webfont.woff2') format('woff2'),
			url('museosans-300-webfont.woff') format('woff');
		font-weight: 300;
		font-style: normal;
	}


	@font-face {
		font-family: 'museo_sans500', sans;
		src: url('museosans_500-webfont.woff2') format('woff2'),
			url('museosans_500-webfont.woff') format('woff');
		font-weight: 500;
		font-style: normal;
	}


	@font-face {
		font-family: 'museo_sans700', sans;
		src: url('museosans_700-webfont.woff2') format('woff2'),
			url('museosans_700-webfont.woff') format('woff');
		font-weight: 700;
		font-style: normal;
	}

	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		font-family: 'Playfair Display', serif;
		box-sizing: border-box;
		font-size: 16px;
		height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	body {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	main {
		flex: 1 0 auto;
		width: 100%;
	}

	p {
		margin: 0;
	}


	.App {
		display: flex;
		flex-wrap: wrap;
	}

	.container-fluid {
		width: 100%;
	}

	.container {
		max-width: 1280px;
		width: 100%;
		margin: 0 auto;
	}

	.container2 {
		max-width: 1680px;
		width: 100%;
		margin: 0 auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		text-align: left;
	}


	h1,
	h2 {
		font-size: 3.75rem;
		margin-bottom: 79px;
		font-weight: 900;
	}

	h3 {
		font-size: 2.5rem;
		margin-bottom: 35px;
	}

	h4 {
		font-size: 1.875rem;
	}

	h5 {
		font-size: 1.375rem;
		font-family: 'museo_sans700', sans;
		font-weight: 700;
		margin-bottom: 36px;
	}

	h6 {
		font-size: 0.875rem;
	}

	p {
		font-size: 1.0625rem;
		font-family: 'museo_sans300', sans;
		font-weight: 300;
		line-height: 1.8;
	}

	.justify {
		text-align: justify;
	}


	a {
		text-decoration: none;
		display: inline-block;
		font-family: 'museo_sans700', sans;
		font-weight: 700;
		text-align: left;
		cursor: pointer;
	}

	.gallery-pagination {
		max-width: 120px;
    	margin-left: 100px;
	}

	.justify-second {
		text-align: justify;
		margin-right: 100px;
	}

	.h2-style {
		max-width: 570px;
	}

	.side-txt-second {
		padding: 0;
	}
    
	
`;
