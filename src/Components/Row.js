import React from "react";
import { useState, useEffect } from "react";
import "../Components/Banner.css";
import "./Row.css";
import axios from "../ultil/axios";
import requests from "../ultil/request";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(requests.fetchNetflixOriginals);
    if (res) {
      setMovie(res.data.results);
      return res;
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map(
          (item) =>
            ((isLargeRow && item.poster_path && item.backdrop_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLager"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
                key={item.id}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
