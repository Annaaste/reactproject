
import Head from 'next/head'
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './substitute.module.scss'




const Substitute = () => {
  return (
    <>
      <Head>
        <title>Substitut | ingrii</title>
        <meta
          name="description"
          content="Find your substitute ingredient"
        />
      </Head>
      <h1 className={styles.heading}>Substitute. <br/> Experience. Enjoy.</h1>
      <SearchBar />
    </>
  )
}

export default Substitute;