import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {injectGlobal} from 'styled-components';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-family: "Open Sans";
	}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
