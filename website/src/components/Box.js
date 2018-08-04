import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"
// import NavLink from "NavLink.js"

const Box = props =>
  <div className={styles.box}>
    <h3>{props.title}
    </h3>
    {props.children}
  </div>

export default Box
