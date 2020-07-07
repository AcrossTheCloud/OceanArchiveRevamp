"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Run this in console after changing code.
//node_modules\.bin\webpack app.tsx --config webpack-config.js
require("./styles/styles.css");
require("./styles/carousel.css");
var React = require('react');
var ReactDOM = require('react-dom');
var header_1 = require("./header");
var newAndTrending_1 = require("./newAndTrending");
var contentSection_1 = require("./contentSection");
var announcementsContainer_1 = require("./announcementsContainer");
var Constant = require("./constants");
document.body.style.backgroundColor = Constant.MAIN_COLOUR;
document.body.style.fontFamily = 'Roboto';
document.body.style.color = '#ffffff';
document.body.style.padding = '0px';
document.body.style.margin = '0px';
var Homepage = /** @class */ (function (_super) {
    __extends(Homepage, _super);
    function Homepage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homepage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(header_1.default, null),
            React.createElement(newAndTrending_1.default, null),
            React.createElement(announcementsContainer_1.default, null),
            React.createElement(contentSection_1.default, null)));
    };
    return Homepage;
}(React.Component));
ReactDOM.render(React.createElement(Homepage, null), document.getElementById('root'));
//# sourceMappingURL=app.js.map