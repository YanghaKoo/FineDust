/* global daum */

import React, { Component } from "react";

class DaumMap extends Component {
  render() {
    const { lat, lng } = this.props;
    const style = {
      width: "500px",
      height: "300px"
    };


    setTimeout(() => {
      let el = document.getElementById("map");
      let map = new window.daum.maps.Map(el, {
        center: new window.daum.maps.LatLng(lat, lng),
        level : 3
      });
    }, 1);
    return <div id="map" style={{ height: "500px" }} style={style} />;
  }
}

export default DaumMap;
