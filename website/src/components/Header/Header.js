import React from 'react'
import Link from 'gatsby-link'

import styles from "../components.module.css"

// import vancouver1 from "../../images/vancouver1.jpg"
// <img src={vancouver1} alt="Vancouver1" style={{ width: "auto", height: "300px" }}/>

const Header = () => (
  <div className={styles.image_container}>
    <div className={styles.image_content}>
      <div className={styles.title_text_container}>
        <Link to="/"  className={styles.title_text}>
          <h1 className={styles.title_text}>
          MMSP 2018
          </h1>
        </Link>
        <h3 className={styles.title_text}>IEEE 20th International Workshop on Multimedia Signal Processing
        </h3>
        <h4 className={styles.title_text}>August 29-31,	2018,	Vancouver, Canada
        </h4>
      </div>
    </div>
  </div>
)

export default Header
