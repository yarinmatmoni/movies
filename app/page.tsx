import styles from "./page.module.scss";
import MoviesContainer from "../components/MoviesContainer/MoviesContainer";
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
      <MoviesContainer data={results} />
    </div>
  );
}
