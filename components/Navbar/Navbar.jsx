import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return ( 
    <nav className={styles.navbar}>
      <Link href="/">
        <a aria-label='Gå till startsidan'>
          <img 
            src="../images/logo.png" 
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logga med namnet ingrii och en cirkel på slutet "
          />
      </a>
      </Link>
      {/* <Link href="/"><a>Hem</a></Link> */}
      <Link href="/"><a>Substitut </a></Link>
      <Link href="/convert"><a> Omvandla</a></Link>
    </nav>
   );
}
 
export default Navbar;