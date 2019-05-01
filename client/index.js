import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';


render(
    <Root store={store} />
    , document.getElementById('root')
)
