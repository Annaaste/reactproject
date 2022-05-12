import styles from './ConvertAtoms.module.scss'
import React from 'react'


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
      <button  className={styles.buttonIcon}><img src='../images/icons/switchIcon.svg'></img></button>
      </button>
    </div> 
  )
}

export default Switch