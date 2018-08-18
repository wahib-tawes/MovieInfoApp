import React from "react";

const MovieCard = props => {
  return (
    <div className="movie-container">
      <span className="star-container">{props.movieItem.stars}</span>
      <div className="movie-cover">
        <img src={props.movieItem.src} alt="img" />
      </div>
      <h3> Name : {props.movieItem.name}</h3>
      <p className="description">{props.movieItem.description}</p>
    </div>
  );
};

export default MovieCard;
