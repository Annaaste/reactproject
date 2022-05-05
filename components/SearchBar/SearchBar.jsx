import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchInput}>
        <input className={styles.input} type="text" placeholder="Write your ingredient" />
        <div className={styles.autocomBox}>
          <li>Buttermilk</li>
          <li>Chipotle</li>
          <li>Olive oil</li>
          <li>Lime</li>
          <li>Egg</li>
        </div>
        <div className={styles.searchButton}>
          <button className={styles.buttonIcon}><img src='../images/icons/buttonIcon.svg'></img></button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;