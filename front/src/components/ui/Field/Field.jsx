import React from 'react'
import styles from './Field.module.scss'

const Field = ({placeholder, value, onChange, type='text'}) => {
  return (
    <input placeholder={placeholder} value={value} type={type} onChange={onChange} className={styles.input}/>
  )
}

export default Field