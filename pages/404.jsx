import Link from 'next/link'
import styles from './404.module.scss'

const PageNotFound = () => {
  return ( 
    <div className={styles.pageNotFound}>
      <p className={styles.headline}>Ops! We are sorry, please try again...</p>
      <p className={styles.notFound}>404</p>
      <Link href="/"><a className={styles.goToHomePage}>Go back to startpage</a></Link>
    </div>
   );
}
 
export default PageNotFound;