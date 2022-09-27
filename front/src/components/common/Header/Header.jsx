import React from 'react'
import styles from './Header.module.scss'
import {useLocation,useNavigate} from 'react-router-dom'

import userImage from '../../../images/header/user.svg'
import arrowImage from '../../../images/header/arrow.svg'
import Hamburger from './Hamburger.jsx/Hamburger'

 const Header=({backCallBack})=>{
 const navigate=useNavigate();
const loacation=useLocation();
    return(
        <>
            <header className={styles.header}>
                {
                    loacation.pathname!=='/'?(  <button type='button' onClick={()=>navigate(-1)}>
                    <img src={arrowImage} alt="Auth1" />
                </button>)
                :(   <button type='button' onClick={()=>navigate('/auth')}>
                <img src={userImage} alt="Auth1" />
            </button>)
                }
        <Hamburger/>
            </header>
        </>
    )
}
export default Header;