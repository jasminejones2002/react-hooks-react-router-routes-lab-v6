import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  })

  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map(actor => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <li>{actor.movies}</li>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;
