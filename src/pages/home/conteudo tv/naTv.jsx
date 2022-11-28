import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topo from "../../../components/topo/topo";

const NaTv = () => {
  const [movies, setMovies] = useState([]);
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=e586fac5b577e44076f604a3d0ca6a22&language=pt-BR&page=1"
    )
      .then((resposta) => resposta.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results)
      });
  }, []);

  return (
    <div>
      <Topo>
        <div className="mais-assistido">
          <h1 id="filmesMes">Passando na TV</h1>

          <ul>
            {movies.map((movies, index) => (
              <ul key={movies.id}>
                <li>
                  <Link to={`/natv/detalhes/id/${movies.id}`}>
                    <img src={`${image}${movies.poster_path}`} alt="sss" />
                  </Link>adssdadsa
                  <span>{movies.name}</span>
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </Topo>
    </div>
  );
};

export default NaTv;
