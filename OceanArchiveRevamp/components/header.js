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
var React = require('react');
var react_router_dom_1 = require("react-router-dom");
var reactstrap_1 = require("reactstrap");
var Logo = /** @class */ (function (_super) {
    __extends(Logo, _super);
    function Logo(props) {
        return _super.call(this, props) || this;
    }
    Logo.prototype.render = function () {
        return (React.createElement("div", { className: 'logo' }, this.props.name));
    };
    return Logo;
}(React.Component));
var HeaderButton = /** @class */ (function (_super) {
    __extends(HeaderButton, _super);
    function HeaderButton(props) {
        return _super.call(this, props) || this;
    }
    HeaderButton.prototype.render = function () {
        return (React.createElement("div", { className: 'headerButton', onClick: this.props.onClick }, this.props.name));
    };
    return HeaderButton;
}(React.Component));
var LoginModal = /** @class */ (function (_super) {
    __extends(LoginModal, _super);
    function LoginModal(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    LoginModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(HeaderButton, { name: 'LOGIN', onClick: this.toggle }),
            React.createElement(reactstrap_1.Modal, { isOpen: this.state.isOpen, toggle: this.toggle },
                React.createElement(reactstrap_1.ModalHeader, null, "Login"),
                React.createElement(reactstrap_1.ModalBody, null,
                    React.createElement("form", null,
                        React.createElement("p", { className: 'inputLabel' }, "EMAIL"),
                        React.createElement("input", { type: 'text', id: 'email', name: 'email' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("p", { className: 'inputLabel' }, "PASSWORD"),
                        React.createElement("input", { type: 'password', id: 'passwrd', name: 'password' }))),
                React.createElement(reactstrap_1.ModalFooter, null,
                    React.createElement(reactstrap_1.Button, { className: 'modalButton', onClick: this.toggle }, "LOGIN"),
                    React.createElement("div", { className: 'modalCenteredLink' },
                        React.createElement("a", { href: 'https://www.google.com' }, "Forgot password?"))))));
    };
    return LoginModal;
}(React.Component));
var SignUpModal = /** @class */ (function (_super) {
    __extends(SignUpModal, _super);
    function SignUpModal(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () { return _this.setState({
            isOpen: !_this.state.isOpen
        }); };
        _this.disableScroll = function () {
            document.body.style.overflow = 'hidden';
        };
        _this.enableScroll = function () {
            document.body.style.overflow = 'scroll';
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    SignUpModal.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(HeaderButton, { name: 'SIGNUP', onClick: this.toggle }),
            React.createElement(reactstrap_1.Modal, { isOpen: this.state.isOpen, toggle: this.toggle, onOpened: this.disableScroll, onClosed: this.enableScroll },
                React.createElement(reactstrap_1.ModalHeader, null, "Sign Up"),
                React.createElement(reactstrap_1.ModalBody, null,
                    React.createElement("p", null, "With a Social Account"),
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement(reactstrap_1.Button, { className: 'google socialButton' }, "GOOGLE"),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement(reactstrap_1.Button, { className: 'facebook socialButton' }, "FACEBOOK"),
                        React.createElement("div", { className: 'fillerBox' }),
                        React.createElement(reactstrap_1.Button, { className: 'twitter socialButton' }, "TWITTER")),
                    React.createElement("div", { className: 'horizontalLineText' },
                        React.createElement("p", { style: { fontSize: '10pt' } }, "or")),
                    React.createElement("form", null,
                        React.createElement("p", { className: 'inputLabel' }, "FIRST NAME"),
                        React.createElement("input", { type: 'text', id: 'fName', name: 'firstName' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("p", { className: 'inputLabel' }, "LAST NAME"),
                        React.createElement("input", { type: 'text', id: 'lName', name: 'lastName' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("p", { className: 'inputLabel' }, "USERNAME"),
                        React.createElement("input", { type: 'text', id: 'uName', name: 'userName' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("p", { className: 'inputLabel' }, "EMAIL"),
                        React.createElement("input", { type: 'text', id: 'email', name: 'email' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("p", { className: 'inputLabel' }, "PASSWORD"),
                        React.createElement("input", { type: 'password', id: 'passwrd', name: 'password' }),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("div", { style: { display: 'flex' } },
                            React.createElement("input", { className: 'checkBox', type: 'checkbox', id: 'termsAndConditions', name: 'termsAndConditions', value: 'TAC' }),
                            React.createElement("label", { className: 'checkBoxLabel', for: 'termsAndConditions' },
                                "I agree to the ",
                                React.createElement("a", { href: 'https://www.google.com' }, "Terms and Condtitions"))),
                        React.createElement("div", { style: { height: '20px' } }),
                        React.createElement("div", { style: { display: 'flex' } },
                            React.createElement("input", { className: 'checkBox', type: 'checkbox', id: 'mailList', name: 'mailList', value: 'mList' }),
                            React.createElement("label", { className: 'checkBoxLabel', for: 'mailList' }, "Join mailing list")),
                        React.createElement("p", null, "It was their first date and she had been looking forward to it the entire week. She had her eyes on him for months, and it had taken a convoluted scheme with several friends to make it happen, but he'd finally taken the hint and asked her out. After all the time and effort she'd invested into it, she never thought that it would be anything but wonderful. It goes without saying that things didn't work out quite as she expected. The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there. And yet, he already knew that the eight hours he was prepared to sit in front of his computer today would end with the screen remaining blank. The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time, he thought, with the knowledge deep within that it wouldn't."),
                        React.createElement("p", null,
                            "By joining the mailing list you acknowledge that your information will be transferred to Mailchimp for processing. Learn more about Mailchimp's privacy practices ",
                            React.createElement("a", { href: 'https://www.google.com' }, "here"),
                            "."))),
                React.createElement(reactstrap_1.ModalFooter, null,
                    React.createElement(reactstrap_1.Button, { className: 'modalButton', onClick: this.toggle }, "SIGN UP"),
                    React.createElement("div", { className: 'modalCenteredLink' },
                        React.createElement("p", null,
                            "Already have an account? ",
                            React.createElement("a", { href: 'https://www.google.com' }, "Sign In")))))));
    };
    return SignUpModal;
}(React.Component));
var SeachBar = /** @class */ (function (_super) {
    __extends(SeachBar, _super);
    function SeachBar(props) {
        return _super.call(this, props) || this;
    }
    SeachBar.prototype.render = function () {
        return (React.createElement("form", { method: "post", style: { display: 'flex' } },
            React.createElement("input", { type: "search", className: "searchBar", placeholder: "Search..." }),
            React.createElement("input", { type: "submit", className: 'searchButton' })));
    };
    return SeachBar;
}(React.Component));
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "header" },
            React.createElement(Logo, { name: 'OCEAN' }),
            React.createElement("div", { style: { flex: '1' } },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    React.createElement("div", { className: 'headerNavBar' },
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row' } },
                            React.createElement(react_router_dom_1.NavLink, { to: "/" },
                                React.createElement(HeaderButton, { name: 'HOME' })),
                            React.createElement(react_router_dom_1.NavLink, { to: "/map" },
                                React.createElement(HeaderButton, { name: 'MAP' })),
                            React.createElement(HeaderButton, { name: 'TERMS' }),
                            React.createElement(HeaderButton, { name: 'PRIVACY' }),
                            React.createElement("div", { className: 'fillerBox' }),
                            React.createElement(LoginModal, null),
                            React.createElement(SignUpModal, null))),
                    React.createElement("div", { style: { flex: '1' } },
                        React.createElement(SeachBar, null)))),
            React.createElement(Logo, { name: 'ARCHIVE' })));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=header.js.map