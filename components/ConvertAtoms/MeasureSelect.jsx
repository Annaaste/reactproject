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
          <option value="d">Cups US</option>
          <option value="e">Cups Metric</option>
          <option value="f">Cups Imperial</option>
          <option value="g">Deciliters dL</option>
          <option value="h">Fluid Ounces UK fl oz</option>
          <option value="i">Fluid Ounces US fl oz</option>
          <option value="j">Gallons UK gal</option>
          <option value="k">Gallons US</option>
          <option value="l">Grams g</option>
          <option value="m">Kilograms kg</option>
          <option value="n">Liters L</option>
          <option value="o">Milliliters mL</option>
          <option value="p">Ounces oz</option>
          <option value="q">Pints UK pt</option>
          <option value="r">Pints US pt</option>
          <option value="s">Pounds lb</option>
          <option value="t">Quarts UK qt</option>
          <option value="u">Quarts US qt</option>
          <option value="v">Tablespoons US</option>
          <option value="w">Tablespoons Metric</option>
          <option value="x">Tablespoons Imperial</option>
          <option value="y">Teaspoons US</option>
          <option value="z">Teaspoons Metric</option>
          <option value="zz">Teaspoons Imperial</option>

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