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
        <button className={styles.buttonIcon} type="button"  onClick={onSwitch}><img src='../images/icons/switchIcon.svg'></img>
        </button>
      </div>
  )
}

export default Switch