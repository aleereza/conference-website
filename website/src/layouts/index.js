import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavList from '../components/Nav/NavList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dates from '../components/Dates/Dates'
import Box from '../components/Box'
// import Search from '../components/Search'
// import Warning from '../components/Warning/Warning'
import CookieBanner from '../components/CookieBanner'
import styles from "./layouts.module.css"
import './index.css'

import IEEE from "../images/IEEE.png"
import IEEE_sp from "../images/IEEE_sp.png"
import SFU from "../images/SFU.png"
import UBC from "../images/UBC.png"
import youtube from "../images/youtube_logo.png"
import favicon from "../images/favicon.ico"

const MainLayout = ({ children }) => (

  <div>
    <Helmet
      title="MMSP 2018"
      meta={[
        { name: 'description', content: 'IEEE 20th International Workshop on Multimedia Signal Processing' },
        { name: 'keywords', content: 'IEEE, MMSP, MMSP 2018, Signal Processing'},
      ]}
      script={[
        { type: "text/javascript", src:"https://addevent.com/libs/atc/1.6.1/atc.min.js"},
      ]}
    />
    <CookieBanner/>
    <div className={styles.header_container}>
      <Header />
    </div>

    <div className={styles.main_container}>
      <div className={styles.left_container}>
        <NavList/>
        <Box title="Organizers">
          <a href="https://www.ubc.ca/"><img src={UBC} className={styles.content_image} alt="" /></a>
          <a href="https://www.sfu.ca/"><img src={SFU} className={styles.sfu_image} alt="" /></a>
          <a href="https://signalprocessingsociety.org"><img src={IEEE} className={styles.ieee_image} alt="" /></a>
          <a href="https://signalprocessingsociety.org"><img src={IEEE_sp} className={styles.content_image} alt="" /></a>
        </Box>
      </div>
      <div className={styles.center_container}>
        {children()}
      </div>
      <div className={styles.right_container}>
        <Dates />
        <Box title="Silver Patrons">
          <a href="https://www.youtube.com/"><img src={youtube} className={styles.youtube_image} alt="" /></a>
        </Box>
      </div>

    </div>

    <footer className = {styles.footer_container}>
      <Footer/>
    </footer>

  </div>
)

MainLayout.propTypes = {
  children: PropTypes.func,
}

export default MainLayout

// <Search/>
// <Warning content="The deadline for regular and special session papers has been extended to April 25"/>
