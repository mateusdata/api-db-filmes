import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Preload from "../../../components/preeload/preload";
import Topo from "../../../components/topo/topo";

export default function ProximosFIlmes() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(true);
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    setTimeout(() => {
    
    fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1"

         
      )
        .then((resposta) => resposta.json())
        .then((dados) => {
          /*const {id, poster_path} = dados.results[0]
          const movies = {
            id,
            poster_path
          }*/
          //console.log(movies.id)
          // console.log(dados.results);
          setMovies(dados.results);
          setLoad(false);
        });
    }, 350);
  }, []);
  return (

    <Topo>
      <div  className="mais-assistido">
      <h1 id="filmesMes">Em breve nos cinemas</h1>
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
    </Topo>
    
  );
}
