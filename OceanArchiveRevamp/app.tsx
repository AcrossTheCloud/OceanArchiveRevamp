﻿//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
import "./styles/styles.css";
import "./styles/carousel.css";

declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './header';
import Home from './home';
import Map from './map';

import * as Constant from './constants';

document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/map" component={Map} />
                </Switch>
            </div>
        );
    }
}

ReactDOM.render(<BrowserRouter><Homepage /></BrowserRouter>, document.getElementById('root'));