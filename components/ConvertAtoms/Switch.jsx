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
      <button type="switchButton" className="switchButton" onClick={onSwitch}>
        <i className="Button"></i> switch
      </button>
      </div>
  )
}

export default Switch