import React from 'react'
import styles from './Button/button.module.scss'

export const Button = ({text,callback,style='purple'}) => {
  return (
    <button onClick={callback} className={styles[style]}>
        {text}
    </button>
  )
}
