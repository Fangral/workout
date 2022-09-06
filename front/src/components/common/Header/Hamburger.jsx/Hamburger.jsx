import React from 'react'
import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import { menu } from './menuBase'
import { Link } from 'react-router-dom'

import styles from './Hamburger.module.scss'

const Hamburger = () => {
    const[show, setShow]=React.useState(false)

    const handleLogout=()=>{
        console.log('logout')
    }

  return (
    <div className={styles.wrapper}>
        <button type='button' onClick={()=>setShow(!show)}>
            <img src={show ? hamburgerCloseImage : hamburgerImage} alt="Hamburger" />
        </button>
        <nav className={`${styles.menu} ${show ? styles.show: ''}`}>
            <ul>
                {menu.map((item,key)=>
                <li key={key}><Link to={item.link}>{item.title}</Link></li>
                )}
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
</div>
  )
}

export default Hamburger