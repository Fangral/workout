
import React from 'react'
//import hamburgerImage from '../../../../images/header/hamburger.svg'
//import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import { menu } from './menuBase'
import { Link } from 'react-router-dom'

import styles from './Hamburger.module.scss'
import { useAuth } from '../../../../hooks/useAuth'
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter'


const Hamburger = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideAlerter(false)
    const {isAuth, setIsAuth } = useAuth()

    const handleLogout=()=>{
      localStorage.removeItem('token')
      setIsAuth(false)
      setIsComponentVisible(false)
    }

  return (
    <>
    <div ref={ref}  className={`${styles.wrapper}`} >
      <div role='button'  className={`${'hamburger hamburger--spin'} ${isComponentVisible ? 'is-active': ''}`}  tabIndex="0" onClick={()=> {setIsComponentVisible(!isComponentVisible)}} 
         aria-label="Menu" aria-controls="navigation" aria-expanded={!isComponentVisible}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
      <nav id="navigation" className={`${styles.menu} ${isComponentVisible ? styles.show: ''}`}>
        <ul>
          {menu.map((item,key)=>
          <li key={key}><Link to={item.link}>{item.title}</Link></li>
          )}
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>
    </div>

    </>
  )
}

export default Hamburger