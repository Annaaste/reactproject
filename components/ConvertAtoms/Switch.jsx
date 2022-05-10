import React from 'react'
import styles from './ConvertAtoms.module.scss'

const Switch = ({unitA, unitB, setUnitA, setUnitB, setOutput}) => {
  const onSwitch = (event) => {
    event.preventDefault()
    setUnitA(unitB)
    setUnitB(unitA)
    setOutput("")
  }

  return (
      <div>
      <button type="button"  onClick={onSwitch}>
      <button className={styles.buttonIcon}><img src='../images/icons/switchIcon.svg'></img></button>
        <i className={styles.switchButton}></i>
      </button>
      </div> 
      


  )
}

export default Switch