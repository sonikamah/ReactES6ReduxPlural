import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router'; // without #
import routes from './routes';
import './styles/styles.css'; // webpack can import css file s tooo
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory}  routes={routes} />,
        document.getElementById('app')
);