import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	html, body, #root {
		height: 100%;
		min-height: 100%;
		margin: 0;
		overflow: hidden;
		font-family: 'Roboto', sans-serif;
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
