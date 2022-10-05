import React, { useEffect } from 'react'
import styles from './Alert.module.scss'
import cn from 'classnames'
import { useState } from 'react'



const Alert = ({type="success", text}) => {
  const [seconds, setSeconds]=useState(3);
  useEffect(()=>{
    
    let myInterval = setInterval(() => {
      if (seconds > 0) {
          setSeconds(seconds - 1);
      }
  },1000)
  return ()=> {
    clearInterval(myInterval);
  };
})

  return (
    <div className={cn(styles.alert,{
        [styles.error]:type==='error',
        [styles.warning]:type==='warning',
        [styles.info]:type==='info'

    })}>
        <p>{text}</p>
        {type==="isSuccess"?<p> Переадресация {seconds} c...</p>: <></>}
    </div>
  )
}

export default Alert