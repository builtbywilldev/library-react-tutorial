import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'       
import Featured from '../components/Featured'   
import Discoutned from '../components/Discoutned'
import Explore from '../components/Explore'

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights/>
      <Featured />
      <Discoutned />
      <Explore />
      </>
  )
}

export default Home