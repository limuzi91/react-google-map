import React, { Component } from "react";

// const google = window.google;

class MapContent extends Component {
  addMarker = () => {
    this.marker = new window.google.maps.Marker({
      position: { lat: this.props.latitude, lng: this.props.longitude },
      map: this.map
    });

    if (this.props.enableInfoWindow) {
      this.addInfoWindow(this.props.addressName, this.props.addressDetails);
    }
  };

  addInfoWindow = (addressName, addressDetails) => {
    var contentString = `
    <div id="content">
    <h1 id="firstHeading" class="text-center firstHeading">${addressName}</h1> 
    <div id="bodyContent"> 
    <p>${addressDetails}</p>
    <p>Attribution: Uluru, <a target = "_blank" href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194"> 
    https://en.wikipedia.org/w/index.php?title=Uluru</a> 
    </div>
    </div> 
`;

    this.infoWindow = new window.google.maps.InfoWindow({
      content: contentString
    });
    this.listener1 = this.marker.addListener("click", () => {
      this.infoWindow.open(this.map, this.marker);
    });
  };

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapElement, {
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: this.props.zoomLevel
    });

    if (this.props.enableMarker) {
      this.addMarker();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({
      lat: nextProps.latitude,
      lng: nextProps.longitude
    });

    if (!nextProps.enableMarker) {
      this.marker.setMap(null);
    }

    if (nextProps.enableMarker) {
      this.marker.setMap(this.map);
    }
    if (!nextProps.enableInfoWindow) {
      //   window.google.maps.event.removeListener(this.listener1);
      window.google.maps.event.clearListeners(this.marker, "click");

      console.log(this.listener1);
      console.log(!nextProps.enableInfoWindow);
    }
    if (nextProps.enableInfoWindow) {
      this.listener1 = this.marker.addListener("click", () => {
        this.infoWindow.open(this.map, this.marker);
      });
    }

    if (nextProps.addressName !== this.props.addressName) {
      this.addInfoWindow(nextProps.addressName, this.props.addressDetails);
    }
    if (nextProps.addressDetails !== this.props.addressDetails) {
      this.addInfoWindow(this.props.addressName, nextProps.addressDetails);
    }
    if (nextProps.zoomLevel !== this.props.zoomLevel) {
      //   this.map = new window.google.maps.Map(this.mapElement, {
      //     center: { lat: this.props.latitude, lng: this.props.longitude },
      //     zoom: nextProps.zoomLevel
      //   });
      this.map.setZoom(nextProps.zoomLevel);
    }
  }

  render() {
    return (
      <div
        className="map"
        style={{ width: "100%", height: "100%" }}
        ref={mapRef => {
          this.mapElement = mapRef;
        }}
      />
    );
  }
}

export default MapContent;
