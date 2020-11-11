"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require('react');
var ReactDOM = require('react-dom');
const Constant = require("../constants");
const reactstrap_1 = require("reactstrap");
const react_select_1 = require("react-select");
const google_map_react_1 = require("google-map-react");
let Draggable = require('react-draggable');
class DetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.validate = () => {
            console.log('Validate Details');
            var pageValid = true;
            var errors = this.state.errors;
            if (this.state.values.title.length <= 0)
                errors.title = true;
            if (errors.title || errors.desc || errors.creator || errors.dateStart || errors.dateFinish || errors.url || errors.lang)
                pageValid = false;
            return pageValid;
        };
        this.validateTitle = (e) => {
            var error = false;
            if (e.target.value.length <= 0)
                error = true;
            var errors = this.state.errors;
            errors.title = error;
            var values = this.state.values;
            values.title = e.target.value;
            this.setState({ errors: errors, values: values });
        };
        this.state = {
            errors: {
                title: false,
                desc: false,
                creator: false,
                dateStart: false,
                dateFinish: false,
                url: false,
                lang: false
            },
            values: {
                title: '',
                desc: '',
                creator: [],
                dateStart: '',
                dateFinish: '',
                url: '',
                lang: ''
            }
        };
    }
    render() {
        return (React.createElement("div", { className: 'createItemPage' },
            React.createElement("div", { className: 'dragAndDrop' }, "DRAG & DROP OR CLICK TO UPLOAD FILE"),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'title' }, "Title"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'title', id: 'title', value: this.state.values.title, required: true, invalid: this.state.errors.title, onChange: (e) => this.validateTitle(e) }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.title }, "Title Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'desc' }, "Description"),
                React.createElement(reactstrap_1.Input, { type: 'textarea', name: 'desc', id: 'desc', value: this.state.values.desc, required: true, invalid: this.state.errors.desc }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.desc }, "Desc Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'creator' }, "Creator(s) / Author(s)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'creator', id: 'creator', value: this.state.values.creator, required: true, invalid: this.state.errors.creator }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.creator }, "Creator Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'dateStart' }, "Date Started/Made"),
                React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateStart', id: 'dateStart', value: this.state.values.dateStart, required: true, invalid: this.state.errors.dateStart }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.dateStart }, "Date Start Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'dateFinish' }, "Date Finished (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'date', name: 'dateFinish', id: 'dateFinish', value: this.state.values.dateFinish, invalid: this.state.errors.dateFinish }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.dateFinish }, "Date Finish Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'url' }, "URL (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'url', name: 'url', id: 'url', value: this.state.values.url, invalid: this.state.errors.url }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.url }, "URL Error")),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'lang' }, "Language (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'lang', id: 'lang', value: this.state.values.lang, invalid: this.state.errors.lang }),
                React.createElement(reactstrap_1.FormFeedback, { valid: !this.state.errors.lang }, "Language Error"))));
    }
}
class CategoryAndTagsPage extends React.Component {
    constructor(props) {
        super(props);
        this.setMainFocus = (index) => {
            if (index != this.state.activeFocus) {
                this.props.setMainFocus(index);
                this.setState({
                    activeFocus: index
                });
                //console.log(index, " checked ", this.checkBoxes[index].current.checked);
                this.checkBoxes[index].current.checked = false;
            }
        };
        this.validate = () => {
            console.log('Validate Cats & Tags');
            var pageValid = true;
            return pageValid;
        };
        this.state = {
            activeFocus: 0
        };
        this.checkBoxes = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
    }
    render() {
        return (React.createElement("div", { className: 'createItemPage' },
            "Categories",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'focusMain' }, "Main Focus Area"),
                React.createElement("input", { type: 'hidden', name: 'focusMain', value: this.mainFocus }),
                React.createElement(reactstrap_1.ButtonGroup, { className: 'mainFocus' },
                    React.createElement(reactstrap_1.Button, { className: 'left', type: 'button', style: {
                            backgroundColor: this.state.activeFocus == 0 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR
                        }, onClick: () => this.setMainFocus(0) }, "Science & Tech"),
                    React.createElement(reactstrap_1.Button, { type: 'button', style: { backgroundColor: this.state.activeFocus == 1 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: () => this.setMainFocus(1) }, "Art"),
                    React.createElement(reactstrap_1.Button, { className: 'right', type: 'button', style: { backgroundColor: this.state.activeFocus == 2 ? Constant.SECONDARY_COLOUR : Constant.MAIN_COLOUR }, onClick: () => this.setMainFocus(2) }, "Activism"))),
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
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.cat, value: Constant.cat.value })),
            React.createElement("div", { style: { height: '24px' } }),
            "Tags",
            React.createElement("hr", null),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'concept' }, "Concept"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'concept' })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'keyword' }, "Keywords (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'select', name: 'keyword' }))));
    }
}
class RegionAndLegalPage extends React.Component {
    constructor(props) {
        super(props);
        this.validate = () => {
            console.log('Validate Region & Legal');
            var pageValid = true;
            return pageValid;
        };
    }
    render() {
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
                React.createElement(react_select_1.default, { className: 'react-select-contianer', classNamePrefix: 'react-select', options: Constant.license, value: Constant.license.value })),
            React.createElement(reactstrap_1.FormGroup, null,
                React.createElement(reactstrap_1.Label, { for: 'copyr' }, "Copyright Owner (optional)"),
                React.createElement(reactstrap_1.Input, { type: 'text', name: 'copyr' }))));
    }
}
class CoordinateBox extends React.Component {
    constructor(props) {
        super(props);
        this.inFocus = () => {
            this.setState({
                isFocused: true
            });
            this.props.activateWaypoint(this.state.id);
        };
        this.outFocus = () => {
            this.setState({
                isFocused: false
            });
            this.props.deactivateWaypoint();
        };
        this.updateLat = (e) => {
            var f = parseFloat(e.target.value);
            this.setState({ lat: f });
            this.props.updateLatLong(this.state.id, f, this.state.lng);
        };
        this.updateLng = (e) => {
            var f = parseFloat(e.target.value);
            this.setState({ lng: f });
            this.props.updateLatLong(this.state.id, this.state.lat, f);
        };
        this.remove = () => {
            this.props.remove(this.state.id);
        };
        this.onStart = () => {
            this.props.onStart(this.state.id);
        };
        this.onDrag = (e, ui) => {
            this.props.onDrag(this.state.id, ui.y);
        };
        this.onStop = (e, ui) => {
            this.props.onStop(this.state.id, ui.y);
        };
        this.updateYpos = (newY) => {
            this.setState({
                position: { x: 0, y: newY }
            });
        };
        this.centerMap = () => {
            this.props.centerMap(this.state.lat, this.state.lng);
        };
        this.state = {
            isFocused: false,
            lat: 0,
            lng: 0,
            id: this.props.arrayId,
            position: { x: 0, y: this.props.yPos }
        };
        //console.log('props: ', props);
    }
    render() {
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
                    React.createElement("div", { tabIndex: this.state.isFocused ? '0' : '-1', className: 'coordButton centerHere', onClick: this.centerMap },
                        React.createElement("svg", { width: '50', height: '50' },
                            React.createElement("line", { x1: '25', y1: '5', x2: '25', y2: '10', style: { stroke: '#333333', strokeWidth: '4', strokeLinecap: 'round' } }),
                            React.createElement("line", { x1: '5', y1: '25', x2: '10', y2: '25', style: { stroke: '#333333', strokeWidth: '4', strokeLinecap: 'round' } }),
                            React.createElement("line", { x1: '25', y1: '40', x2: '25', y2: '45', style: { stroke: '#333333', strokeWidth: '4', strokeLinecap: 'round' } }),
                            React.createElement("line", { x1: '40', y1: '25', x2: '45', y2: '25', style: { stroke: '#333333', strokeWidth: '4', strokeLinecap: 'round' } }),
                            React.createElement("circle", { cx: '25', cy: '25', r: '15', style: { stroke: '#333333', strokeWidth: '4', fill: 'none' } }),
                            React.createElement("circle", { cx: '25', cy: '25', r: '7.5', style: { stroke: '#333333', strokeWidth: '4', fill: '#333333' } }))),
                    React.createElement("div", { tabIndex: this.state.isFocused ? '0' : '-1', className: 'coordButton delete', onClick: this.remove },
                        React.createElement("svg", { width: '50', height: '50' },
                            React.createElement("line", { x1: '10', y1: '10', x2: '40', y2: '40', style: { stroke: '#ffffff', strokeWidth: '4', strokeLinecap: 'round' } }),
                            React.createElement("line", { x1: '40', y1: '10', x2: '10', y2: '40', style: { stroke: '#ffffff', strokeWidth: '4', strokeLinecap: 'round' } })))))));
    }
}
const HEIGHT = 60;
class LocationPage extends React.Component {
    constructor(props) {
        super(props);
        this.validate = () => {
            console.log('Validate Locations');
            var pageValid = true;
            return pageValid;
        };
        this.addCoord = () => {
            this.state.coords.push({ 'ref': React.createRef(), 'id': this.state.nextId, 'lat': 0, 'lng': 0, 'yPos': 0 });
            this.setState({
                coords: this.state.coords,
                nextId: this.state.nextId + 1
            });
            if (this.poly != null)
                this.poly.setPath(this.getLatLngs());
        };
        this.removeCoord = (id) => {
            //console.log("remove id: ", id);
            var i = this.state.coords.findIndex(coord => coord.id === id);
            //console.log("remove i: ", i);
            if (i >= 0) {
                this.state.coords.splice(i, 1);
                this.setState({
                    coords: this.state.coords,
                });
                //console.log(this.state.coords);
            }
        };
        this.updateLatLng = (id, newLat, newLng) => {
            var i = this.state.coords.findIndex(coord => coord.id === id);
            if (i >= 0) {
                this.state.coords[i].lat = newLat;
                this.state.coords[i].lng = newLng;
                this.setState({
                    coords: this.state.coords,
                });
                if (this.poly != null)
                    this.poly.setPath(this.getLatLngs());
            }
        };
        this.onStart = (id) => {
            //var i = this.state.coords.findIndex(coord => coord.id === id);
            //if (i >= 0)
            //console.log('onStart yPos: ', this.state.coords[i].yPos);
        };
        this.onDrag = (id, y) => {
            var i = this.state.coords.findIndex(coord => coord.id === id);
            if (i >= 0) {
                //console.log('onDrag y: ', y);
                var n = Math.floor((y + HEIGHT / 2) / HEIGHT);
                //console.log('n: ', n);
                if (n < 0) {
                    for (var j = 0; j < this.state.coords.length; j += 1) {
                        if (j != i) {
                            var k = j - i;
                            if (k < 0 && k >= n)
                                this.state.coords[j].ref.current.updateYpos(HEIGHT);
                            else
                                this.state.coords[j].ref.current.updateYpos(0);
                        }
                    }
                }
                else if (n > 0) {
                    for (var j = 0; j < this.state.coords.length; j += 1) {
                        if (j != i) {
                            var k = j - i;
                            if (k >= 0 && k <= n)
                                this.state.coords[j].ref.current.updateYpos(-HEIGHT);
                            else
                                this.state.coords[j].ref.current.updateYpos(0);
                        }
                    }
                }
                else {
                    for (var j = 0; j < this.state.coords.length; j += 1)
                        if (j != i)
                            this.state.coords[j].ref.current.updateYpos(0);
                }
            }
        };
        this.onStop = (id, y) => {
            var i = this.state.coords.findIndex(coord => coord.id === id);
            if (i >= 0) {
                //console.log('onStop y: ', y);
                for (var j = 0; j < this.state.coords.length; j += 1)
                    if (j != i)
                        this.state.coords[j].ref.current.updateYpos(0);
                var n = Math.floor((y + HEIGHT / 2) / HEIGHT);
                var coords = this.state.coords;
                var movedCoord = this.state.coords[i];
                if (n < 0) {
                    for (var j = i; j > (i + n); j -= 1) {
                        coords[j] = coords[j - 1];
                    }
                    coords[i + n] = movedCoord;
                    this.setState({
                        coords: coords,
                        currentFocus: i + n
                    });
                }
                else if (n > 0) {
                    for (var j = i; j < (i + n); j += 1) {
                        coords[j] = coords[j + 1];
                    }
                    coords[i + n] = movedCoord;
                    this.setState({
                        coords: coords,
                        currentFocus: i + n
                    });
                }
                if (this.poly != null)
                    this.poly.setPath(this.getLatLngs());
            }
        };
        this.focusWaypoint = (id) => {
            var i = this.state.coords.findIndex(coord => coord.id === id);
            if (i >= 0)
                this.setState({
                    currentFocus: i
                });
        };
        this.defocusWaypoint = () => {
            this.setState({
                currentFocus: -1
            });
        };
        this.changeTabs = (i) => {
            this.setState({
                activeTab: i
            });
            if (this.poly != null)
                this.poly.setMap(null);
            this.poly = null;
            if (i == 1) {
                this.poly = new google.maps.Polyline({
                    path: this.getLatLngs(),
                    strokeColor: Constant.MAIN_COLOUR,
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
                this.poly.setMap(this.map);
            }
            else if (i == 2) {
                this.poly = new google.maps.Polygon({
                    paths: this.getLatLngs(),
                    strokeColor: Constant.MAIN_COLOUR,
                    strokeOpacity: 1.0,
                    strokeWeight: 2,
                    fillColor: Constant.TERTIARY_COLOUR,
                    fillOpacity: 0.35
                });
                this.poly.setMap(this.map);
            }
        };
        this.getLatLngs = () => {
            var path = [];
            for (var i = 0; i < this.state.coords.length; i += 1)
                path.push({ 'lat': this.state.coords[i].lat, 'lng': this.state.coords[i].lng });
            return path;
        };
        this.centerMap = (lat, lng) => {
            this.map.panTo({ lat: lat, lng: lng });
        };
        this.Tabs = [
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        this.map = null;
        this.poly = null;
        this.state = {
            currentFocus: -1,
            coords: [{ 'ref': React.createRef(), 'id': 0, 'lat': 0, 'lng': 0, 'yPos': 0 }],
            nextId: 1,
            activeTab: 0,
        };
    }
    render() {
        return (React.createElement("div", { className: 'createItemPage locationsPage' },
            React.createElement("div", { className: 'topBar' },
                React.createElement("span", null, "ADD LOCATION/S"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'creationButton' }, "UPLOAD GPS FILE")),
            React.createElement("div", { className: 'mapAndListContainer' },
                React.createElement("div", { id: 'map', className: 'mapContainer' },
                    React.createElement(google_map_react_1.default, { ref: 'mapRef', onGoogleApiLoaded: ({ map, maps }) => { this.map = map; }, yesIWantToUseGoogleMapApiInternals: true, bootstrapURLKeys: { key: 'AIzaSyBB19hnVYvdWOemDURUEXthK-TqL_TVeFM' }, defaultZoom: 5, defaultCenter: { lat: 0, lng: 0 }, options: { fullscreenControl: false } }, this.state.coords.map((coord, i) => {
                        return ((i === this.state.currentFocus) ?
                            React.createElement("svg", { ref: "wayRef" + coord.id, className: 'centerActiveWaypoint', width: '25', height: '35', lat: coord.lat, lng: coord.lng, key: "waypoint" + coord.id + "focus" },
                                React.createElement("polygon", { points: "0,12.5 12.5,35 25,12.5", style: { fill: Constant.MAIN_COLOUR, strokeWidth: '0' } }),
                                React.createElement("circle", { cx: '12.5', cy: '12.5', r: '10.5', stroke: Constant.MAIN_COLOUR, strokeWidth: '4', fill: Constant.TERTIARY_COLOUR }))
                            :
                                React.createElement("svg", { ref: "wayRef" + coord.id, className: 'centerWaypoint', width: '15', height: '22', lat: coord.lat, lng: coord.lng, key: "waypoint" + coord.id },
                                    React.createElement("circle", { cx: '7.5', cy: '7.5', r: '7.5', strokeWidth: '0', fill: Constant.MAIN_COLOUR }),
                                    React.createElement("polygon", { points: "0,7.5 7.5,22 15,7.5", style: { fill: Constant.MAIN_COLOUR, strokeWidth: '0' } })));
                    }))),
                React.createElement("div", { className: 'coordListContainer' },
                    React.createElement("div", { className: 'coordListTabs' },
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 0 ? 'coordListTab active' : 'coordListTab', onClick: () => this.changeTabs(0) }, "POINTS"),
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 1 ? 'coordListTab center active' : 'coordListTab center', onClick: () => this.changeTabs(1) }, "PATH"),
                        React.createElement("div", { tabIndex: '0', className: this.state.activeTab == 2 ? 'coordListTab active' : 'coordListTab', onClick: () => this.changeTabs(2) }, "AREA")),
                    React.createElement("div", { className: 'coordList' },
                        React.createElement("div", { className: 'dragContainer' }, this.state.coords.map((coord, i) => {
                            return (React.createElement(CoordinateBox, { ref: coord.ref, arrayId: coord.id, remove: this.removeCoord, updateLatLong: this.updateLatLng, onStart: this.onStart, onDrag: this.onDrag, onStop: this.onStop, yPos: coord.yPos, key: 'coord' + coord.id, activateWaypoint: this.focusWaypoint, deactivateWaypoint: this.defocusWaypoint, centerMap: this.centerMap }));
                        })),
                        React.createElement("div", { className: 'addCoordButton', onClick: this.addCoord },
                            React.createElement("svg", { width: '50', height: '50' },
                                React.createElement("line", { x1: '25', y1: '10', x2: '25', y2: '40', style: { stroke: '#ffffff', strokeWidth: '3', strokeLinecap: 'round' } }),
                                React.createElement("line", { x1: '10', y1: '25', x2: '40', y2: '25', style: { stroke: '#ffffff', strokeWidth: '3', strokeLinecap: 'round' } }))),
                        React.createElement("div", { className: 'fillerBox' }))))));
    }
}
class FormProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };
    }
    render() {
        return (React.createElement("div", { className: 'formProgressBar' }, this.props.progressData.map((data, i) => {
            return (React.createElement("div", { className: 'progressItem', key: 'indicator' + i, onClick: () => this.props.goToIndex(i) },
                i < (this.props.progressData.length - 1) ?
                    React.createElement("hr", { className: i < this.props.activeIndex ? 'progressConnectorLine active' : 'progressConnectorLine' })
                    :
                        React.createElement("div", null),
                React.createElement("div", { className: i <= this.props.activeIndex ? 'progressIndicator active' : 'progressIndicator' }, data.submittable ?
                    React.createElement("div", null)
                    :
                        React.createElement("svg", { width: '50', height: '50' },
                            React.createElement("polygon", { points: "20,10 25,35 30,10", style: { fill: Constant.ERROR_COLOUR, stroke: Constant.ERROR_COLOUR, strokeWidth: '1' } }),
                            React.createElement("circle", { cx: '25', cy: '42.5', r: '3', style: { fill: Constant.ERROR_COLOUR, stroke: Constant.ERROR_COLOUR, strokeWidth: '1' } }))),
                React.createElement("div", null, data.title)));
        })));
    }
}
class CreateItem extends React.Component {
    constructor(props) {
        super(props);
        this.focusAreas = ['sci', 'art', 'act'];
        this.setMainFocus = (index) => {
            //console.log("mainFocus Before: ", this.mainFocus);
            this.mainFocus = this.focusAreas[index];
            //console.log("mainFocus After: ", this.mainFocus);
        };
        this.formNumbers = [1, 2, 3, 4];
        this.pageRefs = [
            React.createRef(),
            React.createRef(),
            React.createRef(),
            React.createRef()
        ];
        this.formPages = this.formNumbers.map((i) => {
            switch (i) {
                //Details
                case 1:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: 'Page1' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(DetailsPage, { ref: this.pageRefs[0] }))));
                //Category & Tags
                case 2:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: 'Page2' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(CategoryAndTagsPage, { ref: this.pageRefs[1], setMainFocus: this.setMainFocus }))));
                //Regions & Legal
                case 3:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: 'Page3' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(RegionAndLegalPage, { ref: this.pageRefs[2] }))));
                //Location/s
                case 4:
                    return (React.createElement(reactstrap_1.CarouselItem, { className: 'creationCarouselItem', key: 'Page4' },
                        React.createElement("div", { className: 'centerCarouselItem' },
                            React.createElement(LocationPage, { ref: this.pageRefs[3] }))));
            }
        });
        this.validatePages = (toPage) => {
            var progressData = this.state.progressData;
            var start, end;
            if (this.state.activeIndex > toPage) {
                start = toPage;
                end = this.state.activeIndex;
            }
            else {
                end = toPage;
                start = this.state.activeIndex;
            }
            for (var i = start; i <= end; i += 1) {
                progressData[i].submittable = this.pageRefs[i].current.validate();
            }
            this.setState({
                progressData: progressData
            });
        };
        this.next = () => {
            if (this.state.animating)
                return;
            var nextIndex = ((this.state.activeIndex + 1) > (this.formNumbers.length - 1)) ? (this.formNumbers.length - 1) : (this.state.activeIndex + 1);
            this.validatePages(this.state.activeIndex);
            this.setState({ activeIndex: nextIndex });
        };
        this.prev = () => {
            if (this.state.animating)
                return;
            var nextIndex = (this.state.activeIndex - 1) < 0 ? 0 : (this.state.activeIndex - 1);
            this.validatePages(this.state.activeIndex);
            this.setState({ activeIndex: nextIndex });
        };
        this.goToIndex = (newIndex) => {
            this.setState({ activeIndex: newIndex });
            this.validatePages(newIndex);
        };
        this.state = {
            activeIndex: 0,
            animating: false,
            progressData: [
                { title: "Details", submittable: true },
                { title: "Category & Tags", submittable: true },
                { title: "Regions & Legal", submittable: true },
                { title: "Location/s", submittable: true }
            ]
        };
        this.mainFocus = 'sci';
    }
    render() {
        this.mainFocus = this.focusAreas[0];
        return (React.createElement(reactstrap_1.Form, { className: 'creationContainer' },
            React.createElement("div", { className: 'creationHeader' },
                "Create Item",
                React.createElement(FormProgressBar, { progressData: this.state.progressData, goToIndex: this.goToIndex, activeIndex: this.state.activeIndex })),
            React.createElement(reactstrap_1.Carousel, { pause: false, interval: false, activeIndex: this.state.activeIndex, next: this.next, previous: this.prev }, this.formPages),
            React.createElement("div", { className: 'creationFooter' },
                React.createElement("div", { className: 'creationButton', onClick: this.prev }, "BACK"),
                React.createElement("div", { className: 'fillerBox' }),
                React.createElement("div", { className: 'creationButton', style: { marginRight: '16px' } }, "SAVE DRAFT"),
                React.createElement("div", { className: 'creationButton callToAction', onClick: this.next }, "NEXT"))));
    }
}
exports.default = CreateItem;
//# sourceMappingURL=createItem.js.map