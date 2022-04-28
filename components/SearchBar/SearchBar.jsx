import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input className="input-placeholder" type="text" placeholder='Write your ingredient'></input>
      <button>button</button>
    </div>
  );
}

export default SearchBar;