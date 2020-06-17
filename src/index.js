//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './app/store';

// styles
import 'element-theme-default';
import './assets/styles/index.css';

// containers
import App from './App';

ReactDOM.render(
    <Provider store={configureStore()}>
        <App/>
    </Provider>,
    document.getElementById('root')
);