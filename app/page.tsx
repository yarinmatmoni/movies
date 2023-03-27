import styles from "./page.module.scss";
import MovieCard from "../components/movieCard/movieCard";
import { baseApiUrl } from '../utils/urls';

export const metadata = {
  title: "Movies App | inManage",
};

export default async function Home() {
  const data = await fetch(
    `${baseApiUrl}/movie/popular?api_key=${process.env.API_KEY}`
  );
  const { results } = await data.json();
  return (
    <div className={styles.homePageContainer}>
      <h1>Welcome</h1>
      {results.map((movie: any) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          imagePath={movie.poster_path}
        />
      ))}
    </div>
  );
}
