import React from "react";
import { Link } from "react-router-dom";
import "../style/Movie.css"

export const Movie = ({id, year, title, summary,poster,genres}) => {
  return (
    <div className="movie">
      <Link 
      to= {{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }} 
      >
      
      <img src = {poster} alt = {title} title={title} />
      <div className="movie__column">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return (
            <li key = {index} className="genres__genre">
            {genre}
            </li>
            );
          })}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
      </Link>
    </div>

  )
}

export default Movie