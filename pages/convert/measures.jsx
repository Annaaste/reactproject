const measures = {
  a: {
    set1: {
      conversion: [0, 0],
      "?": {unit: "?", symbol: "?"},
      "?": {unit: "?", symbol: "?"}
    }
  },
  
  b: {
    set1: {
      conversion: 10,
      "Liters": {unit: "Liters", symbol: "L"},
      "Deciliters": {unit: "Deciliters", symbol: "dL"}
    },
    set2: {
      conversion: 1000,
      "LitersML": {unit: "LitersML", symbol: "L"},
      "Milliliters": {unit: "Milliliters", symbol: "mL"}
    }
  },
  c: {
    set1: {
      conversion: 1000,
      "Kilograms": {unit: "Kilograms", symbol: "kg"},
      "Grams": {unit: "Grams", symbol: "g"}
    },
    set2: {
      conversion: 2.2,
      "KilogramsLBS": {unit: "KilogramsLBS", symbol: "kg"},
      "Pounds": {unit: "Pounds", symbol: "lbs"}
    }
  }
}

export default measures