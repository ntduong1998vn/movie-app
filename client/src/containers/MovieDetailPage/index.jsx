import React from "react";
import TabsContainer from "../../components/TabsContainer/test";
import { comments, detailList, movie } from "../../data";
import { SingleMovie, SeriesMovie } from "../../components/MovieDetail";

function MoveDetailPage() {
  return (
    <React.Fragment>
      <SeriesMovie movie={movie} />
      <TabsContainer commentList={comments} sideCards={detailList} />
    </React.Fragment>
  );
}

export default MoveDetailPage;
