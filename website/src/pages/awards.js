import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

const AwardsPage = () => (
  <div>
    <h3 className={styles.pagetitle}>Awards</h3>
    <p>MMSP traditionally awards the top 10% of accepted papers. Since the acceptance rate of MMSP 2018 was just under 50%, this year we renamed this award to “Top 5% Award” because it refers to the top 5% of submitted papers. These top 5% of papers were selected based on reviews and meta-reviews. We are pleased to announce the recipients of this award below.
    </p>

    <h3>Top 5% Award</h3>
    <div className={styles.awardpaper}>
      <p>Enhanced Steerable Pyramid Transformation for Medical Ultrasound Image Despeckling
      </p>
      <small>Prerna Singh, Ramakrishnan Mukundan (University of Canterbury), and Rex De Ryke (Canterbury District Health Board)</small>
    </div>
    <div className={styles.awardpaper}>
      <p>Heterogeneous Spatial Quality for Omnidirectional Video
      </p>
      <small>Hristina Hristova, Xavier Corbillon, Gwendal Simon (IMT Atlantique), Viswanathan Swaminathan (Adobe), and Alisa Devlic (Huawei)
      </small>
    </div>
    <div className={styles.awardpaper}>
      <p>User-Independent Detection of Swipe Pressure using a Thermal Camera for Natural Surface Interaction
      </p>
      <small>Tim Dunn, Sean Banerjee, and Natasha Kholgade Banerjee (Clarkson University)
      </small>
    </div>
    <div className={styles.awardpaper}>
      <p>Color Noise-Based Feature for Splicing Detection and Localization
      </p>
      <small>Christophe Destruel, Vincent Itier, Olivier Strauss, and William J.-P. Puech (Université de Montpellier)
      </small>
    </div>
    <div className={styles.awardpaper}>
      <p>Adversarial Attacks on Face Detectors using Neural Net Based Constrained Optimization
      </p>
      <small>Avishek Bose and Parham Aarabi (University of Toronto)
      </small>
    </div>
    <p style={{marginTop: "2rem"}}>Among these papers, the Awards Committee led by Amy Reibman and Giuseppe Valenzise, and with input from Jenq-Neng Hwang and the TPC Co-Chairs, selected one paper, which was given the Best Paper Award. The critera used to select the best paper included reviews, meta-reviews, originality, potential impact, and the presentation quality. We are pleased to announce the recipient of this award.
    </p>

    <h3>Best Paper Award</h3>

    <div className={styles.awardpaper}>
      <p>Heterogeneous Spatial Quality for Omnidirectional Video
      </p>
      <small>Hristina Hristova, Xavier Corbillon, Gwendal Simon (IMT Atlantique), Viswanathan Swaminathan (Adobe), and Alisa Devlic (Huawei)
      </small>
    </div>
  </div>
)

export default AwardsPage
