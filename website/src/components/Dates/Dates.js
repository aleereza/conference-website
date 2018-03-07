import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
import AddDate from "./AddDate"


class Dates extends React.Component {
  constructor() {
    super()
    // this.state = { count: 0 }
  }

  render() {
    return (
      <div className={styles.dates}>
        <h3>Important Dates</h3>
        <AddDate start="03/01/2018 08:00 AM">Proposals for Special Sessions</AddDate>
        <AddDate start="03/06/2018 08:00 AM">Notification of Acceptance for Special Session Proposals</AddDate>
          // <div title="Add to Calendar" className="addeventatc" style={{ margin: '3rem auto' }}>
          //     Proposals for Special Sessions
          //     <span className="start">03/21/2018 08:00 AM</span>
          //     <span className="end">03/21/2018 10:00 AM</span>
          //     <span className="timezone">America/Los_Angeles</span>
          //     <span className="title">Summary of the event</span>
          //     <span className="description">Description of the event</span>
          //     <span className="location">Location of the event</span>
          // </div>
      </div>
    )
  }
}

export default Dates
