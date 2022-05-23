import styles from './SearchBar.module.scss'
import Data from "../../texts/substitutes.json";
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link';
const SearchBar = () => {
  const [query, setQuery] = useState("")

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarBox}>
        <div className={styles.searchInput}>
          <input className={styles.input} type="text" placeholder="Find your substitute ingredient" onChange={event => setQuery(event.target.value)} />
        </div>
        <div className={styles.searchButton}>
          <Link href='/substitute-result'>
            <button className={styles.buttonIcon}><img src='../images/icons/buttonIcon.svg'></img></button>
          </Link>
        </div>
      </div>

      {Data.filter(post => {
        if (query === '') {
          return null;
        } else if (post.ingredient.toLowerCase().startsWith(query.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className={styles.showResults} key={index}>
          <h2 className={styles.searchResultHeader}>{post.ingredient}</h2>
          <Image width={300} height={300} src={post.image} />
          <p className={styles.searchResultSubHeading}>Substitute</p>
          <p className={styles.searchResultSubstitute}>{post.substitute}</p>
          <p className={styles.searchResultSubHeading}>Description</p>
          <p className={styles.searchResultDescription}>{post.description}</p>

        </div>
      ))
      }
      {
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
      }
    </div>

  );
}

export default SearchBar;