import React from "react";

const Movie = ({ movie }) => {
  //console.log(movie);
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span> {movie.Type}</span>
        <h3>{movie.Title}</h3>
        <h2>Test 11 Brch</h2>
      </div>
    </div>
  );
};

export default Movie;
