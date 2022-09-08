import React from 'react'
import Styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={Styles.nav}>
            <div className={Styles.smallDot}></div>
            <div>Solar Panel Quotes</div>
    </div>
  )
}
export default NavBar
