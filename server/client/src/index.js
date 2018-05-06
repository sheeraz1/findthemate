import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();


