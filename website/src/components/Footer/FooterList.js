import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"

const FooterList = props =>
  <div className={styles.footerlist}>
    <h5>{props.title}
    </h5>
    {props.children}
  </div>

export default FooterList
