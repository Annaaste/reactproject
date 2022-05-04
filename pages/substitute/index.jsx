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
          content="Här står det info som kan synas på Google om just den här sidan"
        />
      </Head>
      <SearchBar />
    </>
  )
}
 
export default Substitute;