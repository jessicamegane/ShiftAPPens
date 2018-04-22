import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

var api = require('./api');

export class MapContainer extends React.Component {

    renderOffers(res) {
        try {
            res = res.json().map(e => {
                return {
                    coordenadas : {
                        lat: e.coordenadas.x,
                        lng: e.coordenadas.y,
                    }
                }
            });
            this.setState({
                offers: res
            })
        } catch (err) {
            return err;
        }
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

    constructor() {
        super();
        this.state = {
            offers: []
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
                {this.state.offers.map(e => (
                    <Marker
                        pinColor={"blue"}
                        position={e.coordenadas}
                    />
                ))}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCjEHxkHLXdy4BXjngWKIl0FcSTXgkrZF8'
})(MapContainer)

