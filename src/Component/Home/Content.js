import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './Content.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Content(props) {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  // console.log(movies)

  return (
    <div className='content'>

      <h2>{props.title}</h2>

      <div className='content-images'>
        {movies?.map((movie) => (
          <img 
          key={movie.id}
          className={`content-image ${props.isLargeRow && "content-largeImage"}`}
          src={`${base_url}${props.isLargeRow? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Content;
