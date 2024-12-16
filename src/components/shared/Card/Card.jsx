import React from 'react'
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
const Card = ({title,icon,children}) => {
  return (
  <div className={styles.card}>
         <div className={styles.headingWrapper}>
          <img src={`/images/${icon}.png`} alt="logo" />
          <h1 className={styles.heading}>{title}</h1>
         </div>
         {children}
         {/* <p className={styles.text}>
         We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
         </p> */}
         {/* <div>
          
         </div> */}
         
     </div>
  )
}

export default Card
