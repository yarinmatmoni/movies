import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Clock from '../../public/svg/clockSvg.svg';
import Date from '../../public/svg/dateSvg.svg';
import Star from '../../public/svg/starSvg.svg';
import { baseApiUrl, baseImageUrl } from '../../utils/urls';

async function MovieDetails({ params }: any) {

  const { movie } = params;
  const fetchData = await fetch(
    `${baseApiUrl}/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const results = await fetchData.json();

  return (
    <div className={styles.movieDetailsContainer}>
      <div className={styles.header}>
        <h1>{results.title}</h1>
        <div className={styles.item}>
          <Image src={Date} height={17} width={17} alt='date' />
          <p>{results.release_date}</p>
        </div>
        <div className={styles.item}>
          <Image src={Clock} height={17} width={17} alt='clock' />
          <p>{results.runtime} minutes</p>
        </div>
        <div className={styles.item}>
          <Image src={Star} height={17} width={17} alt='star' />
          <p>{results.vote_average.toFixed(1)} / 10</p>
        </div>
        <div className={styles.status}>
          <p>{results.status}</p>
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
      <p>{results.overview}</p>
    </div>
  )
}

export default MovieDetails;