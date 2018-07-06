import React from 'react'
import Link from 'gatsby-link'

import styles from "./schedulerow.module.css"

class PaperRow extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td style={{textAlign: "left", lineHeight: 1, paddingTop: "0.4rem", paddingBottom: "0.4rem"}}>
          <p style={{margin: 0}}>{this.props.title}</p>
          <small>{this.props.authors}</small>
        </td>
      </tr>
    );
  }
}



export default PaperRow
