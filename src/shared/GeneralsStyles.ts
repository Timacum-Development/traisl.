import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	@font-face {
		font-family: 'museo_sans100';
		src: url('museosans-100-webfont.woff2') format('woff2'),
			url('museosans-100-webfont.woff') format('woff');
		font-weight: 100;
		font-style: normal;

	}

	@font-face {
		font-family: 'museo_sans300';
		src: url('museosans-300-webfont.woff2') format('woff2'),
			url('museosans-300-webfont.woff') format('woff');
		font-weight: 300;
		font-style: normal;

	}


	@font-face {
		font-family: 'museo_sans500';
		src: url('museosans_500-webfont.woff2') format('woff2'),
			url('museosans_500-webfont.woff') format('woff');
		font-weight: 500;
		font-style: normal;

	}

	@font-face {
		font-family: 'museo_sans700';
		src: url('museosans_700-webfont.woff2') format('woff2'),
			url('museosans_700-webfont.woff') format('woff');
		font-weight: 700;
		font-style: normal;

	}

	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;
		font-family: 'Playfair Display', serif;
		box-sizing: border-box;
		font-size: 16px;
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

`;
