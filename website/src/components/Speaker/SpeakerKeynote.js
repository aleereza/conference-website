import React from 'react'
import Link from 'gatsby-link'

import styles from "../components.module.css"

const SpeakerKeynote = props =>
  <div>
    <div className={styles.speaker_header}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.speaker_header_desc}>
        <h4 className={styles.speaker_title}>
          {props.keynote_title}
        </h4>
        <h2 className={styles.speaker_title}>
          {props.speaker_name}
        </h2>
        <h4 className={styles.speaker_title}>
          {props.speaker_title}
        </h4>
      </div>
    </div>
    <div className={styles.speaker_body}>
      <p className={styles.speaker_desc}>
        {props.speaker_desc}
      </p>
    </div>
  </div>

export default SpeakerKeynote
