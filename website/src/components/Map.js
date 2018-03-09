import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"

class Map extends React.Component {
  // constructor() {
  //   super()
  // }
  componentDidMount () {
    window.initMap = this.initMap;
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjo-CUTGotQ5BbwBlk6Ouvcc1n15NkqGI&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
  }
  initMap() {
      var segal = {lat: 49.284381, lng: -123.114910};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: segal
      });
      var marker = new google.maps.Marker({
        position: segal,
        map: map
      });
    }
  render() {
    return (
      <div>
        <div id = { "map" } className={styles.map}>
        </div>
      </div>
    )
  }
}

export default Map
