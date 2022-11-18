import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Preload from "../../../components/preeload/preload";
//import Preload from "../../../components/preeload/preload";

export default function MaisAssistido() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    setTimeout(() => {
      fetch(
       // "https://api.themoviedb.org/3/movie/upcoming?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1&language=en-US&page=1"
      );

      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=e586fac5b577e44076f604a3d0ca6a22&language=pt-BR&page=1"
      )
        .then((resposta) => resposta.json())
        .then((dados) => {
          console.log(dados.results);
          setMovies(dados.results);
          setLoad(false);
        });
        
    }, 500);
  }, []);
  return (
    <div className="mais-assistido">
      <h1>Filmes mais assistidos nesse mês</h1>
      {load ? <Preload /> : false}
      <ul>
        {movies.map((movies, index) => (
          <ul key={movies.id}>
            <li>
              <Link to={`/detalhes/${movies.id}`}>
                <img src={`${image}${movies.poster_path}`} alt="sss" />
              </Link>
             
              <span>{movies.title}</span>
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
