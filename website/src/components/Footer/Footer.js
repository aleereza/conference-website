import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
import ListLink from "../ListLink"
import FooterList from "./FooterList"

const Footer = () => (
  <div className={styles.footer}>
    <FooterList title="Community">
      <ListLink to="/">Facebook</ListLink>
      <ListLink to="/">Twitter</ListLink>
      <ListLink to="/">youtube</ListLink>
    </FooterList>
  </div>
)

export default Footer
