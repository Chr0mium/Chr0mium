import React from 'react'
import Content from './Content';
import Nav from './Nav';
import Banner from './Banner';

function Home() {
  return (
    <div className='home'>
      <Nav/>
      <Banner/>
      <Content/>
    </div>
  )
}

export default Home
