/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function MovieCard({ movie, size = "normal" }) {
  return (
    <div className={`card ${size === "lg" ? "card--big" : null}`}>
      <div className="card__cover">
        <img src={movie.poster} alt="" />
        <a href="#" className="card__play">
          <i className="icon ion-ios-play"></i>
        </a>
      </div>
      <div className="card__content">
        <h3 className="card__title">
          <a href="#">{movie.title}</a>
        </h3>
        <span className="card__category">
          {movie.genres.map((genre) => {
            return (
              <a href="#" key={genre.id}>
                {genre.name}
              </a>
            );
          })}
        </span>
        <span className="card__rate">
          <i className="icon ion-ios-star"></i>
          {movie.imdb}
        </span>
      </div>
    </div>
  );
}

MovieCard.prototype = {
  movie: PropTypes.object.isRequired,
  size: PropTypes.string,
};

// MovieCard.defaultProps = {};

export default MovieCard;
