import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  return ( 
    <footer className={styles.footerContainer}>
      <img
            src="/images/logoBlack.svg"
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logga med namnet ingrii och en cirkel på slutet "
          />
      <div className={styles.getInTouch}>
        <p>Feedback, praise or blame? Or can't find what you're looking for? Get in touch!</p>
        
        <a 
          href="mailto:anna.dyberg@gmail.com"
          // såhär anropar man flera klasser
          className={`${styles.body2} ${styles.footerMail}`}
        >
          hello@ingrii.com
        </a>
      </div>
      <p className={styles.color2}>©2022 <Link href="/about">
          Länk annan sida
        </Link></p>
    </footer>
   );
}
 
export default Footer;