import Head from 'next/head'
import styles from './startPage.module.scss'
import Image from 'next/image'
import arrow from '../public/images/arrow.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ingrii</title>
        <meta 
          name="description"
          content="Make your baking and cooking easier by converting your measurements or find a substitute ingredient"
        />
      </Head>
      <div className={styles.imageWrapper}>
        <Image 
          src={arrow}
          width={20}
          height={20}
        />
      </div>
      <div className={styles.clickAlternative}>
          <p>Click one of the alternatives above to start!</p>
      </div>
        <div className={styles.centerStartPage}>
          <div className={styles.startTextContainer}>
            <p className={styles.welcome}>Welcome to ingrii!</p>
            <h1 className={styles.frontText}>Your Cooking and Baking<br/> Recipe Converter</h1>
            <p className={styles.missionText}>We want to create connections between cultures and people, by simplifying for those who love to cook and bake.</p>
          </div>
      </div>
    </>
  )
}
