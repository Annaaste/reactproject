import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return ( 
    <div className={styles.surroundingContainer}>
      <Navbar />
        <main className={styles.surroundAllPages}>
          {children}
        </main>
      <Footer />
    </div>
   );
}
 
export default Layout;