import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import Topo from "../topo/topo";
const DetalhesTv = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState({});
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      //"https://api.themoviedb.org/3/movie/popular?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1"
      //`https://api.themoviedb.org/3/movie/${id}?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1&language=pt-BR`
      `https://api.themoviedb.org/3/tv/${id}?api_key=e586fac5b577e44076f604a3d0ca6a22&language=pt-BR&page=1`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        //usando desestruturação
        const { name, poster_path, overview, last_air_date } = dados; //desestruturando o objeto
        const movie = {
          id,
          titulo: name,
          sinopse: overview,
          imagem: `${image}${poster_path}`,
          lancamento: last_air_date,
        };
        //console.log(dados);
        setMovies(movie);
      });
  }, [id, image]);

  //console.log(id);
  return (
    <Topo>
      <div className="movie">
        <img className="img" src={movie.imagem} alt={movie.titulo} />
        <div className="detalhes">
          <h1>{movie.titulo}</h1>
          <span className="lancamento">
            Data de lançamento: {movie.lancamento}
          </span>
          <span className="sinop">Sinopse: {movie.sinopse}</span>
          <Link to="/natv">
            {" "}
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </Topo>
  );
};

export default DetalhesTv;
