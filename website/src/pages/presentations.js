import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

const PresentationsPage = () => (
  <div>
    <h3 className={styles.pagetitle}>Presentation Instructions</h3>
    <h4>Lecture presentations</h4>
    <p>Each lecture presentations will be allocated 18 minutes, which includes setup, presentation, and questions/answers. We recommend using 15 minutes for the presentation itself and leaving 2-3 minutes for questions. Windows-based laptop and LCD projector will be available in the room. In case anything else is required, please contact the General Chairs or TPC Chairs.<span className={styles.redtext}> We recommend that you bring your presentation on a USB drive (PowerPoint or PDF file), upload it to the provided laptop prior to the session, and make sure it opens properly.</span>
    </p>
    <h4>Poster presentations</h4>
    <p>Poster sessions are allocated 60 minutes each and are scheduled immediately following the lunch break, on each of the three days of the workshop. The dimensions of the poster boards are 4’ x 8’ (121cm x 243cm, height x width). This is the maximal allowed poster size, but we recommend using a smaller poster size, such as 3’ x 4’. Please use the last few minutes of the lunch break to set up your poster. Please prepare a short 3-5 minute summary of the work, which you can present from time to time to the audience. All posters should remain on the boards for the entire session, and taken down during the refreshment break after the session. Poster panels and mounting pins will be provided. In case anything else is required, please contact the General Chairs or TPC Chairs.
    </p>
    <h4>Demo presentations</h4>
    <p>Demo papers will be presented in a poster-session format. The demo session is allocated 60 minutes and is scheduled immediately following the lunch break on Friday, August 31. Please use the last few minutes of the lunch break to set up. Poster boards (as indicated above), small benches and power outlets will be provided for each demo presentation. In addition to the demonstration, we also recommend preparing a poster to summarize the work. All equipment and posters should remain on display for the entire session, and taken down during the refreshment break after the session. If you have any further questions, please contact the General Chairs or TPC Chairs.
    </p>
  </div>
)

export default PresentationsPage
