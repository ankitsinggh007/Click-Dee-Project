import React from 'react'
import Styles from './MainContainer.module.css'
function MainContainer() {
  return (
    <div className={Styles.Container}>
          <p className={Styles.p1}>Our Customers Say</p>
          <p className={Styles.p2}>What they’re saying?</p>
          <p className={Styles.p3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus eu turpis sit eget mattis urna.</p>
      </div>
  )
}

export default MainContainer
