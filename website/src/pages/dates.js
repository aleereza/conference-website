import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

const DatesPage = () => (
  <div>
    <h3 className={styles.pagetitle}>Deadline Dates</h3>
    <table>
      <tbody>
        <tr><td>March 1</td><td>Proposals for Special Sessions</td></tr>
        <tr><td>March 6</td><td>Notification of Acceptance for Special Session Proposals</td></tr>
        <tr><td>April 25</td><td>Submission of Regular and Special Session Papers</td></tr>
        <tr><td>May 30</td><td>Notification of Paper Acceptance</td></tr>
        <tr><td>June 15</td><td>Camera-ready papers due</td></tr>
        <tr><td>June 22</td><td>Submission of Abstract and Demo Papers</td></tr>
        <tr><td>August 29–31</td><td>Workshop Dates</td></tr>
      </tbody>
    </table>
  </div>
)

export default DatesPage
