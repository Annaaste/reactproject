import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input type="text" placeholder='Write your ingredient'></input>
    </div>
  );
}

export default SearchBar;