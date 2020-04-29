import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import PageTitle from "../../components/PageTitle";
import FilterMovie from "../../components/FilterMovie";

import { genres as genreList, qualities as qualityList } from "../../data";

function CatalogPage(props) {
  const [qualities, setQualities] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres(genreList);
    setQualities(qualityList);
  }, []);

  return (
    <React.Fragment>
      <PageTitle title="Catalog" location="Catalog grid" />
      <FilterMovie qualities={qualities} genreList={genres} />
    </React.Fragment>
  );
}

CatalogPage.propTypes = {};

export default CatalogPage;
