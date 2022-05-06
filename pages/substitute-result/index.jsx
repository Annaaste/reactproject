import styles from './substitute-result.module.scss'
import SearchBar from '../../components/SearchBar/SearchBar';
const SubstituteResult = () => {
  return (
    <div className={styles.resultContainer}>
      <SearchBar />
    </div>
  );
}

export default SubstituteResult;