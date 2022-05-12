import React from 'react'


const SubSelect = ({measurement, changeUnit, unit}) => {
  let liters = {
    name: "liters",
    values: ["dL", "mL", "Cups (US)", "Cups (Metric)", "Cups (Imperial)", "Deciliters [dL]", "Fluid Ounces (UK) [fl oz]", "Fluid Ounces (US) [fl oz]", "Gallons (UK) [gal]", "Gallons (US)", "Grams [g]", "Kilograms [kg]", "Liters [L]", "Milliliters [mL]", "Ounces [oz]", "Pints (UK) [pt]", "Pints (US) [pt]", "Pounds [lb]", "Quarts (UK) [qt]", "Quarts (US) [qt]", "Tablespoons (US)", "Tablespoons (Metric)", "Tablespoons (Imperial)", "Teaspoons (US)", "Teaspoons (Metric)", "Teaspoons (Imperial)"],
    labels: ["Deciliters(dL)", "Milliliters(mL)", "Cups (US)", "Cups (Metric)", "Cups (Imperial)", "Deciliters [dL]", "Fluid Ounces (UK) [fl oz]", "Fluid Ounces (US) [fl oz]", "Gallons (UK) [gal]", "Gallons (US)", "Grams [g]", "Kilograms [kg]", "Liters [L]", "Milliliters [mL]", "Ounces [oz]", "Pints (UK) [pt]", "Pints (US) [pt]", "Pounds [lb]", "Quarts (UK) [qt]", "Quarts (US) [qt]", "Tablespoons (US)", "Tablespoons (Metric)", "Tablespoons (Imperial)", "Teaspoons (US)", "Teaspoons (Metric)", "Teaspoons (Imperial)"]
  }
  

  let kilograms = {
    name: "kilograms",
    values: ["g", "lbs", "Cups (US)", "Cups (Metric)", "Cups (Imperial)", "Deciliters [dL]", "Fluid Ounces (UK) [fl oz]", "Fluid Ounces (US) [fl oz]", "Gallons (UK) [gal]", "Gallons (US)", "Grams [g]", "Kilograms [kg]", "Liters [L]", "Milliliters [mL]", "Ounces [oz]", "Pints (UK) [pt]", "Pints (US) [pt]", "Pounds [lb]", "Quarts (UK) [qt]", "Quarts (US) [qt]", "Tablespoons (US)", "Tablespoons (Metric)", "Tablespoons (Imperial)", "Teaspoons (US)", "Teaspoons (Metric)", "Teaspoons (Imperial)"],
    labels: ["Grams(g)", "Pounds(lbs)", "Cups (US)", "Cups (Metric)", "Cups (Imperial)", "Deciliters [dL]", "Fluid Ounces (UK) [fl oz]", "Fluid Ounces (US) [fl oz]", "Gallons (UK) [gal]", "Gallons (US)", "Grams [g]", "Kilograms [kg]", "Liters [L]", "Milliliters [mL]", "Ounces [oz]", "Pints (UK) [pt]", "Pints (US) [pt]", "Pounds [lb]", "Quarts (UK) [qt]", "Quarts (US) [qt]", "Tablespoons (US)", "Tablespoons (Metric)", "Tablespoons (Imperial)", "Teaspoons (US)", "Teaspoons (Metric)", "Teaspoons (Imperial)"]
  }

  const SelectForm = ({name, values, labels}) => (
    <select name={name} value={unit} onChange={({target}) => changeUnit(target.value)}>
      <option value={values[0]}>{labels[0]}</option>
      <option value={values[1]}>{labels[1]}</option>
      <option value={values[2]}>{labels[2]}</option>
      <option value={values[3]}>{labels[3]}</option>
      <option value={values[4]}>{labels[4]}</option>
      <option value={values[5]}>{labels[5]}</option>
      <option value={values[6]}>{labels[6]}</option>
      <option value={values[7]}>{labels[7]}</option>
      <option value={values[8]}>{labels[8]}</option>
      <option value={values[9]}>{labels[9]}</option>
      <option value={values[10]}>{labels[10]}</option>
      <option value={values[11]}>{labels[11]}</option>
      <option value={values[12]}>{labels[12]}</option>
      <option value={values[13]}>{labels[13]}</option>
      <option value={values[14]}>{labels[14]}</option>
      <option value={values[15]}>{labels[15]}</option>
      <option value={values[16]}>{labels[16]}</option>
      <option value={values[17]}>{labels[17]}</option>
      <option value={values[18]}>{labels[18]}</option>
      <option value={values[19]}>{labels[19]}</option>
      <option value={values[21]}>{labels[21]}</option>
      <option value={values[22]}>{labels[22]}</option>
      <option value={values[23]}>{labels[23]}</option>
      <option value={values[24]}>{labels[24]}</option>
      <option value={values[25]}>{labels[25]}</option>
    </select>
  )

  

  return measurement === "b" 
      ?  SelectForm(liters)
      :  SelectForm(kilograms)
}


export default SubSelect