import React, { Component } from "react";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import keys from "../config/keys";

import Radio from "antd/lib/radio";
const RadioGroup = Radio.Group;

const googleMapKey = keys.googleMapKey;

export default class GoogleMapSDK extends Component {
  state = {
    mapWidth: 600,
    mapHeight: 500,
    latitude: 43.8474,
    longitude: -79.402055,
    enableSearch: true,
    enableMarker: true,
    enableInfoWindow: true,
    addressName: "Michael's home",
    addressDetails: "63 Queens College Drive, Richmond Hill, ON",
    zoomLevel: 17,
    inputmapWidth: 600,
    inputmapHeight: 500,
    inputenableSearch: false,
    inputenableMarker: true,
    inputenableInfoWindow: false,
    inputaddressName: "Michael's home",
    inputaddressDetails: "63 Queens College Drive, Richmond Hill, ON",
    inputzoomLevel: 17
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const {
      mapWidth,
      mapHeight,
      latitude,
      longitude,
      enableSearch,
      enableMarker,
      enableInfoWindow,
      addressName,
      addressDetails,
      zoomLevel,
      inputmapWidth,
      inputmapHeight,
      inputaddressName,
      inputaddressDetails,
      inputzoomLevel
    } = this.state;
    return (
      <section>
        <div className="content-box-lg text-center">
          <div className="container">
            <div className="row">
              <h1 className="col-md-10 col-md-offset-1">
                GoogleMap API React SDK demo
              </h1>
            </div>
            <br />

            <div className="row">
              <div className="col-md-7">
                <GoogleMap
                  googleMapKey={googleMapKey}
                  mapWidth={mapWidth}
                  mapHeight={mapHeight}
                  latitude={latitude}
                  longitude={longitude}
                  enableSearch={enableSearch}
                  enableMarker={enableMarker}
                  enableInfoWindow={enableInfoWindow}
                  addressName={addressName}
                  addressDetails={addressDetails}
                  zoomLevel={zoomLevel}
                />
              </div>
              <div className="col-md-5">
                <h3>Props</h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Props</th>
                        <th>Default</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>googleMapKey:string</td>
                        <td>isRequired</td>
                        <td>isRequired</td>
                      </tr>
                      <tr>
                        <td>mapWidth:number</td>
                        <td>600</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              id="pwd"
                              name="inputmapWidth"
                              value={inputmapWidth}
                              onChange={this.onChange}
                            />
                            <div className="input-group-btn">
                              <button
                                className="btn btn-primary "
                                type="button"
                                onClick={() => {
                                  this.setState({
                                    mapWidth: Number(inputmapWidth)
                                  });
                                }}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>mapHeight:number</td>
                        <td>500</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              id="pwd"
                              name="inputmapHeight"
                              value={inputmapHeight}
                              onChange={this.onChange}
                            />
                            <div className="input-group-btn">
                              <button
                                className="btn btn-primary "
                                type="button"
                                onClick={() => {
                                  this.setState({
                                    mapHeight: Number(inputmapHeight)
                                  });
                                }}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>latitude:number</td>
                        <td>43.8474</td>
                        <td>provide your latitude</td>
                      </tr>
                      <tr>
                        <td>longitude:number</td>
                        <td>-79.402055</td>
                        <td>provide your longitude</td>
                      </tr>
                      <tr>
                        <td>enableSearch:bool</td>
                        <td>false</td>
                        <td>
                          <RadioGroup
                            onChange={e => {
                              this.setState({
                                enableSearch: e.target.value
                              });
                            }}
                            value={enableSearch}
                          >
                            <Radio value={true}>True</Radio>
                            <Radio value={false}>False</Radio>
                          </RadioGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>enableMarker:bool</td>
                        <td>true</td>
                        <td>
                          <RadioGroup
                            onChange={e => {
                              this.setState({
                                enableMarker: e.target.value
                              });
                            }}
                            value={enableMarker}
                          >
                            <Radio value={true}>True</Radio>
                            <Radio value={false}>False</Radio>
                          </RadioGroup>
                        </td>
                      </tr>
                      <tr>
                        <td>enableInfoWindow:bool</td>
                        <td>true</td>
                        <td>
                          <RadioGroup
                            onChange={e => {
                              this.setState({
                                enableInfoWindow: e.target.value
                              });
                            }}
                            value={enableInfoWindow}
                          >
                            <Radio value={true}>True</Radio>
                            <Radio value={false}>False</Radio>
                          </RadioGroup>
                        </td>
                      </tr>

                      <tr>
                        <td>addressName:string</td>
                        <td>Michael's home</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="pwd"
                              name="inputaddressName"
                              value={inputaddressName}
                              onChange={this.onChange}
                            />
                            <div className="input-group-btn">
                              <button
                                className="btn btn-primary "
                                type="button"
                                onClick={() => {
                                  this.setState({
                                    addressName: inputaddressName
                                  });
                                }}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>addressDetails:string</td>
                        <td>Michael's address</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="pwd"
                              name="inputaddressDetails"
                              value={inputaddressDetails}
                              onChange={this.onChange}
                            />
                            <div className="input-group-btn">
                              <button
                                className="btn btn-primary "
                                type="button"
                                onClick={() => {
                                  this.setState({
                                    addressDetails: inputaddressDetails
                                  });
                                }}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>zoomLevel:number</td>
                        <td>17</td>
                        <td>
                          <div className="input-group">
                            <input
                              type="number"
                              className="form-control"
                              id="pwd"
                              name="inputzoomLevel"
                              value={inputzoomLevel}
                              onChange={this.onChange}
                            />
                            <div className="input-group-btn">
                              <button
                                className="btn btn-primary "
                                type="button"
                                onClick={() => {
                                  this.setState({
                                    zoomLevel: Number(inputzoomLevel)
                                  });
                                }}
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
