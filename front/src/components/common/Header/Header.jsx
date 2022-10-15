import React from 'react'
import styles from './Header.module.scss'
import {useLocation,useNavigate} from 'react-router-dom'

import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/dumbbell.svg'
import arrowImage from '../../../images/header/arrow.svg'
import Hamburger from './Hamburger.jsx/Hamburger'
import { useAuth } from '../../../hooks/useAuth'

 const Header=()=>{
 const navigate=useNavigate();
const loacation=useLocation();
const {isAuth}=useAuth();
    return(
        <>
            <header className={styles.header}>
                {
                    loacation.pathname!=='/'?(  <button type='button' onClick={()=>navigate(-1)}>
                    <img src={arrowImage} alt="Auth1" />
                </button>)
                :(   <button type='button' onClick={()=>navigate(isAuth ? '/profile':'/auth')}>
                <img src={isAuth? authImage: userImage} alt="Auth1" height='40px' />
            </button>)
                }
        {isAuth?<Hamburger/>:''}
            </header>
        </>
    )
}
export default Header;