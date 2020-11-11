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
require("./styles/styles.css");
var React = require('react');
var google_map_react_1 = require("google-map-react");
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Map.prototype.render = function () {
        return (React.createElement("div", { style: { flex: '1' } },
            React.createElement("div", { className: "mapSection" },
                React.createElement("div", { className: 'mapContainer' },
                    React.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: 'AIzaSyBB19hnVYvdWOemDURUEXthK-TqL_TVeFM' }, defaultZoom: 10, defaultCenter: { lat: 33.8688, lng: 151.2093 } })))));
    };
    return Map;
}(React.Component));
exports.default = Map;
//# sourceMappingURL=map.js.map