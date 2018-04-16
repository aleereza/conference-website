import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
import AddDate from "./AddDate"
import Box from "../Box"



class Dates extends React.Component {
  constructor() {
    super()
    // this.state = { count: 0 }
  }

  render() {
    return (
      <div className={styles.dates}>
        <Box title="Important Dates">
          <AddDate start="03/01/2018" title="Proposals for Special Sessions" eventmonth="MAR" eventday="1"/>
          <AddDate start="03/06/2018" title="Notification of Acceptance for Special Session Proposals" eventmonth="MAR" eventday="6"/>
          <AddDate start="04/25/2018" title="Submission of Regular and Special Session Papers" eventmonth="APR" eventday="25"/>
          <AddDate start="05/30/2018" title="Notification of Paper Acceptance" eventmonth="MAY" eventday="30"/>
          <AddDate start="06/15/2018" title="Camera-ready papers due" eventmonth="JUN" eventday="15"/>
          <AddDate start="06/22/2018" title="Submission of Abstract and Demo Papers" eventmonth="JUN" eventday="22"/>
          <AddDate start="08/29/2018 08:00 AM" title="Workshop Start" eventmonth="AUG" eventday="29"/>
        </Box>
      </div>
    )
  }
}

export default Dates
// <div title="Add to Calendar" className="addeventatc" style={{ margin: '3rem auto' }}>
//     Proposals for Special Sessions
//     <span className="start">03/21/2018 08:00 AM</span>
//     <span className="end">03/21/2018 10:00 AM</span>
//     <span className="timezone">America/Los_Angeles</span>
//     <span className="title">Summary of the event</span>
//     <span className="description">Description of the event</span>
//     <span className="location">Location of the event</span>
// </div>
