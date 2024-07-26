import React from "react";
import "./MovieList.css";

const movies = [
  { id: 1, title: "Blade Runner 2045", img: "img1.webp" },
  { id: 2, title: "Avengers Endgame", img: "img2.jpg" },
  { id: 3, title: "Shadow And Bone", img: "img3.jpg" },
  { id: 4, title: "Alone", img: "img4.webp" },
];

function MovieList({ onMovieClick }) {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>select Movie</h3>
      <div className="movie-list">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-item"
            onClick={() => onMovieClick(movie)}
          >
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
