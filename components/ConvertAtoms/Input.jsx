import React from 'react'
import styles from './ConvertAtoms.module.scss'

const Input = ({unitA, unitB, input, output, setInput}) => {

  return (
    <div>
      <div>
        <p className={styles.helpText}>Value to convert:</p>
      </div>
      <input className={styles.input}
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
      <input className={styles.input}
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
