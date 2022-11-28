import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topo from "../../../components/topo/topo";

const MelhorClassificacao = () => {
  const [movies, setMovies] = useState([]);
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=e586fac5b577e44076f604a3d0ca6a22&language=pt-BR&page=1"
    )
      .then((resposta) => resposta.json())
      .then((data) => {
        setMovies(data.results)
        console.log(data.results);
      });
     
  }, []);

  return (
    <div>
      <Topo>
        <div className="mais-assistido">
          <h1 id="filmesMes">Melhor classificação</h1>

          <ul>
            {movies.map((movies, index) => (
              <ul key={movies.id}>
                <li>
                  <Link to={`/classificacao/detalhes/id/${movies.id}`}>
                    <img src={`${image}${movies.poster_path}`} alt="sss" />
                  </Link>
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

export default MelhorClassificacao;
