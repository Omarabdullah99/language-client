import React from 'react'
import Lessons from '../components/Home/Lessons'
import Tutorials from '../components/Home/Tutorials'
import Banner from '../components/Home/Banner'


const Home = () => {
  return (
    <div>
      <Banner  />
      <Lessons />
      <Tutorials />
    </div>
  )
}

export default Home