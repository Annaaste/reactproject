import Link from 'next/link';
import { firestore } from '../../utils/firebase';
import styles from './substitute-result.module.scss'


export default function SubstituteResult({ ingredients }) {
  console.log(ingredients)
  return (
    <div className={styles.resultContainer}>
      <div className={styles.resultInput}>
        <input type="text" placeholder='write your ingredient' />
      </div>
      <div className={styles.resultDBList}>
        <ul>
          {ingredients.map(ingredient => {
            return (
              <li key={ingredient.id}>
                <Link href={`/ingredients/${ingredient.id}`}>
                  <a>{ingredient.ingredient}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

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