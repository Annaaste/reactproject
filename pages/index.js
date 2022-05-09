import Head from 'next/head'
import styles from './startPage.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ingrii</title>
        <meta 
          name="description"
          content="Här står det info som kan synas på Google om just den här sidan"
        />
      </Head>
      <div className={styles.clickAlternative}>
          <p>Click one of the alternatives above to start!</p>
      </div>
        <div className={styles.centerStartPage}>
          <div className={styles.startTextContainer}>
            <p className={styles.welcome}>Welcome to ingrii!</p>
            <h1 className={styles.frontText}>Your Cooking and Baking<br></br> Recipe Converter</h1>
            <p className={styles.missionText}>We want to create connections between cultures<br></br> and people, by simplifying for those who love to<br></br> cook and bake.</p>
          </div>
      </div>
    </>
  )
}
