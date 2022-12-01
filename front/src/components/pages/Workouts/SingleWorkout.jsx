import React, { Fragment } from 'react'

import bgImage from '../../../images/workout-bg.jpg'

import { useMutation, useQuery } from 'react-query'
import {$api} from '../../../api/api'
import Header from '../../common/Header/Header'
import Alert from '../../ui/Alert/Alert'
import Loader from '../../ui/Loader'

import stylesLayout from '../../common/Layout.module.scss'
import styles from './SingleWorkout.module.scss'
import { useParams, useNavigate } from 'react-router-dom'


const SingleWorkout = () => {
  const {id}=useParams()
  const navigate=useNavigate();

  const {data,isSuccess}=useQuery('get workout',()=>
  $api({
      url:`/workouts/${id}`,
  }))

  const {
    mutate, 
    isLoading, 
    error,
    isSuccess:isSuccessMutate
  } = useMutation('Create new ex log',({exId,times})=>
  $api({
    url:'/exercises/log', 
    type:"POST", 
    body: {exerciseId:exId,times}, 

  }),
  {
    onSuccess(data){
      navigate(`/exercise/${data._id}`)
    },
  }
  )

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
        {error && <Alert type='error' text={error}/>}
        {isSuccessMutate&& <Alert text='Exercise log created'/>}
        {(isLoading)&& <Loader/>}
        
        {isSuccess ? (
        <div className={styles.wrapper}>
          {data.exercises.map((ex,idx)=>{
          return(
            <Fragment key={`workout ${idx}`}>
            <div className={styles.item} >
              <button aria-label='move to exercise' onClick={()=>{mutate({exId:ex._id,times:ex.times})}}>
              <span>{ex.name}</span>
              <img src={`/uploads/exercises/${ex.imageName}.svg`} alt="icon_exercise" height='34' />
              </button>
            </div>
            {idx % 2!==0 && <div className={styles.line}></div>}
            </Fragment>
          )
          })}
        </div>
        ):<Alert type="warning" text="Exercises not found"/>}
       
    </div>
    </>
  )
}

export default SingleWorkout