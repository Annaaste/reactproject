import { useRouter } from 'next/router'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import styles from './Layout.module.scss'

const Layout = ({ children }) => {

  const router = useRouter();
  
  return ( 
    <div  className={router.pathname === "/" && styles.backgroundImageStartPage || router.pathname === "/substitute" && styles.backgroundImageSubstitute || router.pathname === "/convert" && styles.backgroundImageConvert || styles.surroundingContainer}>
      <Navbar />
        <main className={styles.surroundAllPages}>
          {children}
        </main>
      <Footer />
    </div>
   );
}
 
export default Layout;