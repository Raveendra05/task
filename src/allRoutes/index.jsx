import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ApiFetch from '../component/apidata/api-fetch'
// import Header from '../layout/header'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<ApiFetch/>}/>
            {/* <Route path='/' element={<Header/>}/> */}
            
        </Routes>
    </div>
  )
}

export default AllRoutes