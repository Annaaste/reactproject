import styles from './Footer.module.scss'

const Footer = () => {
  return ( 
    <footer className={styles.footerContainer}>
      <img
            src="/images/logoBlack.svg"
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logo with name ingrii and circle at the end"
          />
      <div className={styles.getInTouch}>
        <p className='body2'>Feedback, praise or blame? Or can&#39;t find what you&#39;re looking for? Get in touch!</p>
        
        <a 
          href="mailto:anna.dyberg@gmail.com"
          // såhär anropar man flera klasser
          className={`${styles.body2} ${styles.footerMail}`}
        >
          hello@ingrii.com
        </a>
      </div>
      <p className={styles.color2}>©2022 Group 2 STI</p>
    </footer>
   );
}
 
export default Footer;