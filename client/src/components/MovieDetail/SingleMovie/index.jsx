import React from "react";
import PlyrPlayer from "../../PlyrPlayer";
import MovieDetailCard from "../MovieDetailCard";
import { Col, Row } from "react-bootstrap";

function SingleMovie({ movie }) {
  return (
    <section class="section details">
      {/* <!-- details background --> */}
      <div class="details__bg" data-bg="img/home/home__bg.jpg"></div>
      {/* <!-- end details background --> */}

      {/* <!-- details content --> */}
      <div class="container">
        <Row>
          <MovieDetailCard single={true} movie={movie} />

          {/* <!-- player --> */}
          <Col xs={12} xl={6}>
            <PlyrPlayer />
          </Col>
          {/* <!-- end player --> */}

          <Col xs={12}>
            <div class="details__wrap">
              {/* <!-- availables --> */}
              <div class="details__devices"></div>
              {/* <!-- end availables --> */}

              {/* <!-- share --> */}
              <div class="details__share">
                <span class="details__share-title">Share with friends:</span>

                <ul class="details__share-list">
                  <li class="facebook">
                    <a href="#">
                      <i class="icon ion-logo-facebook"></i>
                    </a>
                  </li>
                  <li class="instagram">
                    <a href="#">
                      <i class="icon ion-logo-instagram"></i>
                    </a>
                  </li>
                  <li class="twitter">
                    <a href="#">
                      <i class="icon ion-logo-twitter"></i>
                    </a>
                  </li>
                  <li class="vk">
                    <a href="#">
                      <i class="icon ion-logo-vk"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- end share --> */}
            </div>
          </Col>
        </Row>
      </div>
      {/* <!-- end details content --> */}
    </section>
  );
}

export default SingleMovie;
