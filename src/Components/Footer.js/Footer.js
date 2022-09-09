import React from 'react'
import Styles from './Footer.module.css'
function Footer() {
  return (
    <div className={Styles.footerBlack}>
        <div className={Styles.footerTextContainer}>
            <div className={Styles.SolarPanelDiv}>
                <svg width="15px" height="15px" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="8" r="7.5" fill="#FB923C"/>
                </svg>
                <p>
                    Solar Panel Quotes
                </p>
            </div>

            <div className={Styles.CopyrightText}>
                Copyright © 2021 | Eruptic Inc.
            </div>

            <div className={Styles.Privacy}>
                CALIFORNIA PRIVACY | PRIVACY POLICY | TERMS OF USE
            </div>
        </div>
    </div>
  )
}

export default Footer
