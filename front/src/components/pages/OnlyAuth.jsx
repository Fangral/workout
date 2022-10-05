import React from 'react'
import Layout from '../common/Layout'
import bgImage from '../../images/new-workout-bg.jpg'



function OnlyAuth() {
  return (
    <>
    <Layout bgImage={bgImage} heading=' '/>
      <div className='wrapper-inner-page'>
        Page success only for auth users
      </div>

    </>
  )
}

export default OnlyAuth