import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return ( 
    <footer className={styles.footerContainer}>
      Här är en footer (om vi vill ha)<br/>
      <Link href="/about">
        Såhär länkar man till en annan sida
      </Link>
    </footer>
   );
}
 
export default Footer;