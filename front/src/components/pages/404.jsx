import React from 'react'
import Layout from '../common/Layout'
import bgImage from '../../images/new-workout-bg.jpg'



function Error404() {
  return (
    <>
    <Layout bgImage={bgImage} heading=' '/>
      <div className='wrapper-inner-page'>
        404 page not found
      </div>

    </>
  )
}

export default Error404