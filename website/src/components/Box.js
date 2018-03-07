import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"
// import NavLink from "NavLink.js"

const Box = props =>
  <div className={styles.box}>
    <h4>{props.title}
    </h4>
    {props.children}
  </div>

export default Box
