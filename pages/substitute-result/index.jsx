import { firestore } from '../../utils/firebase';
import styles from './substitute-result.module.scss'


export default function SubstituteResult({ ingredients }) {
  console.log(ingredients)
  return (
    <div className={styles.resultContainer}>
      <h2>Hello</h2>
    </div>
  );
}

//server side code
export async function getServerSideProps() {

  const snapshots = await firestore.collection('ingredients').get()
  const ingredients = snapshots.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  return {
    props: {
      ingredients: ingredients
    }
  }
}