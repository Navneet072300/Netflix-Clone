import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId="1" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row rowId="2" title="Tranding" fetchURL={requests.requestMovie} />
      <Row
        rowId="3"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowId="4" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowId="5" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
