import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"
// import NavLink from "NavLink.js"

const ListLink = props =>
  <li className={styles.listlink}>
    <Link className={styles.link} to={props.to}>
      {props.children}
    </Link>
  </li>

export default ListLink
