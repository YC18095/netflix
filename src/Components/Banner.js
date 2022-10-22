import React from "react";
import { useState, useEffect } from "react";
import "../Components/Banner.css";
import axios from "../ultil/axios";
import requests from "../ultil/request";

function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(requests.fetchNetflixOriginals);
    if (res) {
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const truncated = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncated(movie.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
