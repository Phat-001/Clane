import React from 'react'
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

function Button({props}) {

     const btnClass = props.primary ? styles.primary : styles.black;

  return (
     <div className={`${styles.btn} ${btnClass}`}>
          <Link to={props.path}>{props.text}</Link>
     </div>
  )
}

export default Button