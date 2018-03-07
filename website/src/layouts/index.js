import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import NavList from '../components/Nav/NavList'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dates from '../components/Dates/Dates'
import Box from '../components/Box'
import Search from '../components/Search'

import styles from "./layouts.module.css"
// import mainNav from '../components/Nav'
// import './index.css'

const MainLayout = ({ children }) => (
  <div>
    <Helmet
      title="MMSP 2018"
      meta={[
        { name: 'description', content: 'IEEE 20th International Workshop on Multimedia Signal Processing' },
        { name: 'keywords', content: 'IEEE, MMSP, MMSP 2018, Signal Processing'},
      ]}
      script={[
        { type: "text/javascript", src:"https://addevent.com/libs/atc/1.6.1/atc.min.js" },
      ]}
    />
    <div className={styles.header_container}>
      <Header />
    </div>
    <div className={styles.main_container}>
      <div className={styles.left_container}>
        <Search/>
        <NavList/>
      </div>
      <div className={styles.center_container}>
        {children()}
      </div>
      <div className={styles.right_container}>
        <Box title="Important Dates">
          <Dates />
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
