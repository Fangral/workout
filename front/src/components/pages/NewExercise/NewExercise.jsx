import React from 'react'
import cn from 'classnames'

import Layout from '../../common/Layout'
import bgImage from '../../../images/new-exercise-bg.jpg'
import Field from '../../ui/Field/Field'

import Alert from '../../ui/Alert/Alert'
import Loader from '../../ui/Loader'
import Button from '../../ui/Button/Button'
import styles from './NewExercise.module.scss'

import { $api } from '../../../api/api'
import { useMutation } from 'react-query'

const data = [
  'chest','shoulders','biceps', 'legs','hit'
]

function NewExercise() {
const [name, setName]=React.useState('')
const [times, setTimes]=React.useState(0)
const [imageName, setImageName]=React.useState('chest')

const {
  mutate, 
  isLoading, 
  error,
  isSuccess 
} = useMutation('Create new exercise',()=>
$api({
  url:'/exercises', 
  type:"POST", 
  body: {name,times, imageName}, 
}),
{
  onSuccess(data){
    console.log(data)
    setName('')
    setTimes('')
    setImageName('chest')
  },
}
)

const handleSubmit=(e)=>{
  e.preventDefault()
  if(name && times && imageName)
  mutate()

}
  return (
    <>
    <Layout bgImage={bgImage} heading='Create new Exercise'/>

      <div className='wrapper-inner-page'>
        {error&& <Alert type={error} text={error}/>}
        {isSuccess&& <Alert text='Exercise created'/>}
        {(isLoading)&& <Loader/>}
        <form onSubmit={handleSubmit}>
          <Field 
          type='text' 
          placeholder="Enter name" 
          value={name} 
          onChange={e=>setName(e.target.value)}
          required
          />
          <Field 
          type='text' 
          placeholder="Enter times" 
          value={times} 
          onChange={e=>setTimes(e.target.value)}
          required
          />
          <div className={styles.images}>
            {data.map(name=>(
              
              <img key={`ex_${name}`} src={`/uploads/exercises/${name}.svg`} alt={name} className={cn({
                [styles.active]:imageName===name
              })}
              onClick={()=>
                setImageName(name)
              }
              />
            ))}
            
          </div>
          <Button text='Create' callback={()=>{}} />
        </form>
      </div>

    </>
  )
}

export default NewExercise