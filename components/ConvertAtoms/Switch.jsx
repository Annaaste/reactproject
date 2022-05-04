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
      <button type="button" className="button" onClick={onSwitch}>
        <i className="button"></i> switch
      </button>
      </div>
  )
}

export default Switch