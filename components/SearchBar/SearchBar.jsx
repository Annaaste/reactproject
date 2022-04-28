import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input className="input-placeholder" type="text" placeholder='Write your ingredient'></input>
      <button><img src='../images/buttonIcon.svg'></img></button>
    </div>
  );
}

export default SearchBar;