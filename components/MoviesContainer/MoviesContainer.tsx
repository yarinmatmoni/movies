import React from 'react';
import styles from './MoviesContainer.module.scss';
import MovieCard from "../../components/movieCard/movieCard";

function MoviesContainer({ data }: any) {
  return (
    <div className={styles.moviesContainer}>
      {data.map((movie: any) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imagePath={movie.poster_path}
        />
      ))}
    </div>
  )
}

export default MoviesContainer;