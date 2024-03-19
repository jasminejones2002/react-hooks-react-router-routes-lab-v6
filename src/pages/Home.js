import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(error => console.log("Error:", error))
  }, [])

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} id={movie.id} title={movie.title} />
  })
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
