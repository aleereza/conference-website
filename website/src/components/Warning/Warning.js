import React from 'react'
import Link from 'gatsby-link'

import styles from "../components.module.css"

// import vancouver1 from "../../images/vancouver1.jpg"
// <img src={vancouver1} alt="Vancouver1" style={{ width: "auto", height: "300px" }}/>

const Warning = props => (
  <div className={styles.warning}>
    <p>
      {props.content}
    </p>
  </div>
)

export default Warning
