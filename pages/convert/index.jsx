import React, { useState } from 'react'
import styles from './convert.module.scss'
import Image from 'next/image'
import Select from '../../components/ConvertAtoms/Select'


const Convert = () => {

  return (
    <div className={styles.container}>
      <div>
        <h1>Conversion</h1>
      </div>
      <form className={styles.Form}>
        <fieldset>
          
          <Select/>

        </fieldset>
      </form>
    </div>
  )
}
export default Convert;