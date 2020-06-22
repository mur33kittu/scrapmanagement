import React, {Component} from 'react';
import {Marker, GoogleApiWrapper, InfoWindow, Map} from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
  position: 'absolute',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  componentDidMount() {
    this.latLong = this.props.contacts.map(({lat, lng}) => ({lat, lng}));
    this.bounds = new this.props.google.maps.LatLngBounds();
    this.bounds.extend(...this.latLong);
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={{
          lat: 22.97,
          lng: 77.86,
        }}
        bounds={this.bounds}
      >
        {this.props.contacts.map((contact, i) => (
          <Marker
            title={contact.name}
            name={contact.name}
            position={{lat: contact.lat, lng: contact.lng}}
            onClick={this.onMarkerClick}
            key={i}
          >
            <InfoWindow
              marker={this.state.activeMarker}
              onOpen={this.windowHasOpened}
              onClose={this.windowHasClosed}
              visible={this.state.showingInfoWindow}
              key={i}
            >
              {contact.title}
            </InfoWindow>
          </Marker>
        ))}
      </Map>
    );
  }
}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
  LoadingContainer: LoadingContainer,
})(MapContainer);
