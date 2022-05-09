import styles from './substitute-result.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
const SubstituteResult = () => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.searchBarPlacement}>
        <SearchBar />
      </div>
      <div className={styles.resultTextField}>
        <h1>Ingredient name</h1>
        <subHeading>Substitutes:</subHeading>
        <li>bla lba lba</li>
        <subHeading>Notes:</subHeading>
      </div>
    </div>
  );
}

export default SubstituteResult;