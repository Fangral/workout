import React from 'react'
import ReactSelect from 'react-select'
import {Link} from 'react-router-dom'
import { useQuery } from 'react-query'
import { useMutation } from 'react-query'

import Alert from '../../ui/Alert/Alert'
import Loader from '../../ui/Loader'
import Layout from '../../common/Layout'
import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'
import { $api } from '../../../api/api'



function NewWorkout() {
const [name, setName]=React.useState('')
const [exercisesCurrent, setExercisesCurent]=React.useState([])

const {data,isSuccess}=useQuery('list exercise',()=>
$api({
    url:'/exercises',
    
}),
{
    refetchOnWindowFocus:false,

},
)

console.log(data)

const {
  mutate, 
  isLoading, 
  error,
  isSuccess:isSuccessMutate
} = useMutation('Create new workout',({exIds})=>
$api({
  url:'/workouts', 
  type:"POST", 
  body: {name, exercisesIds:exIds},
}),
{
  onSuccess(){
    setName('')
    setExercisesCurent([])
  }
}
)

const handleSubmit=(e)=>{
  e.preventDefault()
  const exIds=exercisesCurrent.map(ex=>ex.value)
mutate({
  exIds,
})
}
  return (
    <>
    <Layout bgImage={bgImage} heading='Create new Workout'/>

      <div className='wrapper-inner-page'>
      {error&& <Alert type={error} text={error}/>}
        {isSuccessMutate&& <Alert text='Workout created'/>}
        {(isLoading)&& <Loader/>}
        <form onSubmit={handleSubmit}>
          <Field type='text' placeholder="Enter name" value={name} onChange={e=>setName(e.target.value)}/>
          <Link to='/new-exercise' className='dark-link'>Add New Exercise</Link>
          {isSuccess && data &&
          <ReactSelect
          classNamePrefix='select2-selection'
          placeholder='Status...'
          title='Exercises'
          options={[
            data.map(ex=>({

                value: ex._id,
                label: ex.name


            }))
          ]}
          value={exercisesCurrent}
          onChange={setExercisesCurent}
          isMulti={true}
          />
          }
          <Button text='Create' callback={()=>{}} />
        </form>
      </div>

    </>
  )
}

export default NewWorkout