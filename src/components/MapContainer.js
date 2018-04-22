import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var api = require('./api');

export class MapContainer extends React.Component {

    renderOffers(res) {
    }

    async getOffers(key) {
        try {
            api.fetch_api(true, {
                lib: "offers",
                action: "find",
                data: {
                    key: key
                }
            }, this.renderOffers);
        } catch (err) {
            return err;
        }
    }

    render() {
        this.getOffers({});
        return (
            <Map google={this.props.google}
            zoom={14}
            initialCenter={{ // Shift
                lat: 40.205394,
                lng: -8.4101627
            }}
            style={{
                height: "100vh",
                width: "100vw",
                position: "relative"
            }}
            >
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            </Map>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCjEHxkHLXdy4BXjngWKIl0FcSTXgkrZF8'
})(MapContainer)

