import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"

class FullSize extends React.Component {
  constructor(props) {
    super()
    this.src = props.src
    this.caption = props.caption
  }
  componentDidMount () {
    // Get the modal
    var modal = document.getElementById('Modal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('Img');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
  }

  render() {
    return (
      <div>
        <img id={"Img"} src={this.src} alt={this.caption}/>
        <div id={"Modal"} className="modal">
          <span className="close">&times;</span>
          <img className="modal-content" id={"img01"}/>
          <div id={"caption"}></div>
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
