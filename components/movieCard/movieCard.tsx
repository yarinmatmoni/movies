import React from "react";
import styles from "./movieCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { baseImageUrl } from '../../utils/urls';

function movieCard({
  id,
  title,
  releaseDate,
  imagePath,
}: {
  id: string,
  title: string;
  releaseDate: string;
  imagePath: string | null;
}) {

  return (
    <div className={styles.movieCardContainer}>
      <div className={styles.info}>
        <h2>{title}</h2>
        <p>{releaseDate}</p>
      </div>
      <Link href={`/${id}`}>
        <div className={styles.imageContainer}>
          <Image
            src={baseImageUrl + imagePath}
            alt={title}
            fill
          ></Image>
        </div>
      </Link >
    </div >
  );
}

export default movieCard;
