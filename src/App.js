import React, { Component, Fragment } from "react";
import "./App.css";
import GoogleMapSDK from "./sections/GoogleMapSDK";
import keys from "./config/keys";

const googleMapKey = keys.googleMapKey;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GoogleMapSDK />

        <section>
          <div className="content-box-lg text-center">
            <div className="container">
              <div className="row">
                <h1 className="col-md-10 col-md-offset-1">
                  GoogleGeoCoding & ReverseGeoCoding API React SDK demo
                </h1>
              </div>
              <br />
            </div>
          </div>
        </section>

        <section>
          <div className="content-box-lg text-center">
            <div className="container">
              <div className="row">
                <h1 className="col-md-10 col-md-offset-1">
                  GooglePlace AutoCompletion API React SDK demo
                </h1>
              </div>
              <br />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default App;
