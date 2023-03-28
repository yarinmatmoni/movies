import React from "react";
import styles from "./movieCard.module.scss";
import Image from "next/image";
import Link from "next/link";
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
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
        {/* <p>{overview}</p>
        <p>{voteAverage}</p> */}
      </div>
      <div className={styles.imageContainer}>
        <Link href={'/'}>
          <Image
            src={baseImageUrl + imagePath}
            alt={title}
            fill
            priority
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default movieCard;
