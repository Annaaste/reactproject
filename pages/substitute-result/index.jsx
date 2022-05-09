import styles from './substitute-result.module.scss'
import Data from "/Users/Sengangarn/Documents/STI/ReactNy/reactproject/texts/substitutes.json";
import { useState } from "react";


const SubstituteResult = () => {
  const [query, setQuery] = useState("")
  return (
    <div className={styles.resultContainer}>
      <input placeholder="Enter ingredient" onChange={event => setQuery(event.target.value)} />
      {
        Data.map((post, index) => (
          <div className="box" key={post.id}>
            <p>{post.ingredient}</p>
            <p>{post.substitute}</p>
          </div>
        ))
      }
    </div>
  );
}

export default SubstituteResult;