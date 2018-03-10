import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"

class FullSize extends React.Component {
  constructor(props) {
    super()
    this.src = props.src
  }
  // componentDidMount () {
  //
  // }

  // initMap() {
  //     var segal = {lat: 49.284381, lng: -123.114910};
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 15,
  //       center: segal
  //     });
  //     var marker = new google.maps.Marker({
  //       position: segal,
  //       map: map
  //     });
  //   }
  render() {
    return (
      <div>
        <img id={"Img"} src={this.src}/>
        <div id="Modal" className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id={"img01"}/>
          <div id="caption"></div>
        </div>
      </div>
    )
  }
}

export default FullSize

//I was working on this:
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

// <!-- The Modal -->
// <div id="myModal" class="modal">
// <span class="close">&times;</span>
// <img class="modal-content" id="img01">
// <div id="caption"></div>
// </div>
