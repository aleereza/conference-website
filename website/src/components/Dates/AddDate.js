import React from 'react'
import Link from 'gatsby-link'
import styles from "../components.module.css"
// import ListLink from "../ListLink"

const AddDate = props => (
  <div>
    <div title="Add to Calendar" className="addeventatc" style={{ padding: 0, width: "100%"}}>
      <div className="date" style={{ padding: 0, width: "60px", float: "left", }}>
        <span className="mon">{props.eventmonth}</span>
        <span className="day">{props.eventday}</span>
        <div className="bdr1"></div>
        <div className="bdr2"></div>
      </div>
	    <div className="desc" style={{ overflow: "auto", paddingLeft: "60px", float: "left", position: "absolute", width: "100%"}}>
        <p style={{ padding: "5%",  }}>
          <span>{props.title}</span>
        </p>
	    </div>

      <span className="start">{props.start}</span>
      <span className="all_day_event">true</span>
      <span className="timezone">America/Los_Angeles</span>
      <span className="title">{props.title}</span>
      <span className="location">Simon Fraser University</span>
    </div>
  </div>
)

export default AddDate
// <div title="Add to Calendar" className="addeventatc" style={{ fontSize: ".7em", display: "block"  }}>
