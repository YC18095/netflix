import React from "react";
import "../Components/HomeScreen.css";
import requests from "../ultil/request";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Row from "./Row";
import {useLocation} from 'react-router-dom'

function HomeScreen() {
  let location = useLocation()
  console.log('LOCATION HOME SCREEN', location)
  return (
    <div className="home_screen">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default HomeScreen;
