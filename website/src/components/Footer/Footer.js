import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
import ListLink from "../ListLink"

const Footer = () => (
  <ul className={styles.footer}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/call">Call for Papers</ListLink>
  </ul>
)

export default Footer
