import React from "react";
import styles from "./movieCard.module.scss";
import Image from "next/image";
import Link from "next/link";
import { baseImageUrl } from '../../utils/urls';

const movieCard = ({
  id,
  title,
  releaseDate,
  imagePath,
}: {
  id: string,
  title: string;
  releaseDate: string;
  imagePath: string | null;
}) =>

  <div className={styles.movieCardContainer}>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.releaseDate}>{releaseDate}</div>
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

export default movieCard;
