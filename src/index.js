
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import Reducers from './Reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(Reducers);

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));