import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <div className={styles.searchBarContainer}>
      <input className="inputPlaceholder" type="text" placeholder='Write your ingredient'></input>
      <button className="searchButton"><img src='../images/buttonIcon.svg'></img></button>
    </div>
  );
}

export default SearchBar;