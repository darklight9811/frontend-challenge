// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Store
import { store } from './js/models';

// Containers
import App from './js/containers/App';
import Localization from './js/containers/Localization/component';

// -------------------------------------------------
// Styles methods
// -------------------------------------------------

import './sass/index.scss';

// -------------------------------------------------
// Routes
// -------------------------------------------------

import "./js/services/routes/books";

// -------------------------------------------------
// Setup DOM
// -------------------------------------------------

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Localization language="en-EN">
				<Router>
					<App />
				</Router>
			</Localization>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
