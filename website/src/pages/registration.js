import React from 'react'
import Link from 'gatsby-link'

import Button from "../components/Button/Button"

import styles from "../components/components.module.css"

const RegistrationPage = () => (
  <div>
    <h3>Registration</h3>
    <p><strong>Please note: To be published in the MMSP 2018 Conference Proceedings and IEEE Xplore®, an author of an accepted paper must register for the conference at the full (member or non-member) rate.</strong>
    </p>
    <p>Non-refundable registration fees must be paid prior to the author registration deadline. The deadline for author registration is June 25th, 2018 at 11:59 PST. Failure to have such registration will result in the removal of the paper from the Technical Program.
    </p>
    <p>For authors with multiple accepted papers, one registration can cover up to 2 papers. Accepted and presented papers will be published in the MMSP 2018 Conference Proceedings and submitted to IEEE Xplore®.
    </p>
    <p>Registration ​fee ​includes ​access ​to ​the ​entire ​technical ​programme ​for ​3 ​days, ​coffee ​breaks, ​lunch, ​banquet/social ​event, ​and ​electronic ​proceedings.
    </p>
    <p>One must be an IEEE Member at the time of registration to receive the IEEE Member discount. Please visit <a href="https://www.ieee.org/membership/join/index.html">ieee.org/join</a> for more details.
    </p>
    <p>The table below shows registration fees in Canadian Dollar (CAD) and include 5% Canadian GST:
    </p>
    <table>
      <tbody>
        <tr>
          <th width="40%">CAD</th>
          <th width="30%">Advance Rates<br/><small>(until June 25th 23:59 PST)</small></th>
          <th width="30%">Regular Rates<br/><small>(from June 26th 00:00 PST)</small></th>
        </tr>
        <tr>
          <td>Non-Member</td>
          <td className={styles.cell}>1000</td>
          <td className={styles.cell}>1300</td>
        </tr>
        <tr>
          <td>IEEE Member</td>
          <td className={styles.cell}>850</td>
          <td className={styles.cell}>990</td>
        </tr>
        <tr>
          <td>SPS Member</td>
          <td className={styles.cell}>720</td>
          <td className={styles.cell}>850</td>
        </tr>
        <tr>
          <td>Student Non-Member</td>
          <td className={styles.cell}>480</td>
          <td className={styles.cell}>590</td>
        </tr>
        <tr>
          <td>Student IEEE Member</td>
          <td className={styles.cell}>330</td>
          <td className={styles.cell}>380</td>
        </tr>
        <tr>
          <td>Student SPS Member</td>
          <td className={styles.cell}>280</td>
          <td className={styles.cell}>330</td>
        </tr>
        <tr>
          <td>Life Member</td>
          <td className={styles.cell}>350</td>
          <td className={styles.cell}>450</td>
        </tr>
        <tr>
          <td>Demo Paper</td>
          <td className={styles.cell}>400</td>
          <td className={styles.cell}>400</td>
        </tr>
        <tr>
          <td>Additional Banquet Ticket</td>
          <td className={styles.cell}>70</td>
          <td className={styles.cell}>90</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Important:</strong> For receiving the invitation letter for a Canadian Visa application, please contact us via email (<a href="mailto:psaeedi@sfu.ca">psaeedi@sfu.ca</a> or <a href="mailto:zjanew@ece.ubc.ca">zjanew@ece.ubc.ca</a>).
    </p>
    <p>Please include your official name, as appears on your passport, as well as your accepted and registered conference paper ID(s).
    </p>
    <p><strong>Your paper must be registered before we can send you the visa letter.</strong>
    </p>
    <Button to="https://www.regonline.com/registration/Checkin.aspx?EventID=2510299">
      Register Here
    </Button>
  </div>
)

export default RegistrationPage
