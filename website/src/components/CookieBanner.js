import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"

// add cookie banner based on this instruction: https://docs.google.com/document/d/1NF25nl2aI5cl_S34mFnmJRfFeFrUTtjlO1fKjqf4PTw/edit
class CookieBanner extends React.Component {
  componentDidMount () {
    const script1 = document.createElement("script");
    script1.src = "https://s3-us-west-2.amazonaws.com/ieeeshutpages/gdpr/settings.js";
    document.head.appendChild(script1);

    const style1 = document.createElement("link");
    style1.rel = "stylesheet";
    style1.type = "text/css";
    style1.href = "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css";
    document.head.appendChild(style1);

    const script2 = document.createElement("script");
    script2.src = "https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js";
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.innerText = 'window.addEventListener("load", function(){window.cookieconsent.initialise(json)});'
    document.head.appendChild(script3);

  }
  render() {return false};
}

export default CookieBanner
