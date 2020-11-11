import "../styles/styles.css";

declare var require: any

var React = require('react');

import GoogleMapReact from 'google-map-react';
import MediaQuery from 'react-responsive';

import * as Constant from '../constants';

class GoToLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: { lat: 0, lng: 0 }
        };
    }

    changeLat = (e) => {
        var location = this.state.location;
        var lat = parseFloat(e.target.value);
        if (lat > Constant.LAT_BOUNDS.MAX) {
            lat = Constant.LAT_BOUNDS.MAX;
        } else if (lat < Constant.LAT_BOUNDS.MIN) {
            lat = Constant.LAT_BOUNDS.MIN;
        }

        location.lat = lat;

        this.setState({
            location: location
        });
    }

    changeLng = (e) => {
        var location = this.state.location;
        var lng = parseFloat(e.target.value);
        if (lng > Constant.LNG_BOUNDS.MAX) {
            lng = Constant.LNG_BOUNDS.MAX;
        } else if (lng < Constant.LNG_BOUNDS.MIN) {
            lng = Constant.LNG_BOUNDS.MIN;
        }

        location.lng = lng;

        this.setState({
            location: location
        });
    }

    goToLocation = (e) => {
        e.preventDefault();
        this.props.goToLocationFunc(this.state.location);
    }

    render() {
        return (
            <div>
                <form style={{ display: 'flex', height: '50px' }} onSubmit={(e) => this.goToLocation(e)}>
                    <div className='goToLocLabels noselect'>Lat</div>
                    <input type='number' name='lat' value={this.state.location.lat} className='goToLocSearch' onChange={(e) => this.changeLat(e)} />
                    <div className='goToLocLabels noselect'>Long</div>
                    <input type='number' name='lng' value={this.state.location.lng} className='goToLocSearch' onChange={(e) => this.changeLng(e)} />
                    <input type='submit' value='GO' className='goToLocButton' />
                </form>
            </div>
        );
    }
}

class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={this.props.isMobile ? 'mapLocationInfo mobile' : 'mapLocationInfo'}
                onMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut}
                style={this.props.isFocus ? { backgroundColor: Constant.SECONDARY_COLOUR } : null}
                onClick={() => this.props.panToFunc(this.props.location)}
            >
                <img src={this.props.src} alt={this.props.title + " thumbnail"} />
                <div style={{ flex: '0 0 auto' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '95px' }}>
                        <h2 className={this.props.isMobile ? 'listTitle mobile' : 'listTitle'}>{this.props.title}</h2>
                        <p className={this.props.isMobile ? 'listDesc mobile' : 'listDesc'}>{this.props.desc}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const testLocations = [
    { title: 'Pacific Ocean Garbage Patch', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2490/4214811049_1264c95738_b.jpg', location: { lat: -31.578535, lng: 155.768928 } },
    { title: 'The Various Shark Species', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/194/463483080_828f04aba3_b.jpg', location: { lat: -33.078535, lng: 153.768928 } },
    { title: 'Under The Ocean: Life with Turtles', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2534/32899940111_6d3f8956d7_b.jpg', location: { lat: -35.376585, lng: 154.066928 } },
    { title: 'Fish in the Ocean', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/2736/4098744853_0c65ccb710_b.jpg', location: { lat: -32.578535, lng: 155.468928 } },
    { title: 'Ocean Waves', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/7309/9787099472_f24d4766e5_b.jpg', location: { lat: -36.578535, lng: 153.962948 } },
    { title: 'Sharks Electromagnetic Sense', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6018/5951373622_3146ed0aab_b.jpg', location: { lat: -33.674515, lng: 154.566938 } },
    { title: 'Coral Research', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/1688/26104103086_766619aeb8_b.jpg', location: { lat: -32.978535, lng: 154.863936 } },
    { title: 'Plastic Island', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3182/2785503884_8b0b76f781_b.jpg', location: { lat: -33.578535, lng: 153.762128 } },
    { title: 'Sunset Shore', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/65535/49112821866_f88763e374_b.jpg', location: { lat: -35.578535, lng: 156.763228 } },
    { title: 'Deep Ocean Mining', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/6178/6207340169_32c7846a32_b.jpg', location: { lat: -33.578535, lng: 154.328928 } },
    { title: 'Oil Pollution', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://farm9.staticflickr.com/8746/17022954452_3c3fefafe0_b.jpg', location: { lat: -32.578535, lng: 153.218928 } },
    { title: 'Deep Ocean Life', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/5463/8880188144_f2e22d06c1.jpg', location: { lat: -30.578535, lng: 154.128928 } },
    { title: 'Whale Spotting', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/32/49470279_74b8873c7c_b.jpg', location: { lat: -31.578535, lng: 152.878928 } },
    { title: 'Octopus Learning Habits', desc: 'Some description He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.', src: 'https://live.staticflickr.com/3463/3306513983_f8269902ee_b.jpg', location: { lat: -32.578535, lng: 154.128928 } }
]

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = null;
        this.state = {
            currentFocus: -1
        }
    }

    goToLocation = (location) => {
        console.log('Location', location);
        if (this.map != null && this.map != undefined)
            this.map.panTo(location);
    }

    setCurrentFocus = (i) => {
        this.setState({
            currentFocus: i
        });
    }

    render() {
        return (
            <div style={{ flex: '1' }}>
                <MediaQuery minDeviceWidth={1224}>
                    <div className="mapSection">
                        <div className='mapSideBar'>
                            <GoToLocation goToLocationFunc={this.goToLocation} />
                            <div className='scrollableList'>
                                {testLocations.map((location, i) => {
                                    return (
                                        <Location
                                            isMobile={false}
                                            title={location.title}
                                            desc={location.desc}
                                            src={location.src}
                                            location={location.location}
                                            key={'location' + i}
                                            onMouseOver={() => this.setCurrentFocus(i)}
                                            onMouseOut={() => this.setCurrentFocus(-1)}
                                            isFocus={this.state.currentFocus === i ? true : false}
                                            panToFunc={this.goToLocation}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                        <div className='mapContainer'>
                            <GoogleMapReact ref='mapRef'
                                onGoogleApiLoaded={({ map, maps }) => { this.map = map }}
                                yesIWantToUseGoogleMapApiInternals
                                bootstrapURLKeys={{ key: 'AIzaSyBB19hnVYvdWOemDURUEXthK-TqL_TVeFM' }}
                                defaultZoom={8}
                                defaultCenter={{ lat: -32.578535, lng: 154.128928 }}
                                options={{ fullscreenControl: false }} >
                                {testLocations.map((data, i) => {
                                    return (
                                        (i === this.state.currentFocus) ?
                                            <svg className='centerActiveWaypoint' width='25' height='35' lat={data.location.lat} lng={data.location.lng} key={"waypoint" + i + "focus"}
                                                onMouseOver={() => this.setCurrentFocus(i)}
                                                onMouseOut={() => this.setCurrentFocus(-1)}>
                                                <polygon points="0,12.5 12.5,35 25,12.5" style={{ fill: Constant.MAIN_COLOUR, strokeWidth: '0' }} />
                                                <circle cx='12.5' cy='12.5' r='10.5' stroke={Constant.MAIN_COLOUR} strokeWidth='4' fill={Constant.TERTIARY_COLOUR} />
                                            </svg>
                                            :
                                            <svg className='centerWaypoint' width='15' height='22' lat={data.location.lat} lng={data.location.lng} key={"waypoint" + i}
                                                onMouseOver={() => this.setCurrentFocus(i)}
                                                onMouseOut={() => this.setCurrentFocus(-1)}>
                                                <circle cx='7.5' cy='7.5' r='7.5' strokeWidth='0' fill={Constant.MAIN_COLOUR} />
                                                <polygon points="0,7.5 7.5,22 15,7.5" style={{ fill: Constant.MAIN_COLOUR, strokeWidth: '0' }} />
                                            </svg>
                                    );
                                })}
                            </GoogleMapReact>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1223}>
                    <div className="mapSection mobile">
                        <div className='mapContainer mobile'>
                            <GoogleMapReact ref='mapRef'
                                onGoogleApiLoaded={({ map, maps }) => { this.map = map }}
                                yesIWantToUseGoogleMapApiInternals
                                bootstrapURLKeys={{ key: 'AIzaSyBB19hnVYvdWOemDURUEXthK-TqL_TVeFM' }}
                                defaultZoom={8}
                                defaultCenter={{ lat: -32.578535, lng: 154.128928 }}
                                options={{ fullscreenControl: false }}>
                                {testLocations.map((data, i) => {
                                    return (
                                        (i === this.state.currentFocus) ?
                                            <svg className='centerActiveWaypoint' width='25' height='35' lat={data.location.lat} lng={data.location.lng} key={"waypoint" + i + "focus"}>
                                                <polygon points="0,12.5 12.5,35 25,12.5" style={{ fill: Constant.MAIN_COLOUR, strokeWidth: '0' }} />
                                                <circle cx='12.5' cy='12.5' r='10.5' stroke={Constant.MAIN_COLOUR} strokeWidth='4' fill={Constant.TERTIARY_COLOUR} />
                                            </svg>
                                            :
                                            <svg className='centerWaypoint' width='15' height='22' lat={data.location.lat} lng={data.location.lng} key={"waypoint" + i}>
                                                <circle cx='7.5' cy='7.5' r='7.5' strokeWidth='0' fill={Constant.MAIN_COLOUR} />
                                                <polygon points="0,7.5 7.5,22 15,7.5" style={{ fill: Constant.MAIN_COLOUR, strokeWidth: '0' }} />
                                            </svg>
                                    );
                                })}
                            </GoogleMapReact>
                        </div>
                        <div className='mapSideBar mobile'>
                            <GoToLocation goToLocationFunc={this.goToLocation} />
                            <div className='scrollableList'>
                                {testLocations.map((location, i) => {
                                    return (
                                        <Location
                                            isMobile={true}
                                            title={location.title}
                                            desc={location.desc}
                                            src={location.src}
                                            location={location.location}
                                            key={'location' + i}
                                            onMouseOver={() => this.setCurrentFocus(i)}
                                            onMouseOut={() => this.setCurrentFocus(-1)}
                                            isFocus={this.state.currentFocus === i ? true : false}
                                            panToFunc={this.goToLocation}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        );
    }
}
