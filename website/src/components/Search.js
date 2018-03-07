import React from 'react'
import Link from 'gatsby-link'
import styles from "./components.module.css"
// import NavLink from "NavLink.js"

const Search = () =>
  <input type="text" name="search" placeholder="Search.." className = {styles.search}/>

export default Search
