import React from 'react'
import Link from 'gatsby-link'

import styles from "../components.module.css"

const Speaker = props =>
  <div className={styles.speaker}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.speaker_name}>
        {props.speaker_name}
      </h2>
      <h4 className={styles.speaker_title}>
        {props.speaker_title}
      </h4>
      <p className={styles.speaker_desc}>
        {props.speaker_desc}
      </p>
    </div>
  </div>

export default Speaker
