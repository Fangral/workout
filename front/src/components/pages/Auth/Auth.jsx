import React from 'react'


import Layout from '../../common/Layout'
import bgImage from '../../../images/auth-bg.png'
import Field from '../../ui/Field/Field'
import Button from '../../ui/Button/Button'
import styles from './Auth.module.scss'
import Alert from '../../ui/Alert/Alert'
import { useMutation } from 'react-query'
import {$api} from '../../../api/api'
import Loader from '../../ui/Loader'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'


function Auth() {
const [email, setEmail]=React.useState('')
const [password, setPassword]=React.useState('')
const [type, setType]=React.useState('auth') //auth||reg

const navigate=useNavigate();
const {setIsAuth}=useAuth();
const {
  mutate: register, 
  isLoading, 
  error,
  isSuccess 
} = useMutation('Registration',()=>
$api({
  url:'/users', 
  type:"POST", 
  body: {email,password}, 
  auth:false,
}),
{
  onSuccess(data){
    localStorage.setItem('token',data.token)
    setEmail('');
    setPassword('');
    setIsAuth(true);
    setTimeout(()=>{navigate('/')},3000);
  },
}
)
// React context auth
const handleSubmit=(e)=>{
  e.preventDefault()
  type==='auth'?
    console.log('auth')
    : register()
}

  return (
    <>
    <Layout bgImage={bgImage} heading='Auth || Registration'/>

      <div className='wrapper-inner-page'>
        {error && <Alert type='error' text={error} />}
        {isSuccess && <Alert type='isSuccess' text='Успешная регистрация' />}
        {isLoading && <Loader/>}
        <form onSubmit={handleSubmit}>
          <Field type='email' placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} required/>
          <Field type='password' placeholder="Enter password" value={password} onChange={({target:{value}})=>setPassword(value)} required/>
          <div className={styles.wrapperButtons}>
          <Button text='Sign in' callback={()=>setType('auth')} />
          <Button text='Sign up' callback={()=>setType('reg')} />
          </div>
        </form>
      </div>

    </>
  )
}

export default Auth