import React from 'react'

import Layout from '../../common/Layout'
import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'
import styles from './NewWorkout.module.scss'



function NewWorkout() {
const [name, setName]=React.useState('')
//const [exercises, setExercises]=React.useState([])
const handleSubmit=()=>{
  console.log('submit')
}
  return (
    <>
    <Layout bgImage={bgImage}/>

      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <Field type='text' placeholder="Enter name" value={name} onChange={e=>e.target.value}/>
          <Field type='text' placeholder="Password" value={name} onChange={e=>e.target.value}/>
          {/* React select */}
          <Button text='Create' callback={()=>{}} />
        </form>
      </div>

    </>
  )
}

export default NewWorkout