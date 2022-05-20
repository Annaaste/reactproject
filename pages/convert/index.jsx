import React, { useState } from 'react'
import styles from './convert.module.scss'
import Image from 'next/image'
import Select from '../../components/ConvertAtoms/Select'


const Convert = () => {

return (
  <div className={styles.container}>

      <h1 className={styles.convertHeader}>Convert your measurment and get a taste of the world</h1>

    <div className={styles.convertForm}>
      {/* <fieldset className={styles.convertFieldset}> */}
        
        <Select
        
        />

      {/* </fieldset> */}
    </div>
  </div>
)
}

export default Convert;