import React from 'react';
import styles from './MoviesContainer.module.scss';
import MovieCard from "../../components/movieCard/movieCard";
import { movieType } from '../../types/types';

const MoviesContainer = ({ data }: { data: movieType[] }) =>
  <div className={styles.moviesContainer}>
    {data.map((movie: movieType) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        imagePath={movie.poster_path}
      />
    ))}
  </div>

export default MoviesContainer;