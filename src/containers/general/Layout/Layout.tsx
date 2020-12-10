import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import Header from '../Header/Header';

const Layout = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/' exact component={Homepage} />
			</Switch>
		</Router>
	);
};

export default Layout;
