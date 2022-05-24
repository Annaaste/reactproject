import styles from './SearchBar.module.scss'
import Data from "../../texts/substitutes.json";
import { useState } from "react";
import Image from 'next/image'
const SearchBar = () => {
  const [query, setQuery] = useState("")

  function handleClick() {
    console.log('here should the substitute print result');
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBarBox}>
        <div className={styles.searchInput}>
          <input className={styles.input} type="text" placeholder="Find your substitute ingredient" onChange={event => setQuery(event.target.value)} />
        </div>
        <div className={styles.searchButton}>
          <button className={styles.buttonIcon} onClick={handleClick}><img src='../images/icons/buttonIcon.svg'></img></button>
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
          <div className={styles.textImageFlexBox}>
            <div className={styles.imageBox}>
              <Image width={382} height={382} src={post.image} title={post.ingredient} />
            </div>
            <div className={styles.substituteBox}>
              <p className={styles.searchResultSubHeading}>Substitute</p>
              <p className={styles.searchResultSubstitute}>{post.substitute}</p>
            </div>
          </div>
          <hr className={styles.linetag} />
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