import Link from 'next/link'
import styles from './404.module.scss'

const PageNotFound = () => {
  return ( 
    <div className={styles.pageNotFound}>
      <h1>Ojoj...</h1>
      <p>Du har kommit fel för här finns ingen sida.</p>
      <Link href="/"><a className={styles.goToHomePage}>Tillbaka till startsidan</a></Link>
    </div>
   );
}
 
export default PageNotFound;