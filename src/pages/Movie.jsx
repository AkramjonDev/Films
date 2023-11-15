import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

function Movie() {
  const { imdbID } = useParams();
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=c2062f5b`;
  const { data, isPending, error } = useFetch(url);
  console.log(data);

  if (data === null) {
    return <Loader />;
  }
  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Language,
    Country,
    Poster,
    imdbRating,
    imdbID: ID,
    Type,
  } = data;
  return (
    <div>
      <div
        className="card h-[auto] border lg:w-[70%] md:w-[80%] sm:flex mx-auto
       card-side bg-base-100 shadow-2xl gap-16 pr-3"
      >
        <img src={Poster} alt="Movie" className="rounded-xl object-cover" />

        <div className="pt-5 pb-5 content">
          <h2 className="text-3xl my-2">
            Title: <q>{Title}</q>
          </h2>
          <p className="my-2 text-[18px]">
            Year : <q>{Year}</q>
          </p>
          <p className="my-2 text-[18px]">
            length of movie: <q>{Runtime}utes</q>
          </p>
          <p className="my-2 text-[18px]">
            Genre of movie: <q>{Genre} </q>
          </p>
          <p className="my-2 text-[18px]">
            Director: <q>{Director} </q>
          </p>
          <p className="my-2 text-[18px]">
            Languages: <q>{Language} </q>
          </p>
          <p className="my-2 text-[18px]">
            imdbRating: <q>{imdbRating} </q>
          </p>
          <p className="my-2 text-[18px]">
            Type: <q>{Type} </q>
          </p>
          <p className="my-2 text-[18px]">
            Country: <q>{Country} </q>
          </p>
          <p className="my-2 text-[18px]">
            Released Date: <q>{Released} </q>
          </p>
          <p className="my-2 text-[18px]">
            Writer : <q>{Writer} </q>
          </p>

          <div className="card-actions justify-end">
            <Link to={"/"} className="btn btn-primary">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
