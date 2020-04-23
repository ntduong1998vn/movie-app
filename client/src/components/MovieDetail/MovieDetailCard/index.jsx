import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

function MovieDetailCard({ movie }) {
  return (
    <div class="card card--details">
      <Row>
        {/* <!-- card cover --> */}
        <Col xs={12} sm={4} md={4} lg={3} xl={5}>
          <div class="card__cover">
            <img src={movie.poster} alt="" />
          </div>
        </Col>
        {/* <!-- end card cover --> */}

        {/* <!-- card content --> */}
        <Col xs={12} sm={8} md={8} lg={9} xl={7}>
          <div class="card__content">
            <div class="card__wrap">
              <span class="card__rate">
                <i class="icon ion-ios-star"></i>
                {movie.imdb}
              </span>

              <ul class="card__list">
                <li>{movie.resolution}</li>
                <li>{movie.limitAge}</li>
              </ul>
            </div>

            <ul class="card__meta">
              <li>
                <span>Genre:</span>
                {movie.genres.map((genre) => {
                  return <a href="#">{genre}</a>;
                })}
              </li>
              <li>
                <span>Release year:</span> {movie.release}
              </li>
              <li>
                <span>Running time:</span> {`${movie.time} min`}
              </li>
              <li>
                <span>Country:</span> <a href="#">{movie.country}</a>{" "}
              </li>
            </ul>

            <div class="card__description card__description--details">
              {movie.desc}
            </div>
          </div>
        </Col>
        {/* <!-- end card content --> */}
      </Row>
    </div>
  );
}

export default MovieDetailCard;
