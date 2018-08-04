import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

const SubmissionPage = () => (
  <div>
    <h3 className={styles.pagetitle}>Paper Submission</h3>
    <p>Paper submission is handled via the CMT system. Please submit your paper at <a href="https://cmt3.research.microsoft.com/MMSP2018" rel="noopener noreferrer">cmt3.research.microsoft.com/MMSP2018</a>
    </p>
  </div>
)

export default SubmissionPage
