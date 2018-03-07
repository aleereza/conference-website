import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
// import ListLink from "../ListLink"

const AddDate = props =>

  <div title="Add to Calendar" className="addeventatc" style={{ margin: '3rem auto' }}>
      {props.children}
      <span className="start">{props.start}</span>
      <span className="end">03/21/2018 10:00 AM</span>
      <span className="timezone">America/Los_Angeles</span>
      <span className="title">Summary of the event</span>
      <span className="description">Description of the event</span>
      <span className="location">Location of the event</span>
  </div>

export default AddDate
