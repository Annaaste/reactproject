import React from 'react'


const SubSelect = ({measurement, changeUnit, unit}) => {
  let liters = {
    name: "liters",
    values: ["dL", "mL"],
    labels: ["Deciliters(dL)", "Milliliters(mL)"]
  }
  

  let kilograms = {
    name: "kilograms",
    values: ["g", "lbs"],
    labels: ["Grams(g)", "Pounds(lbs)"]
  }

  const SelectForm = ({name, values, labels}) => (
    <select name={name} value={unit} onChange={({target}) => changeUnit(target.value)}>
      <option value={values[0]}>{labels[0]}</option>
      <option value={values[1]}>{labels[1]}</option>
    </select>
  )

  

  return measurement === "b" 
      ?  SelectForm(liters)
      :  SelectForm(kilograms)
}


export default SubSelect