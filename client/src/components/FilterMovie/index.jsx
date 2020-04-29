import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Dropdown } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.min.css";
import wNumb from "wnumb";

function FilterMovie({ genreList, qualities }) {
  function handleMenuItemClick(e) {
    let menuId = e.target.closest(".filter__item").getAttribute("id");
    document.querySelector(`#${menuId} .filter__item-btn input`).value =
      e.target.textContent;
  }

  const handleUpdateSlider = (index) => (
    render,
    handle,
    value,
    un,
    percent
  ) => {
    let firstValues = [
      document.getElementById("filter__imbd-start"),
      document.getElementById("filter__imbd-end"),
    ];
    let secondValues = [
      document.getElementById("filter__years-start"),
      document.getElementById("filter__years-end"),
    ];
    let sliders = [firstValues, secondValues];
    sliders[index][handle].innerHTML = value[handle];
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="filter__content">
              <div className="filter__items">
                {/* <!-- filter item --> */}

                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__quality">
                  <span className="filter__item-label">QUALITY:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn"
                    role="navigation"
                    id="filter-quality"
                  >
                    <input type="button" value="HD 1080" />
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter__item-menu scrollbar-dropdown">
                    {qualities.map((quality) => (
                      <li
                        key={quality.id}
                        data-value={quality.name.toLowerCase()}
                        onClick={handleMenuItemClick}
                      >
                        {quality.name}
                      </li>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__rate">
                  <span className="filter__item-label">IMBd:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn"
                    id="filter__rate"
                  >
                    <div className="filter__range">
                      <div id="filter__imbd-start"></div>
                      <div id="filter__imbd-end"></div>
                    </div>
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter__item-menu filter__item-menu--range">
                    {/* <div id="filter__imbd"></div> */}
                    <Nouislider
                      id="#filter__years"
                      range={{ min: 0, max: 10 }}
                      step={0.1}
                      connect={true}
                      start={[2.5, 8.6]}
                      format={wNumb({ decimals: 1 })}
                      onUpdate={handleUpdateSlider(0)}
                    />
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}

                {/* <!-- filter item --> */}
                <Dropdown className="filter__item" id="filter__year">
                  <span className="filter__item-label">RELEASE YEAR:</span>

                  <Dropdown.Toggle
                    className="filter__item-btn "
                    role="button"
                    id="filter-year"
                  >
                    <div className="filter__range">
                      <div id="filter__years-start"></div>
                      <div id="filter__years-end"></div>
                    </div>
                    <span></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="filter__item-menu filter__item-menu--range">
                    {/* <div id="filter__years"></div> */}
                    <Nouislider
                      range={{ min: 2000, max: 2020 }}
                      step={1}
                      connect={true}
                      start={[2005, 2015]}
                      format={wNumb({ decimals: 0 })}
                      onUpdate={handleUpdateSlider(1)}
                    />
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- end filter item --> */}
              </div>

              {/* <!-- filter btn --> */}
              <button className="filter__btn" type="button">
                apply filter
              </button>
              {/* <!-- end filter btn --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FilterMovie.propTypes = {};

export default FilterMovie;
