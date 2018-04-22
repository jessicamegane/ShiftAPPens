import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    componentDidMount() {
        fetch("http://127.0.0.1:8080/api",
        {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lib: "offers",
                action: "find",
                data: {
                    key: {}
                }
            })
        })
        .then(res => res.json())
        .then(res => res.map(e => {
            return {
                coordenadas : {
                    lat: e.coordenadas.x,
                    lng: e.coordenadas.y,
                }
            }
        }))
        .then(res => res.map((e, i) => (
            <Marker
                pinColor={"blue"}
                position={e.coordenadas}
                key={i}
            />
        )))
        .then(res => {
            this.setState({
                offers: res
            });
        }).then(console.log);
    }

    constructor() {
        super();
        this.state = {
            offers: []
        }
    }

    render() {
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
                {this.state.offers}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCjEHxkHLXdy4BXjngWKIl0FcSTXgkrZF8'
})(MapContainer)

