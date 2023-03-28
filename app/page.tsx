import styles from "./page.module.scss";
import MovieCard from "../components/movieCard/movieCard";
import { baseApiUrl } from '../utils/urls';

export default async function Home() {

  const fetchData = await fetch(
    `${baseApiUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const { results } = await fetchData.json();

  return (
    <div className={styles.homePageContainer}>
      <div className={styles.titles}>
        <h1>Movie App</h1>
        <p>inManage</p>
      </div>
      <div className={styles.moviesContainer}>
        {results.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            imagePath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
