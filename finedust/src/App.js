/* global daum */

import React, { Component } from "react";
import "./App.css";
import DaumMap from "./components/DaumMap";

class App extends Component {
  state = {
    lat: 37.326706,
    lng: 127.12462900000003
  };

  setLatLng = (lat, lng) => {
    this.setState({
      lat,
      lng
    });
    console.log(this.state.lat);
  };

  render() {
    return (
      <div>
        <DaumMap lat={this.state.lat} lng={this.state.lng} />

        <button
          onClick={() => {
            this.setLatLng(37.3507463, 127.1053948);
          }}
        >
          우리집
        </button>
        <button
          onClick={() => {
            this.setLatLng(36.3507463, 127.1053948);
          }}
        >
          다른집
        </button>
      </div>
    );
  }
}

export default App;
