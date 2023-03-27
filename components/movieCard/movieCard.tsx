import React from "react";
import styles from "./movieCard.module.scss";
import Image from "next/image";
import { baseImageUrl } from '../../utils/urls';

function movieCard({
  title,
  overview,
  releaseDate,
  voteAverage,
  imagePath,
}: {
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  imagePath: string | null;
}) {

  return (
    <div className={styles.movieCardContainer}>
      <Image src={baseImageUrl + imagePath} alt={title} height={50} width={50}></Image>
      <h2>{title}</h2>
      <p>{releaseDate}</p>
      <p>{overview}</p>
      <p>{voteAverage}</p>
    </div>
  );
}

export default movieCard;
