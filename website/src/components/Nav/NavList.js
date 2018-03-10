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
      <nav>
        <ul className={styles.navlist}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/call">Call for Papers</ListLink>
          <ListLink to="/submission">Paper Submission</ListLink>
          <ListLink to="/instructions">Instructions for Authors</ListLink>
          <ListLink to="/dates">Deadline Dates</ListLink>
          <ListLink to="/registration">Registration</ListLink>
          <ListLink to="/keynote">Keynote Speakers</ListLink>
          <ListLink to="/committee">Committee</ListLink>
          <ListLink to="/sessions">Sessions</ListLink>
          <ListLink to="/technical">Tecnical Program</ListLink>
          <ListLink to="/accommodation">Travel and Accommodation</ListLink>
          <ListLink to="/venue">Venue</ListLink>
          <ListLink to="/social">Social Program</ListLink>
          <ListLink to="/awards">Awards</ListLink>
        </ul>
      </nav>
    )
  }
}

export default NavList
