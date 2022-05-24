import styles from './substitute-result.module.scss'


const SubstituteResult = () => {

  return (
    <div className={styles.resultContainer}>
      <h1>result page</h1>
      <input placeholder="Enter ingredient" />
      <button className={styles.buttonIcon}><img src='../images/icons/buttonIcon.svg'></img></button>
    </div>
  );
}
export default SubstituteResult;