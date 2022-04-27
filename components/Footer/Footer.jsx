import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return ( 
    <footer className={styles.footerContainer}>
      <img
            src="/images/logo.png"
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logga med namnet ingrii och en cirkel på slutet "
          />
      <div className={styles.getInTouch}>
        <p>Feedback, praise or blame? Or can´t find what your looking for? Get in touch!</p>
        <Link href="/about">
          Såhär länkar man till en annan sida
        </Link>
        <a 
          href="mailto:anna.dyberg@gmail.com"
          // såhär anropar man flera klasser
          className={`${styles.body2} ${styles.footerMail}`}
        >
          hello@ingrii.com
        </a>
      </div>
      <p className={styles.color2}>2022 Grupp 2 STI</p>
    </footer>
   );
}
 
export default Footer;