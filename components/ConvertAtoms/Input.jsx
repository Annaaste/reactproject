import React from 'react'
import styles from './ConvertAtoms.module.scss'

const Input = ({unitA, unitB, input, output, setInput}) => {


return (
<div className={styles.choice}>

  <div>
      <input className={styles.convertInput}
        type="text"
        id="input"
        value={input}
        //placeholder={unitA.unit}
        placeholder="Välj antal"
        onChange={({target}) => setInput(target.value)}
      />
      <label> {unitA.symbol} </label>
  </div>    

  <div>
      <input className={styles.convertOutput}
        type="text"
        id="output"
        value={output}
        //placeholder={unitB.unit}
        placeholder="Resultatet visas här"
        readOnly
        />
      <label className={styles.symbolB}> {unitB.symbol} </label>
  </div>


</div> 
    
)
}

export default Input
