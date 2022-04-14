import Head from 'next/head'
import SearchBar from '../components/SearchBar/SearchBar';

import styles from './startPage.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Substitut | ingrii</title>
        <meta 
          name="description"
          content="Här står det info som kan synas på Google om just den här sidan"
        />
      </Head>
      <h1 className={styles.startpageHeader}>Hitta en ersättningsingrediens</h1>
      <SearchBar />
    </>
  )
}
