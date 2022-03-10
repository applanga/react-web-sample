import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import {IntlProvider} from "react-intl";

import App from './App';
import * as serviceWorker from './serviceWorker';


//import './App.css';
import './assets/scss/style.scss';

async function loadLocaleData(locale) {
	switch (locale) {
	  case 'fr':
		return import('./assets/compiled-lang/fr.json');
	  default:
		return import('./assets/compiled-lang/en.json');
	}
};

const locale = 'en';
const rootElement = document.getElementById('root');
const history = createBrowserHistory();

function AppToRender(props) {
	return (
	<Router history={history}>
		<IntlProvider
			locale={props.locale}
			defaultLocale="en"
			messages={props.messages}
		>
			<App />
		</IntlProvider>
	</Router>
	)
};

async function bootstrapApplication(locale, mainDiv) {
	const messages = await loadLocaleData(locale);
	ReactDOM.render(<AppToRender locale={locale} messages={messages} />, mainDiv);
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
bootstrapApplication(locale, rootElement);
