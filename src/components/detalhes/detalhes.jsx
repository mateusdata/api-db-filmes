import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
const Detalhes = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState({});
  let image = "https://image.tmdb.org/t/p/w500";
  useEffect(() => {
    fetch(
      //"https://api.themoviedb.org/3/movie/popular?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1"
      `https://api.themoviedb.org/3/movie/${id}?api_key=e586fac5b577e44076f604a3d0ca6a22&language=en-US&page=1&language=pt-BR"`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        //usando desestruturação
        const { title, poster_path, overview, release_date } = dados; //desestruturando o objeto
        const movie = {
          id,
          titulo: title,
          sinopse: overview,
          imagem: `${image}${poster_path}`,
          lancamento: release_date,
        };
        console.log(dados.overview);
        setMovies(movie);
      });
  }, [id, image]);

  console.log(id);
  return (
    <div className="movie">
      <img className="img" src={movie.imagem} alt={movie.titulo} />
        <div className="detalhes">
          <h1>{movie.titulo}</h1>
          {movie.overview ==='' ? <span> { "Sinopse:" + movie.sinopse}</span> : false }
          <span className="lancamento">Data de lançamento: {movie.lancamento}</span>
         <Link to="/"> <button >Voltar</button></Link>
         
        </div>
    </div>
  );
};

export default Detalhes;
