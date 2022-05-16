import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {

  //För att kunna känna av vad som står i url:en
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a aria-label='Gå till startsidan'>
          <img
            src="/images/logoBlack.svg"
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logga med namnet ingrii och en cirkel på slutet "
          />
        </a>
      </Link>
      <div className={styles.mainMenu}>
      
        <Link href="/substitute">
          <a className={router.pathname === "/substitute" ? styles.activePage : styles.nonActivePage}>
            Substitute 
          </a>
        </Link>
        
        <Link href="/convert">
          <a className={router.pathname === "/convert" ? styles.activePage2 : styles.nonActivePage}> 
            Conversion
          </a>
        </Link>
      </div>
      {/* Tom p-tagg så att menyn centreras korrekt */ }
      <p className={styles.filling}></p>
    </nav>
  );
}

export default Navbar;