import React from 'react'
import Link from 'gatsby-link'

import styles from "../components/components.module.css"

import Map from "../components/Map"
import venue from "../images/venue.jpg"

const VenuePage = () => (
  <div>
    <h3>Venue</h3>
    <p>The workshop will be hosted in the <a href="https://www.sfu.ca/mecs/facilities/segal-building/">SFU Segal building</a>.
    </p>
    <img src={venue} className={styles.content_image} alt="" />
    <p>The Segal Building is located in the heart of Vancouver’s business district and within blocks of SFU’s other downtown centres, including the Morris J. Wosk Centre for Dialogue, Simon Fraser University at Harbour Centre, and the Goldcorp Centre for the Arts. With Pacific Centre across the street, the Segal Building is conveniently located near superb shopping, restaurants, hotels and entertainment venues.
    </p>
    <p>The Segal Building is only two blocks from Vancouver’s transportation hub, Waterfront Station, where Skytrain, SeaBus, Canada Line and West Coast Express stations transport riders to all parts of metro Vancouver and beyond. The Canada Line links Waterfront Station directly to the Vancouver International Airport. Public parking is available at many locations near the Segal Building.
    </p>
    <h3>Location
    </h3>
    <p>500 Granville Street, Vancouver, British Columbia, V6C 1W6
    </p>
    <Map/>
    <h3>Directions
    </h3>
    <h4>Driving from Vancouver International Airport (YVR)
    </h4>
    <p>From the airport, proceed north along the Arthur Laing Bridge to Granville Street. Head north on Granville Street into downtown Vancouver. After crossing the Granville Street Bridge, proceed along Granville until Pender. The Segal Building is located on the corner of Granville and Pender.
    </p>
    <h4>Parking
    </h4>
    <p>Public parking is available at many locations near the Segal Building. Street parking is free after 10 p.m. The closest parking lot is at 400 West Cordova Street.
    </p>
    <h4>Public Transit
    </h4>
    <p>The Segal Building is within easy walking distance of all street buses with a terminus in downtown Vancouver. Transit schedules can be found at <a href="https://www.translink.ca/">www.translink.ca</a>.
    </p>
  </div>
)

export default VenuePage
