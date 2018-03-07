import React from 'react'
import Link from 'gatsby-link'

import styles from "../components.module.css"

// import vancouver1 from "../../images/vancouver1.jpg"
// <img src={vancouver1} alt="Vancouver1" style={{ width: "auto", height: "300px" }}/>

const Header = () => (
  <div className={styles.image_container}>
    <div className={styles.image_content}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          MMSP 2018
        </Link>
      </h1>
      <h3>IEEE 20th International Workshop on Multimedia Signal Processing
      </h3>
    </div>
  </div>
)

export default Header
//
