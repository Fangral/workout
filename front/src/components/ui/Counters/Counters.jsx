import React from 'react';
import styles from './Counters.module.scss';

const counters = 
{
    minutes:7,
    workout:1,
    kgs:5
}

const Counters = () => {
    //minutes, kgs, workouts
  return (
    <div className={styles.wrapper}>
        {Object.entries(counters).map(item=>(
        <div className={styles.count}>
            <div className={styles.heading}>{item[0]}</div>
            <div className={styles.number}>{item[1]}</div>
        </div>
        ))}
    </div>
  )
}

export default Counters