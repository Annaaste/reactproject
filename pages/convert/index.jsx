import React, { useState } from 'react'
import styles from './convert.module.scss'
import Select from '../../components/ConvertAtoms/Select'


const Convert = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.convertHeader}>Convert. <br/> Cook. Connect.</h1>
      <div className={styles.convertForm}>
        <Select
        />
      </div>
    </div>
  )
}

export default Convert;