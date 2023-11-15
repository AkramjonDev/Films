import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

function MovieList({ data }) {
  if (data === null) {
    return <Loader />;
  }
  return (
    <ul className="flex gap-3 flex-wrap  justify-evenly">
      {data &&
        data.map((movie) => {
          const { Title, Poster, Type, Year, imdbID } = movie;
          return (
            <li
              key={imdbID}
              className="card  border w-[300px] h-[auto] shadow-2xl mb-6"
            >
              <Link to={`/movie/${imdbID}`}>
                <figure>
                  <img
                    className="w-full h-[300px] object-cover rounded-2xl"
                    src={Poster}
                    alt={Title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-[15px]">Year: {Year}</h2>
                  <h1 className="text-[18px] font-bold">Title: {Title}</h1>
                  <h1 className="text-[15px]">Type: {Type}</h1>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default MovieList;
