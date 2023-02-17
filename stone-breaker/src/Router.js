import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HardHddTool from './views/HardHddTool'
import LandingPage from './views/landingPage'
import MediumHddTool from './views/MediumHddTool'
import NormalHddToolList from './views/NormalHddToolList'
const Router = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/normal-tool' element={<NormalHddToolList/>}/>
        <Route path='/medium-tool' element={<MediumHddTool/>}/>
        <Route path='/hard-tool' element={<HardHddTool/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router