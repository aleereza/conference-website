import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

import pic1 from "../images/social1.jpg"
import pic2 from "../images/social2.jpg"
import pic3 from "../images/social3.jpg"

const SocialPage = () => (
  <div>
    <h3 className={styles.pagetitle}>Banquet Dinner</h3>
    <p className={styles.nomarginb}>Thursday, 30 August 2018 – 7:00pm – 10:30pm
    </p>
    <p>Venue: Grouse Mountain- The peak of Vancouver
    </p>
    <p>A social event and banquet will be held on the evening of <strong>30 August 2018</strong> at <a href="https://www.grousemountain.com/" target="_blank">Grouse Mountain- The peak of Vancouver</a>.
    </p>
    <img src={pic1} className={styles.content_image} alt="" />
    <p>Just 15 minutes from downtown, Vancouver&#39;s Grouse Mountain offers the perfect destination for a truly rewarding and memorable experience.
    </p>
    <img src={pic2} className={styles.content_image} alt="" />
    <p>Transportation will be organized for the workshop attendees and the travel and banquet expenses are included in the registration costs.
    </p>
    <p>Note: Additional banquet tickets can be purchased at $90 through the <Link to="/registration">Registration page</Link>.
    </p>
    <p><strong>Transportation:</strong> Buses will depart from the SFU Segal Building at approximately 18:15. Departure from Grouse Mountain will be approximately between at 21:30 and 22:30.
    </p>
    <img src={pic3} className={styles.content_image} alt="" />
  </div>
)

export default SocialPage
