import React from "react";

function MovieDetailCard({ movie }) {
  return (
    <div className="card card--list">
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="card__cover">
            <img src={movie.poster} alt="" />
            <a href="#" className="card__play">
              <i className="icon ion-ios-play"></i>
            </a>
          </div>
        </div>

        <div className="col-12 col-sm-8">
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

            <div className="card__wrap">
              <span className="card__rate">
                <i className="icon ion-ios-star"></i>
                {movie.imdb}
              </span>

              <ul className="card__list">
                <li>{movie.resolution}</li>
                {movie.limitAge === "NoLimit" ? null : (
                  <li>{movie.limitAge}</li>
                )}
              </ul>
            </div>

            <div className="card__description">
              <p>{movie.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailCard;
