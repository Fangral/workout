import React from 'react'

import bgImage from '../../../images/workout-bg.jpg'

import { useQuery } from 'react-query'
import {$api} from '../../../api/api'
import Alert from '../../ui/Alert/Alert'
import Layout from '../../common/Layout'

import styles from './SingleWorkout.module.scss'
import { Link } from 'react-router-dom'


const ListWorkout = () => {

    const {data,isSuccess,isError}=useQuery('get workout',()=>
    $api({
        url:`/workouts`,
    }))



  return (
    <>
    <Layout bgImage={bgImage} heading='Workout List'/>
    <div className='wrapper-inner-page' style={{paddingLeft:0, paddingRight:0}}>
        {isSuccess && (
        <div className={styles.wrapper}>
          {data.map((wk,idx)=>(
            <div className={styles.item} key={idx}>
              <Link to={`/workout/${wk._id}`}>
              <span>{wk.name}</span>
              </Link>
            </div>
))}
        </div>
        )}
        {isError && <Alert type="warning" text="Workouts not found"/>
        }
    </div>
    </>
  )
}

export default ListWorkout