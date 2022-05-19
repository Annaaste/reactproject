import React, { useState } from 'react'
import styles from './convert.module.scss'
import Image from 'next/image'

const Convert = () => {
  let input= ('input');
  let convertButton = ('button');
  let selection = ('select');

  function button() {
    if (IN.value <= 0)
      return (OUT.value = "N/A");
  
    if (selectIN.value == 'a') {
      if (selectOUT.value == 'a')    
        return (OUT.value = IN.value);
  
      else if (selectOUT.value == 'b')
        return  (OUT.value = IN.value * 1000);
  
      else if (selectOUT.value == 'c')
        return  (OUT.value = IN.value * 100000);
  
  
  
    }
  }

return (
<>
 
  <input id={"IN"}/* value={0} */ type="number" min="0" step="any"/>
    <select id={"selectIN"} name="fromUnit">
      <option value="a">Cups US</option>
      <option value="b">Cups Metric</option>
      <option value="c">Cups Imperial</option>
      <option value="d">Deciliters dL</option>
      <option value="e">Fluid Ounces UK fl oz</option>
      <option value="f">Fluid Ounces US fl oz</option>
      <option value="g">Gallons UK gal</option>
      <option value="h">Gallons US</option>
      <option value="i">Grams g</option>
      <option value="j">Kilograms kg</option>
      <option value="k">Liters L</option>
      <option value="l">Milliliters mL</option>
      <option value="m">Ounces oz</option>
      <option value="n">Pints UK pt</option>
      <option value="o">Pints US pt</option>
      <option value="p">Pounds lb</option>
      <option value="q">Quarts UK qt</option>
      <option value="r">Quarts US qt</option>
      <option value="s">Tablespoons US</option>
      <option value="t">Tablespoons Metric</option>
      <option value="u">Tablespoons Imperial</option>
      <option value="v">Teaspoons US</option>
      <option value="w">Teaspoons Metric</option>
      <option value="x">Teaspoons Imperial</option>
    </select>
    
    
    
  <input id={"OUT"} type="number" readonly/>
    <select id={"selectOUT"} name="fromUnit">
      <option value="a">Cups US</option>
      <option value="b">Cups Metric</option>
      <option value="c">Cups Imperial</option>
      <option value="d">Deciliters dL</option>
      <option value="e">Fluid Ounces UK fl oz</option>
      <option value="f">Fluid Ounces US fl oz</option>
      <option value="g">Gallons UK gal</option>
      <option value="h">Gallons US</option>
      <option value="i">Grams g</option>
      <option value="j">Kilograms kg</option>
      <option value="k">Liters L</option>
      <option value="l">Milliliters mL</option>
      <option value="m">Ounces oz</option>
      <option value="n">Pints UK pt</option>
      <option value="o">Pints US pt</option>
      <option value="p">Pounds lb</option>
      <option value="q">Quarts UK qt</option>
      <option value="r">Quarts US qt</option>
      <option value="s">Tablespoons US</option>
      <option value="t">Tablespoons Metric</option>
      <option value="u">Tablespoons Imperial</option>
      <option value="v">Teaspoons US</option>
      <option value="w">Teaspoons Metric</option>
      <option value="x">Teaspoons Imperial</option>
    </select>
      
    <button onclick={button} onMouseOver={button}> convert</button>
    

</>
) 
}

export default Convert;