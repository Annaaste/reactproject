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
      <div className={styles.centerStartPage}>
        <div className={styles.startTextContainer}>
          <p>Welcome to ingrii!</p>
          <h1 className={styles.frontText}>Your Cooking and Baking<br></br> Recipe Converter</h1>
          <p>We want to create encounters between cultures and people by simplifying for those who love to cook and bake.</p>
        </div>
      </div>
    </>
  )
}
