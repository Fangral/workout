import React from 'react'

import bgImage from '../../../images/workout-bg.jpg'

import { useQuery } from 'react-query'
import {$api} from '../../../api/api'
import Header from '../../common/Header/Header'
import Alert from '../../ui/Alert/Alert'

import stylesLayout from '../../common/Layout.module.scss'
import styles from './SingleWorkout.module.scss'
import { useParams, Link } from 'react-router-dom'


const SingleWorkout = () => {
  const {id}=useParams()
  
  const {data,isSuccess,error}=useQuery('get workout',()=>
  $api({
      url:`/workouts/${id}`,
  }))

  return (
    <>
    <div className={`${stylesLayout.wrapper} ${stylesLayout.otherPage}`} style={{ backgroundImage:`url(${bgImage})`, height:356}}>
        <Header/>
        {isSuccess && (
        <div>
        <time className={styles.time}>{data.minutes+' min'}</time>
        <h1 className={stylesLayout.heading}>{data.name}</h1>
        </div>
        )}
    </div>
    <div className='wrapper-inner-page' style={{paddingLeft:0, paddingRight:0}}>
        {isSuccess && (
        <div className={styles.wrapper}>
          {data.exercises.map((ex,idx)=>{
          return(
            <>
            <div className={styles.item} key={idx}>
              <Link to={`/exercises/${ex._id}`}>
              <span>{ex.name}</span>
              <img src={`/uploads/exercises/${ex.imageName}.svg`} alt="icon_exercise" height='34' />
              </Link>
            </div>
            {idx % 2!==0 && <div className={styles.line}></div>}
            </>
          )
          })}
        </div>
        )}
        {error && <Alert type="warning" text="Exercises not found"/>
        }
    </div>
    </>
  )
}

export default SingleWorkout