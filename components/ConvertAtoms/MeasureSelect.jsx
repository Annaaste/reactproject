import React from 'react'
import SubSelect from './SubSelect'
import measures from './measures'
import styles from './ConvertAtoms.module.scss'

const MeasureSelect = ({measurement, setMeasurement, unit, setUnitA, setUnitB}) => {
  const onSelectChange = (value) => {
    changeUnit(value)
    setMeasurement(value)
  }

  const changeUnit = (value) => {
    let {a, b, c} = measures
    value = value === "b" ? "dL" : value
    value = value === "c" ? "g" : value

    switch (value) {
      case "a":
        setUnitA(a.set1["?"])
        setUnitB(a.set1["?"])
        break
      case "dL":
        setUnitA(b.set1["Liters"])
        setUnitB(b.set1["Deciliters"])
        break
      case "mL":
        setUnitA(b.set2["LitersML"])
        setUnitB(b.set2["Milliliters"])
        break
      case "g":
        setUnitA(c.set1["Kilograms"])
        setUnitB(c.set1["Grams"])
        break
      case "lbs":
        setUnitA(c.set2["KilogramsLBS"])
        setUnitB(c.set2["Pounds"])
        break
      default:
        break
    }
  }

  return (
    <div className={styles.choice}>
      <label className={styles.helpText} htmlFor="measurements">Convert from: </label>

      <div >


        <select name="measurements"  className={styles.choice}   id="measurements" onChange={({target}) => onSelectChange(target.value)}>
        
          <option value="a">?</option>
          <option value="b">LITERS</option>
          <option value="c">KILOGRAMS</option>
        </select>
        </div>


        <div >
        <label className={styles.helpText} htmlFor="measurements">Convert to: </label>
        </div>

        {["b", "c"].includes(measurement)
          ? <SubSelect  measurement={measurement} changeUnit={changeUnit} unit={unit}/>
          : null
        }
        

      
    </div>
  )
}

export default MeasureSelect