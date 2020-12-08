import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Homepage';

const Layout = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Homepage} />
			</Switch>
		</Router>
	);
};

export default Layout;
