import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Clock from '../../public/svg/clockSvg.svg';
import Date from '../../public/svg/dateSvg.svg';
import Star from '../../public/svg/starSvg.svg';
import { baseApiUrl, baseImageUrl } from '../../utils/urls';
import { movieIdType } from '../../types/types';

const MovieDetails = async ({ params }: movieIdType) => {

  const { movieId } = params;
  const fetchData = await fetch(
    `${baseApiUrl}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const results = await fetchData.json();

  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.header}>
        <h1>{results.title}</h1>
        <div className={styles.item}>
          <Image src={Date} height={17} width={17} alt='date' />
          <div className={styles.itemData}>{results.release_date}</div>
        </div>
        <div className={styles.item}>
          <Image src={Clock} height={17} width={17} alt='clock' />
          <div className={styles.itemData}>{results.runtime} minutes</div>
        </div>
        <div className={styles.item}>
          <Image src={Star} height={17} width={17} alt='star' />
          <div className={styles.itemData}>{results.vote_average?.toFixed(1)} / 10</div>
        </div>
        <div className={styles.status} data-status={results.status}>
          <p className={styles.statusData}>{results.status}</p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={baseImageUrl + results.backdrop_path}
          alt='game image'
          fill
          priority
        />
      </div>
      <div>{results.overview}</div>
    </div>
  )
}

export default MovieDetails;