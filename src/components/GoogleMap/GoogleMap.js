import React, { Component } from "react";
import Script from "react-load-script";
import Spinner from "../common/Spinner";
import MapContent from "./MapContent";
import PropTypes from "prop-types";

export default class GoogleMap extends Component {
  state = {
    scriptLoaded: false,
    latitude: this.props.latitude,
    longitude: this.props.longitude,
    coords: {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    }
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleScriptLoad = () => this.setState({ scriptLoaded: true });

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      coords: {
        latitude: Number(this.state.latitude),
        longitude: Number(this.state.longitude)
      }
    });
  };

  render() {
    const {
      googleMapKey,
      mapWidth,
      mapHeight,
      enableSearch,
      enableInfoWindow,
      enableMarker,
      addressName,
      addressDetails,
      zoomLevel
    } = this.props;
    const { coords, scriptLoaded, latitude, longitude } = this.state;
    return (
      <div>
        <div
          style={{
            width: mapWidth,
            height: mapHeight,
            border: "1px solid rgba(0,0,0,0.4)"
          }}
        >
          <Script
            url={`https://maps.googleapis.com/maps/api/js?key=${googleMapKey}&libraries=places`}
            onLoad={this.handleScriptLoad}
          />
          {scriptLoaded ? (
            <MapContent
              latitude={coords.latitude}
              longitude={coords.longitude}
              enableInfoWindow={enableInfoWindow}
              enableMarker={enableMarker}
              addressDetails={addressDetails}
              addressName={addressName}
              zoomLevel={zoomLevel}
            />
          ) : (
            <Spinner />
          )}
        </div>
        {enableSearch ? (
          <form
            style={{ width: mapWidth, marginTop: 20 }}
            className="form-inline "
            onSubmit={this.handleSubmit}
          >
            <div className="form-group" style={{ marginRight: 10 }}>
              <label htmlFor="email">Latitude:</label>
              <input
                type="number"
                className="form-control"
                id="email"
                name="latitude"
                value={latitude}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group" style={{ marginRight: 10 }}>
              <label htmlFor="pwd">Longitude:</label>
              <input
                type="number"
                className="form-control"
                id="pwd"
                name="longitude"
                value={longitude}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

GoogleMap.propTypes = {
  googleMapKey: PropTypes.string.isRequired,
  mapWidth: PropTypes.number,
  mapHeight: PropTypes.number,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  enableSearch: PropTypes.bool,
  enableMarker: PropTypes.bool,
  enableInfoWindow: PropTypes.bool,
  addressName: PropTypes.string,
  addressDetails: PropTypes.string,
  zoomLevel: PropTypes.number
};
GoogleMap.defaultProps = {
  mapWidth: 400,
  mapHeight: 300,
  latitude: 43.8474,
  longitude: -79.402055,
  enableSearch: false,
  enableMarker: true,
  enableInfoWindow: false,
  addressName: "Michael's home",
  addressDetails: "63 Queens College Drive, Richmond Hill, ON",
  zoomLevel: 17
};
