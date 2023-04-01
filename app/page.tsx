import styles from "./page.module.scss";
import MoviesContainer from "../components/MoviesContainer/MoviesContainer";
import { baseApiUrl } from '../utils/urls';

const Home = async () => {
  const fetchData = await fetch(
    `${baseApiUrl}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  );
  const { results } = await fetchData.json();

  // Sort by date
  // const sortedData = results.sort((a: any, b: any) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()); 

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

export default Home;