import { useState } from "react";
import MovieList from "../components/MovieList";
import { useFetch } from "../hooks/useFetch";
import Loader from "../components/Loader";

function Home() {
  const [nameMovie, setNameMovie] = useState("transformers");
  const [newMovie, setNewMovie] = useState("");
  const { data, isPending } = useFetch(
    `https://www.omdbapi.com/?s=${nameMovie}&apikey=c2062f5b`
  );
  const handleInput = (e) => {
    e.preventDefault();
    if (nameMovie === "") {
      setNameMovie("don");
    } else {
      setNameMovie(newMovie);
    }
  };
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.removeItem("signUp");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.reload();
  };
  if (isPending === true) {
    return <Loader />;
  }
  return (
    <div>
      <div className="flex gap-3 justify-between flex-wrap form-wrapper">
        <form onSubmit={handleInput} className="flex items-center gap-2 mb-5">
          <input
            onChange={(e) => setNewMovie(e.target.value)}
            type="text"
            placeholder="Search for movies"
            className="input input-bordered input-info w-full max-w-xs bg-transparent"
          />
          <button className="btn btn-primary">
           Search
          </button>
        </form>
        <div className="flex gap-2 mb-5">
          <button onClick={logout} className="btn btn-success">
            Log Out 
          </button>
          <button onClick={deleteAccount} className="btn btn-success">
            Delete Account 
          </button>
        </div>
      </div>
      <h1 className="text-3xl mb-5">Movies</h1>
      <MovieList data={data && data.Search} />
    </div>
  );
}

export default Home;
