import Head from 'next/head'
import SearchBar from '../components/SearchBar/SearchBar';
import EarlierSearches from '../components/EarlierSearches/EarlierSearches';

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
      <SearchBar />
      <div className={styles.suggestionContainer}>
        <EarlierSearches />
      </div>
    </>
  )
}
