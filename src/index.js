import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import shoppingBasketApp from './reducers/reducers';

let store = createStore(shoppingBasketApp);

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>, document.getElementById('root'));

// NEED HTTPS
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
