import Layout from "../../common/Layout.jsx";
import Button  from "../../ui/Button/Button.jsx";
import Counters from '../../ui/Counters/Counters' 
import styles from './Home.module.scss'
import bgImage from '../../../images/home-bg.jpg'
import {useNavigate} from 'react-router-dom'
import { useQuery } from "react-query";
import { $api } from "../../../api/api.js";
import { useAuth } from "../../../hooks/useAuth.js";



const Home=()=>{
    const navigate=useNavigate();
    const {isAuth}=useAuth();

    const {data,isSuccess}=useQuery('Home page Counters',()=>
    $api({
        url:'/users/profile',
    }),
    {
        refetchOnWindowFocus:false,
        enabled:isAuth
    }
    )

    return(

        <Layout bgImage={bgImage}>
            <Button text={!isAuth?'Login/Reg':'New'} type='main' callback={isAuth?()=>navigate('/new-workout'):()=>navigate('/auth')}/> 
            <h1 className={styles.heading}>Exercies for the shoulders</h1>
           {isSuccess && isAuth && <Counters minutes={data.minutes} workouts={data.workouts} kgs={data.kgs}/>}
        </Layout>

    )
}
export default Home;