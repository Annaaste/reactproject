import React, { useState } from 'react'
import MeasureSelect from '../../components/ConvertAtoms/MeasureSelect'
import Switch from '../../components/ConvertAtoms/Switch'
import Input from '../../components/ConvertAtoms/Input'
import measures from '../../components/ConvertAtoms/measures'
import styles from './convert.module.scss'
import Image from 'next/image'

const Convert = () => {
  const [unitA, setUnitA] = useState(measures.a.set1["?"])
  const [unitB, setUnitB] = useState(measures.a.set1["?"])
  const [measurement, setMeasurement] = useState("a")
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const onSubmit = (event) => {
    event.preventDefault()
    setOutput(_convert(measurement))
  }

  const _convert = (measurement) => {
    let {set1, set2} = measures[measurement]

    return Object.keys(set1).includes(unitA.unit)
      ? _calculate(unitA.unit, set1.conversion)
      : _calculate(unitA.unit, set2.conversion)
  }

  const _calculate = (unit, conversionVal) => {
/*     if(["?", "?"].includes(unit)){
      let val = unit === "?"
        ? input * conversionVal[0] + conversionVal[1]
        : (input - conversionVal[1]) / conversionVal[0]
      return val.toFixed(1)
    } */

    let val = ["Liters", "LitersML", "Kilograms", "KilogramsLBS"].includes(unit) 
      ? input * conversionVal 
      : input / conversionVal

    return val
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Conversion</h1>
      </div>
      <form className="Form"  onKeyUp={onSubmit}>
        <fieldset>
          
          <MeasureSelect 
            measurement={measurement}
            setMeasurement={setMeasurement}
            unit={unitB.symbol}
            setUnitA={setUnitA}
            setUnitB={setUnitB}/>

          <Switch 
            unitA={unitA} 
            unitB={unitB} 
            setUnitA={setUnitA} 
            setUnitB={setUnitB} 
            setOutput={setOutput}/>

          <Input
            unitA={unitA}
            unitB={unitB}
            input={input}
            output={output}
            setInput={setInput}/>

        </fieldset>
      </form>
    </div>
  )
}

export default Convert;