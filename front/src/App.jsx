import React from 'react'
import Home from './components/pages/Home/Home.jsx'
//import Layout from './components/common/Layout.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewWorkout from './components/pages/NewWorkout/NewWorkout.jsx'

 const App = () => {
  return (
  <BrowserRouter>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/new-workout' element={<NewWorkout/>}/>
      </Routes>
  </BrowserRouter>
        

  )
}
export default App;