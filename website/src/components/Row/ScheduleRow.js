import React from 'react'
import Link from 'gatsby-link'

import styles from "./schedulerow.module.css"

class ScheduleRow extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <tr>
        <td className={styles.time}><small>{this.props.time}</small></td>
        <td style={{backgroundColor: this.props.cellcolor}}>{this.props.day1}</td>
        <td style={{backgroundColor: this.props.cellcolor}}>{this.props.day2}</td>
        <td style={{backgroundColor: this.props.cellcolor}}>{this.props.day3}</td>
      </tr>
    );
  }
}

export default ScheduleRow
