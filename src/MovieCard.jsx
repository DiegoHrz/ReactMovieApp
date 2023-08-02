import React from 'react';

const MovieCard = ({ movie}) =>{
    return(
        <div className="movie">
          <div>
            <p>{movie.l}</p>
          </div>
          <div>
            <img src={movie.i.imageUrl} alt="" srcset="" />
          </div>

          <div>
            <span>{movie.rank}</span>
            <h3>{movie.q}</h3>
          </div>
        </div>
    );
};

export default MovieCard