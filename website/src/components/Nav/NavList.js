import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
import ListLink from "../ListLink"

// const NavList = () => (
//   <ul className={styles.navlist}>
//     <ListLink to="/">Home</ListLink>
//     <ListLink to="/call">Call for Papers</ListLink>
//   </ul>
// )


class NavList extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  render() {
    return (
      <ul className={styles.navlist}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/call">Call for Papers</ListLink>
        <ListLink to="/instructions">Instructions for Authors</ListLink>
        <ListLink to="/registeration">Registration</ListLink>
        <ListLink to="/keynote">Keynote Speakers</ListLink>
        <ListLink to="/committee">Committee</ListLink>
        <ListLink to="/sessions">Sessions</ListLink>
        <ListLink to="/technical">Tecnical Program</ListLink>
        <ListLink to="/accommodation">Accommodation</ListLink>
        <ListLink to="/venue">Venue</ListLink>
        <ListLink to="/sosial">Sosial Program</ListLink>
        <ListLink to="/award">Award</ListLink>
      </ul>
    )
  }
}

export default NavList
