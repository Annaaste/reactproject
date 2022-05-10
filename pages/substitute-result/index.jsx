import styles from './substitute-result.module.scss'
import Data from "/Users/Sengangarn/Documents/STI/ReactNy/reactproject/texts/substitutes.json";
import { useState } from "react";


const SubstituteResult = () => {
  const [query, setQuery] = useState("")
  return (
    <div className={styles.resultContainer}>
      <input placeholder="Enter ingredient" onChange={event => setQuery(event.target.value)} />
      {
        Data.filter(post => {
          if (query === '') {
            return null;
          } else if (post.ingredient.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <br />
            <h2>{post.ingredient}</h2>
            <br />
            <p>{post.image}</p>
            <br />
            <p>{post.description}</p>
            <br />
            <p>{post.substitute}</p>
          </div>
        ))
      }
    </div>
  );
}
export default SubstituteResult;