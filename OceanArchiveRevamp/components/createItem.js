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
var Constant = require("../constants");
var reactstrap_1 = require("reactstrap");
var react_select_1 = require("react-select");
var google_map_react_1 = require("google-map-react");
var Draggable = require('react-draggable');
var DetailsPage = /** @class */ (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage(props) {
        return _super.call(this, props) || this;
    }
    DetailsPage.prototype.render = function () {
        return (React.createElement("div", { className: 'createItemPage' },
            React.createElement("div", { className: 'dragAndDrop' }, "DRAG & DROP OR CLICK TO UPLOAD FILE"),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'title' }, "Title"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'title', id: 'title' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'desc' }, "Description"),
                React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'desc', id: 'desc' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'creator' }, "Creator(s) / Author(s)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'creator', id: 'creator' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'dateStart' }, "Date Started/Made"),
                React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateStart', id: 'dateStart' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'dateFinish' }, "Date Finished"),
                React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateFinish', id: 'dateFinish' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'url' }, "URL"),
                React.createElement(reactstrap_1.Input, { type: 'url', name: 'url', id: 'url' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'lang' }, "Language"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'lang', id: 'lang' }))));
    };
    return DetailsPage;
}(React.Component));
var CategoryAndTagsPage = /** @class */ (function (_super) {
    __extends(CategoryAndTagsPage, _super);
    function CategoryAndTagsPage(props) {
        var _this = _super.call(this, props) || this;
        _this.setMainFocus = function (index) {
            if (index != _this.state.activeFocus) {
                _this.props.setMainFocus(index);
                _this.setState({
                    activeFocus: index
                });
                //console.log(index, " checked ", this.checkBoxes[index].current.checked);
                _this.checkBoxes[index].current.checked = false;
            }
        };
        _this.state = {
            activeFocus: 0
        };
        _this.checkBoxes = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        return _this;
    }
    CategoryAndTagsPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'createItemPage' },
            "Categories",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'focusMain' }, "Main Focus Area"),
                React.createElement("input", { type: 'hidden', name: 'focusMain', value: this.mainFocus }),
                React.createElement(reactstrap_1.ButtonGroup, { className: 'mainFocus' },
                    React.createElement(reactstrap_1.Button, { className: 'left', type: 'button', style: {
                            backgroundColor: this.state.activeFocus == 0 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR
                        }, onClick: function () { return _this.setMainFocus(0); } }, "Science & Tech"),
                    React.createElement(reactstrap_1.Button, { type: 'button', style: { backgroundColor: this.state.activeFocus == 1 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: function () { return _this.setMainFocus(1); } }, "Art"),
                    React.createElement(reactstrap_1.Button, { className: 'right', type: 'button', style: { backgroundColor: this.state.activeFocus == 2 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: function () { return _this.setMainFocus(2); } }, "Activism"))),
            React.createElement(reactstrap_1.FormGroup, { check: true },
                React.createElement(reactstrap_1.Label, null, "Other Focus Areas (optional)"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 0 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'sci', style: { display: this.state.activeFocus == 0 ? 'none' : 'inline-block' }, ref: this.checkBoxes[0] }),
                    ' ',
                    "Science & Tech"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 1 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'art', style: { display: this.state.activeFocus == 1 ? 'none' : 'inline-block' }, ref: this.checkBoxes[1] }),
                    ' ',
                    "Art"),
                React.createElement(reactstrap_1.Label, { check: true, style: { display: this.state.activeFocus == 2 ? 'none' : 'inline-block' } },
                    React.createElement("input", { type: 'checkbox', name: 'other', value: 'act', style: { display: this.state.activeFocus == 2 ? 'none' : 'inline-block' }, ref: this.checkBoxes[2] }),
                    ' ',
                    "Activism")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'cat' }, "Object Category"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'cat' },
                    React.createElement("option", null, "Other"),
                    React.createElement("option", null, "painting"),
                    React.createElement("option", null, "video"))),
            React.createElement("div", { style: { height: '24px' } }),
            "Tags",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'concept' }, "Concept"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'concept' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'keyword' }, "Keywords (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'keyword' }))));
    };
    return CategoryAndTagsPage;
}(React.Component));
var RegionAndLegalPage = /** @class */ (function (_super) {
    __extends(RegionAndLegalPage, _super);
    function RegionAndLegalPage(props) {
        return _super.call(this, props) || this;
    }
    RegionAndLegalPage.prototype.render = function () {
        return (React.createElement("div", { className: 'createItemPage' },
            "Regions",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'oceans' }, "Ocean Region/s (optional)"),
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.oceans, isMulti: true, isSearchable: true })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'countries' }, "Country/s (optional)"),
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.countries, value: Constant.countries.value, isMulti: true, isSeachable: true })),
            React.createElement("div", { style: { height: '50px' } }),
            "Legal",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'license' }, "License"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'license' },
                    React.createElement("option", null, "CC BY (Least Restrictive)"),
                    React.createElement("option", null, "CC BY-SA"),
                    React.createElement("option", null, "CC BY-ND"),
                    React.createElement("option", null, "CC BY-NC"),
                    React.createElement("option", null, "CC BY-NC-SA"),
                    React.createElement("option", null, "CC BY-NC-ND (Most Restrictive CC)"),
                    React.createElement("option", null, "Ocean Archive (Most Restrictive)"))),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'copyr' }, "Copyright Owner (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'copyr' }))));
    };
    return RegionAndLegalPage;
}(React.Component));
var CoordinateBox = /** @class */ (function (_super) {
    __extends(CoordinateBox, _super);
    function CoordinateBox(props) {
        var _this = _super.call(this, props) || this;
        _this.inFocus = function () {
            _this.setState({
                isFocused: true
            });
            _this.props.activateWaypoint(_this.state.id);
        };
        _this.outFocus = function () {
            _this.setState({
                isFocused: false
            });
            _this.props.deactivateWaypoint();
        };
        _this.updateLat = function (e) {
            _this.setState({ lat: e.target.value });
            _this.props.updateLatLong(_this.state.id, e.target.value, _this.state.lng);
        };
        _this.updateLng = function (e) {
            _this.setState({ lng: e.target.value });
            _this.props.updateLatLong(_this.state.id, _this.state.lat, e.target.value);
        };
        _this.remove = function () {
            _this.props.remove(_this.state.id);
        };
        _this.onStart = function () {
            _this.props.onStart(_this.state.id);
        };
        _this.onDrag = function (e, ui) {
            _this.props.onDrag(_this.state.id, ui.y);
        };
        _this.onStop = function (e, ui) {
            _this.props.onStop(_this.state.id, ui.y);
        };
        _this.updateYpos = function (newY) {
            _this.setState({
                position: { x: 0, y: newY }
            });
        };
        _this.state = {
            isFocused: false,
            lat: 0,
            lng: 0,
            id: _this.props.arrayId,
            position: { x: 0, y: _this.props.yPos }
        };
        return _this;
        //console.log('props: ', props);
    }
    CoordinateBox.prototype.render = function () {
        return (React.createElement(Draggable, { axis: 'y', bounds: 'parent', onStart: this.onStart, onDrag: this.onDrag, onStop: this.onStop, position: this.state.position, cancel: '.coordInput' },
            React.createElement("div", { tabIndex: '0', className: this.state.isFocused ? 'coordContainer focused' : 'coordContainer', onFocus: this.inFocus, onBlur: this.outFocus },
                React.createElement(reactstrap_1.FormGroup, { className: 'coordFormGroup' },
                    React.createElement(reactstrap_1.Label, { for: 'lat', className: 'coordLabel' }, "LAT"),
                    React.createElement(reactstrap_1.Input, { className: 'coordInput', type: 'number', maxLength: '10', name: 'lat', onChange: this.updateLat })),
                React.createElement(reactstrap_1.FormGroup, { className: 'coordFormGroup' },
                    React.createElement(reactstrap_1.Label, { for: 'lng', className: 'coordLabel' }, "LONG"),
                    React.createElement(reactstrap_1.Input, { className: 'coordInput', type: 'number', maxLength: '10', name: 'lng', onChange: this.updateLng })),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: this.state.isFocused ? 'coordBtnGroup focused' : 'coordBtnGroup' },
                    React.createElement("div", { tabIndex: this.state.isFocused ? '0' : '-1', className: 'coordButton centerHere' }, "+"),
                    React.createElement("div", { tabIndex: this.state.isFocused ? '0' : '-1', className: 'coordButton delete', onClick: this.remove }, "x")))));
    };
    return CoordinateBox;
}(React.Component));
var HEIGHT = 60;
var LocationPage = /** @class */ (function (_super) {
    __extends(LocationPage, _super);
    function LocationPage(props) {
        var _this = _super.call(this, props) || this;
        _this.addCoord = function () {
            _this.state.coords.push({ 'ref': React.createRef(), 'id': _this.state.nextId, 'lat': 0, 'lng': 0, 'yPos': 0 });
            _this.setState({
                coords: _this.state.coords,
                nextId: _this.state.nextId + 1
            });
        };
        _this.removeCoord = function (id) {
            //console.log("remove id: ", id);
            var i = _this.state.coords.findIndex(function (coord) { return coord.id === id; });
            //console.log("remove i: ", i);
            if (i >= 0) {
                _this.state.coords.splice(i, 1);
                _this.setState({
                    coords: _this.state.coords
                });
                //console.log(this.state.coords);
            }
        };
        _this.updateLatLng = function (id, newLat, newLng) {
            var i = _this.state.coords.findIndex(function (coord) { return coord.id === id; });
            if (i >= 0) {
                _this.state.coords[i].lat = newLat;
                _this.state.coords[i].lng = newLng;
                _this.setState({ coords: _this.state.coords });
            }
        };
        _this.onStart = function (id) {
            //var i = this.state.coords.findIndex(coord => coord.id === id);
            //if (i >= 0)
            //console.log('onStart yPos: ', this.state.coords[i].yPos);
        };
        _this.onDrag = function (id, y) {
            var i = _this.state.coords.findIndex(function (coord) { return coord.id === id; });
            if (i >= 0) {
                //console.log('onDrag y: ', y);
                var n = Math.floor((y + HEIGHT / 2) / HEIGHT);
                //console.log('n: ', n);
                if (n < 0) {
                    for (var j = 0; j < _this.state.coords.length; j += 1) {
                        if (j != i) {
                            var k = j - i;
                            if (k < 0 && k >= n)
                                _this.state.coords[j].ref.current.updateYpos(HEIGHT);
                            else
                                _this.state.coords[j].ref.current.updateYpos(0);
                        }
                    }
                }
                else if (n > 0) {
                    for (var j = 0; j < _this.state.coords.length; j += 1) {
                        if (j != i) {
                            var k = j - i;
                            if (k >= 0 && k <= n)
                                _this.state.coords[j].ref.current.updateYpos(-HEIGHT);
                            else
                                _this.state.coords[j].ref.current.updateYpos(0);
                        }
                    }
                }
                else {
                    for (var j = 0; j < _this.state.coords.length; j += 1)
                        if (j != i)
                            _this.state.coords[j].ref.current.updateYpos(0);
                }
            }
        };
        _this.onStop = function (id, y) {
            var i = _this.state.coords.findIndex(function (coord) { return coord.id === id; });
            if (i >= 0) {
                //console.log('onStop y: ', y);
                for (var j = 0; j < _this.state.coords.length; j += 1)
                    if (j != i)
                        _this.state.coords[j].ref.current.updateYpos(0);
                var n = Math.floor((y + HEIGHT / 2) / HEIGHT);
                var coords = _this.state.coords;
                var movedCoord = _this.state.coords[i];
                if (n < 0) {
                    for (var j = i; j > (i + n); j -= 1) {
                        coords[j] = coords[j - 1];
                    }
                    coords[i + n] = movedCoord;
                    _this.setState({
                        coords: coords,
                        currentFocus: i + n
                    });
                }
                else if (n > 0) {
                    for (var j = i; j < (i + n); j += 1) {
                        coords[j] = coords[j + 1];
                    }
                    coords[i + n] = movedCoord;
                    _this.setState({
                        coords: coords,
                        currentFocus: i + n
                    });
                }
            }
        };
        _this.focusWaypoint = function (id) {
            var i = _this.state.coords.findIndex(function (coord) { return coord.id === id; });
            if (i >= 0)
                _this.setState({
                    currentFocus: i
                });
        };
        _this.defocusWaypoint = function () {
            _this.setState({
                currentFocus: -1
            });
        };
        _this.changeTabs = function (i) {
            _this.setState({
                activeTab: i
            });
        };
        _this.Tabs = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        _this.state = {
            currentFocus: -1,
            coords: [{ 'ref': React.createRef(), 'id': 0, 'lat': 0, 'lng': 0, 'yPos': 0 }],
            nextId: 1,
            activeTab: 0,
        };
        return _this;
    }
    LocationPage.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'createItemPage locationsPage' },
            React.createElement("div", { className: 'topBar' },
                React.createElement("span", null, "ADD LOCATION/S"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'creationButton' }, "UPLOAD GPS FILE")),
            React.createElement("div", { className: 'mapAndListContainer' },
                React.createElement("div", { className: 'mapContainer' },
                    React.createElement(google_map_react_1.default, { bootstrapURLKeys: { key: 'AIzaSyDqIVtQawOQ0DqWTSP3LG60nVhGJvsdSHk' }, defaultZoom: 5, defaultCenter: { lat: 0, lng: 0 } }, this.state.coords.map(function (coord, i) {
                        return ((i === _this.state.currentFocus) ?
                            React.createElement("svg", { className: 'centerActiveWaypoint', width: '25', height: '35', lat: coord.lat, lng: coord.lng, key: "waypoint" + coord.id + "focus" },
                                React.createElement("polygon", { points: "0,12.5 12.5,35 25,12.5", style: { fill: Constant.MAIN_COLOUR, strokeWidth: '0' } }),
                                React.createElement("circle", { cx: '12.5', cy: '12.5', r: '10.5', stroke: Constant.MAIN_COLOUR, strokeWidth: '4', fill: Constant.TERTIARY_COLOUR }))
                            :
                                React.createElement("svg", { className: 'centerWaypoint', width: '15', height: '22', lat: coord.lat, lng: coord.lng, key: "waypoint" + coord.id },
                                    React.createElement("circle", { cx: '7.5', cy: '7.5', r: '7.5', strokeWidth: '0', fill: Constant.MAIN_COLOUR }),
                                    React.createElement("polygon", { points: "0,7.5 7.5,22 15,7.5", style: { fill: Constant.MAIN_COLOUR, strokeWidth: '0' } })));
                    }))),
                React.createElement("div", { className: 'coordListContainer' },
                    React.createElement("div", { className: 'coordListTabs' },
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 0 ? 'coordListTab active' : 'coordListTab', onClick: function () { return _this.changeTabs(0); } }, "POINTS"),
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 1 ? 'coordListTab center active' : 'coordListTab center', onClick: function () { return _this.changeTabs(1); } }, "PATH"),
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 2 ? 'coordListTab active' : 'coordListTab', onClick: function () { return _this.changeTabs(2); } }, "AREA")),
                    React.createElement("div", { className: 'coordList' },
                        React.createElement("div", { className: 'dragContainer' }, this.state.coords.map(function (coord, i) {
                            return (React.createElement(CoordinateBox, { ref: coord.ref, arrayId: coord.id, remove: _this.removeCoord, updateLatLong: _this.updateLatLng, onStart: _this.onStart, onDrag: _this.onDrag, onStop: _this.onStop, yPos: coord.yPos, key: 'coord' + coord.id, activateWaypoint: _this.focusWaypoint, deactivateWaypoint: _this.defocusWaypoint }));
                        })),
                        React.createElement("div", { className: 'addCoordButton', onClick: this.addCoord }, "+"),
                        React.createElement("div", { className: 'fillerBox' }))))));
    };
    return LocationPage;
}(React.Component));
var CreateItem = /** @class */ (function (_super) {
    __extends(CreateItem, _super);
    function CreateItem(props) {
        var _this = _super.call(this, props) || this;
        _this.focusAreas = ['sci', 'art', 'act'];
        _this.setMainFocus = function (index) {
            //console.log("mainFocus Before: ", this.mainFocus);
            _this.mainFocus = _this.focusAreas[index];
            //console.log("mainFocus After: ", this.mainFocus);
        };
        _this.formNumbers = [1, 2, 3, 4];
        _this.formPages = _this.formNumbers.map(function (i) {
            switch (i) {
                //Details
                case 1:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: '1' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(DetailsPage, null))));
                //Category & Tags
                case 2:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: '2' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(CategoryAndTagsPage, { setMainFocus: _this.setMainFocus }))));
                //Regions & Legal
                case 3:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: '3' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(RegionAndLegalPage, null))));
                //Location/s
                case 4:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: '4' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(LocationPage, null))));
            }
        });
        _this.next = function () {
            if (_this.state.animating)
                return;
            var nextIndex = ((_this.state.activeIndex + 1) > (_this.formNumbers.length - 1)) ? (_this.formNumbers.length - 1) : (_this.state.activeIndex + 1);
            _this.setState({ activeIndex: nextIndex });
        };
        _this.prev = function () {
            if (_this.state.animating)
                return;
            var nextIndex = (_this.state.activeIndex - 1) < 0 ? 0 : (_this.state.activeIndex - 1);
            _this.setState({ activeIndex: nextIndex });
        };
        _this.goToIndex = function (newIndex) {
            _this.setState({ activeIndex: newIndex });
        };
        _this.state = {
            activeIndex: 0,
            animating: false
        };
        var mainFocus;
        return _this;
    }
    CreateItem.prototype.render = function () {
        this.mainFocus = this.focusAreas[0];
        return (React.createElement(reactstrap_1.Form, { className: 'creationContainer' },
            React.createElement("div", { className: 'creationHeader' },
                "Create Item",
                React.createElement(reactstrap_1.CarouselIndicators, { items: this.formPages, activeIndex: this.state.activeIndex, onClickHandler: this.goToIndex })),
            React.createElement(reactstrap_1.Carousel, { pause: false, interval: false, activeIndex: this.state.activeIndex, next: this.next, previous: this.prev }, this.formPages),
            React.createElement("div", { className: 'creationFooter' },
                React.createElement("div", { className: 'creationButton', onClick: this.prev }, "BACK"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'creationButton', style: { marginRight: '16px' } }, "SAVE DRAFT"),
                React.createElement("div", { className: 'creationButton callToAction', onClick: this.next }, "NEXT"))));
    };
    return CreateItem;
}(React.Component));
exports.default = CreateItem;
//# sourceMappingURL=createItem.js.map