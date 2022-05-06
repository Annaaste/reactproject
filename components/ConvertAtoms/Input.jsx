import React from 'react'

const Input = ({unitA, unitB, input, output, setInput}) => {

  return (
    <div>
      <div>
        <p>Value to convert:</p>
      </div>
      <input 
        type="text"
        id="input"
        value={input}
        placeholder={unitA.unit}
        onChange={({target}) => setInput(target.value)}
      />
      <label> {unitA.symbol} </label>
      {/* <div>
      <button type="submit" className="button">convert</button>
      </div> */}
      <div>
      <input
        type="text"
        id="output"
        value={output}
        placeholder={unitB.unit}
        readOnly
      />
      <label> {unitB.symbol} </label>
      </div>
      
    </div>
  )
}

export default Input
