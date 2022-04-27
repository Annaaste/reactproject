import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a aria-label='Gå till startsidan'>
          <img
            src="/images/logoWhite.svg"
            className={styles.logo}
            //Berättar för screenreaders att loggan går till startsidan
            alt="Logga med namnet ingrii och en cirkel på slutet "
          />
        </a>
      </Link>
      <div className={styles.mainMenu}>
        <Link href="/"><a className={styles.menuSubstitute}>Substitute </a></Link>
        <Link href="/convert"><a className={styles.menuConvert}> Conversion</a></Link>
      </div>
      <Image
        width={15}
        height={15}
        alt=""
        src="/images/icons/starIcon.svg"
      />
    </nav>
  );
}

export default Navbar;