import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const movies_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map(
          (moviee) =>
            ((isLargeRow && moviee.poster_path) ||
              (!isLargeRow && moviee.backdrop_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={moviee.id}
                src={`${movies_url}${
                  isLargeRow ? moviee.poster_path : moviee.backdrop_path
                }`}
                alt={moviee.name}
              />
            )
        )}
      </div>
    </div>
  );
}
export default Row;
