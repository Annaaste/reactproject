import styles from './SearchBar.module.scss'
import Data from "../../texts/substitutes.json";
import { useState } from "react";
import Image from 'next/image'
const SearchBar = () => {
  const [query, setQuery] = useState("")

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchInput}>
        <input className={styles.input} type="text" placeholder="Find your substitute ingredient" onChange={event => setQuery(event.target.value)} />
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
              <Image width={300} height={300} src={post.image} />
              <br />
              <p>{post.description}</p>
              <br />
              <p className={styles.subHeading}>Substitute:</p>
              <p>{post.substitute}</p>
            </div>
          ))
        }
        <div className={styles.autocomBox}>
          <li>Buttermilk</li>
          <li>Chipotle</li>
          <li>Olive oil</li>
          <li>Lime</li>
          <li>Egg</li>
          <li>Red wine</li>
          <li>Seitan</li>
          <li>Yoghurt</li>
          <li>Cinnamon</li>
        </div>
        <div className={styles.searchButton}>
          <button className={styles.buttonIcon}><img src='../images/icons/buttonIcon.svg'></img></button>
        </div>
      </div>
    </div >
  );
}

export default SearchBar;