import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function MaisAssistido() {
  const [movies, setMovies] = useState([]);
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1&language=en-US&page=1"
    )

    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e586fac5b577e44076f604a3d0ca6a22&language=pt-BR&page=1"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados.results);
        setMovies(dados.results);
      });
  }, []);
  return (
    <div className="mais-assistido">
      <h1>Filmes mais assistido nesse mês</h1>
      <ul>
        {movies.map((movies, index) => (
          <ul key={movies.id}>
            <li>
            <Link to={`/detalhes/${movies.id}`}><img src={`${image}${movies.poster_path}`} alt="sss" /></Link>
              <span>{movies.title}</span>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
