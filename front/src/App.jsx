import React from 'react'
import {BrowserRouter, Routes, Route,} from 'react-router-dom'
import Error404 from './components/pages/404.jsx'
import OnlyAuth from './components/pages/OnlyAuth.jsx'
import { useAuth } from './hooks/useAuth.js'
import { routes } from './routes.js'

 const App = () => {
  const {isAuth}=useAuth();
  return (
  <BrowserRouter>
      <Routes>

        {routes.map((route,key)=>
        {
          if(route.auth&&!isAuth)
            return   <Route path={route.path}  element={<OnlyAuth/>} key={key} />

        return(
           <Route 
           path={route.path} 
           exact={route.exact} 
           element={<route.component/>} 
           key={key}/>
           )
        } 
        )}
            <Route path='*' element={<Error404/>} />
      </Routes>
  </BrowserRouter>
        

  )
}
export default App;