import React, { useEffect, useState } from 'react'
import requests from '../../requests';
import axios from '../../axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, [])

  console.log(movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <header 
    className='banner'
    style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: "center center",
    }}
    >
      <div className='banner-image'>
         {/* title */}
         <h1>
          {movie?.title || movie?.name || movie?.orignal_name}
         </h1>
         {/* div > 2 buttons */}
         <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
         </div>
         {/* description */}
         <h1 className="banner-discription">
          {truncate(movie?.overview, 150)}
         </h1>
      </div>
      <div className="banner-fadebottom" />
    </header>
  )
}

export default Banner
