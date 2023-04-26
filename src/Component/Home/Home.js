import React from 'react'
import Content from './Content';
import Nav from './Nav';
import Banner from './Banner';
import requests from '../../requests';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Nav/>
      <Banner/>
      <Content title="ORIGNALS" fetchUrl={requests.fetchJioFlixOrignals} isLargeRow/>
      <Content title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Content title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Content title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Content title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Content title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Content title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Content title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default Home
