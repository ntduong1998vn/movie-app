/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

function SideCard({ poster, title, genres, imdb }) {
  return (
    <div className="col-6 col-sm-4 col-lg-6">
      <div className="card">
        <div className="card__cover">
          <img src={poster} alt="" />
          <a href="#" className="card__play">
            <i className="icon ion-ios-play"></i>
          </a>
        </div>
        <div className="card__content">
          <h3 className="card__title">
            <a href="#">{title}</a>
          </h3>
          <span className="card__category">
            {genres.map((item, index) => {
              return (
                <a href="#" key={index}>
                  {item}
                </a>
              );
            })}
          </span>
          <span className="card__rate">
            <i className="icon ion-ios-star"></i>
            {imdb}
          </span>
        </div>
      </div>
    </div>
  );
}

SideCard.prototype = {
  poster: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  imdb: PropTypes.number,
};

export default SideCard;
