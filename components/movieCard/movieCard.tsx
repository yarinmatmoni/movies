import React from "react";
import styles from "./movieCard.module.scss";

function movieCard({
  title,
  overview,
  releaseDate,
  voteAverage,
  image,
}: {
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  image: string | null;
}) {
  return (
    <div className={styles.movieCardContainer}>
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
}

export default movieCard;
