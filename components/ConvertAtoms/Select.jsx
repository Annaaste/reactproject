import React, { useState } from 'react'
import styles from './ConvertAtoms.module.scss'

const Select = () => {

    function button() {
      if (IN.value <= 0)
        return (OUT.value = "0");
    
      if (selectIN.value == 'a') {
  
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 1).toFixed(2));
          
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.95).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 2.37).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 8.33).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 8).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.24).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 236.59).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.42).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.5).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.21).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.25).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 16).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 15.77).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 13.32).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 48).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 47.32).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 39.97).toFixed(2));
    
      }
  
  
      if (selectIN.value == 'b') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 1.06).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 1).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.88).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 2.5).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 8.8).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 8.45).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.07).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.25).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 250).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.44).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.53).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.22).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.26).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 16.91).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 16.67).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 14.08).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 50.72).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 50).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 42.23).toFixed(2));
    
      }
  
      if (selectIN.value == 'c') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 1.2).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 1.14).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 2.84).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 10).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 9.61).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.08).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.28).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 284.13).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.5).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.6).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.25).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.3).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 19.22).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 18.94).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 16).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 57.65).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 56.83).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 48).toFixed(2));
    
      }
  
      if (selectIN.value == 'd') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.42).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.4).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.35).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 1).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 3.52).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 3.38).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.1).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 100).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.18).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.21).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.09).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.11).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 6.76).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 6.67).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 5.63).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 20.29).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 20).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 16.89).toFixed(2));
    
      }
  
      if (selectIN.value == 'e') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.12).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.11).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.1).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.28).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.96).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 28.41).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 1.92).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 1.89).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 1.6).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 5.76).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 5.68).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 4.8).toFixed(2));
    
      }
  
  
      if (selectIN.value == 'f') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.13).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.12).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.1).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.3).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 1.04).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 29.57).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 2).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 1.97).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 1.67).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 6).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 5.91).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 5).toFixed(2));
    
      }
  
      if (selectIN.value == 'g') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 19.22).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 18.18).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 16).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 45.46).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 160).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 153.72).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 1.2).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 4.55).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 4546.09).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 8).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 9.61).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 4).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 4.8).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 307.44).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 303.07).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 256).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 922.33).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 909.22).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 768).toFixed(2));
    
      }
  
      if (selectIN.value == 'h') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 16).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 15.14).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 13.32).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 37.85).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 133.23).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 128).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 3.79).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 3785.41).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 6.66).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 8).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 3.33).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 4).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 256).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 252.36).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 213.16).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 768).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 757.08).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 639.49).toFixed(2));
    
      }
  
  
      if (selectIN.value == 'i') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0.04).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0.002).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
      }
  
      if (selectIN.value == 'j') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 1000).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 35.27).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 2.2).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
      }
  
      if (selectIN.value == 'k') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 4.23).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 4).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 3.52).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 10).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 35.2).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 33.81).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.22).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.26).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 1000).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 1.76).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 2.11).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.88).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 1.06).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 67.63).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 66.67).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 56.31).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 202.88).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 200).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 168.94).toFixed(2));
    
      }
  
      if (selectIN.value == 'l') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.004).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.04).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.0002).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.0003).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.002).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.002).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0.07).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0.07).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 0.2).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0.2).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0.17).toFixed(2));
    
      }

      if (selectIN.value == 'm') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 28.35).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0).toFixed(2));

      }
  
      if (selectIN.value == 'n') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 2.4).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 2.27).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 2).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 5.68).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 20).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 19.22).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.13).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.15).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.57).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 568.26).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 1.2).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.5).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.6).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 38.43).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 37.88).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 32).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 115.29).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 113.65).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 96).toFixed(2));
    
      }
  
      if (selectIN.value == 'o') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 2).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 1.89).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 1.67).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 4.73).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 16.65).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 16).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.1).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.13).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.47).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 473.18).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.42).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.5).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 32).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 31.55).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 26.65).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 96).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 94.64).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 79.94).toFixed(2));
    
      }
  
      if (selectIN.value == 'p') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 453.59).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0.45).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 16).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0).toFixed(2));
    
      }
  
      if (selectIN.value == 'q') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 4.8).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 4.55).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 4).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 11.37).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 40).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 38.43).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.25).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.3).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 1.14).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 1136.52).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 2).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 2.4).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 1.2).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 76.86).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 75.77).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 64).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 230.58).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 227.3).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 192).toFixed(2));
    
      }
  
      if (selectIN.value == 'r') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 4).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 3.79).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 3.33).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 9.46).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 33.31).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 32).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.21).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.25).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.95).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 946.35).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 1.67).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 2).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 64).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 63.09).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 53.29).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 192).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 189.27).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 159.87).toFixed(2));
    
      }
  
      if (selectIN.value == 's') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.06).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.15).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.52).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.5).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.003).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 14.79).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0.99).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 3).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 2.96).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 2.5).toFixed(2));
    
      }
  
      if (selectIN.value == 't') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.06).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.15).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.53).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.51).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.003).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 15).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 1.01).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.84).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 3.04).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 3).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 2.53).toFixed(2));
    
      }
  
      if (selectIN.value == 'u') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.08).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.07).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.18).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.62).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.6).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.005).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 17.76).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.03).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.04).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 1.2).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 1.18).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 3.6).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 3.55).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 3).toFixed(2));
    
      }
  
      if (selectIN.value == 'v') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.02).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.17).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.17).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.005).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 4.93).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.005).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0.33).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0.33).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.28).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 0.99).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0.83).toFixed(2));
    
      }
  
      if (selectIN.value == 'w') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.02).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.05).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.18).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.17).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 5).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.004).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.005).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0.34).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0.33).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.28).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 1.01).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 1).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 0.84).toFixed(2));
    
      }
  
      if (selectIN.value == 'x') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = (IN.value * 0.03).toFixed(2));
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = (IN.value * 0.02).toFixed(2));
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = (IN.value * 0.06).toFixed(2));
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = (IN.value * 0.21).toFixed(2));
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = (IN.value * 0.2).toFixed(2));
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = (IN.value * 0.001).toFixed(2));
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = (IN.value * 0.002).toFixed(2));
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = (IN.value * 5.92).toFixed(2));
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = (IN.value * 0).toFixed(2));
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = (IN.value * 0.01).toFixed(2));
  
        else if (selectOUT.value == 's')
          return  (OUT.value = (IN.value * 0.4).toFixed(2));
  
        else if (selectOUT.value == 't')
          return  (OUT.value = (IN.value * 0.39).toFixed(2));
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = (IN.value * 0.33).toFixed(2));
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = (IN.value * 1.2).toFixed(2));
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = (IN.value * 1.18).toFixed(2));
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = (IN.value * 1).toFixed(2));
    
      }
    }
  
  return (
  <>
   
    <input className={styles.INPUT} id={"IN"} /* value={0} */ onKeyUp={button} type="number" min="0" step="any"/>
      <select className={styles.selectIN} id={"selectIN"} name="fromUnit" onMouseMove={button}>
        <option value="a">Cups (US)</option>
        <option value="b">Cups (Metric)</option>
        <option value="c">Cups (Imperial)</option>
        <option value="d">Deciliters (dL)</option>
        <option value="e">Fluid Ounces (UK fl oz)</option>
        <option value="f">Fluid Ounces (US fl oz)</option>
        <option value="g">Gallons (UK gal)</option>
        <option value="h">Gallons (US)</option>
        <option value="i">Grams (g)</option>
        <option value="j">Kilograms (kg)</option>
        <option value="k">Liters (L)</option>
        <option value="l">Milliliters (mL)</option>
        <option value="m">Ounces (oz)</option>
        <option value="n">Pints (UK pt)</option>
        <option value="o">Pints (US pt)</option>
        <option value="p">Pounds (lb)</option>
        <option value="q">Quarts (UK qt)</option>
        <option value="r">Quarts (US qt)</option>
        <option value="s">Tablespoons (US)</option>
        <option value="t">Tablespoons (Metric)</option>
        <option value="u">Tablespoons (Imperial)</option>
        <option value="v">Teaspoons (US)</option>
        <option value="w">Teaspoons (Metric)</option>
        <option value="x">Teaspoons (Imperial)</option>
      </select>
      
      
      
    <input className={styles.OUTPUT} id={"OUT"} onKeyUp={button} type="number" readOnly/>
      <select className={styles.selectOUT} id={"selectOUT"} name="fromUnit" onMouseMove={button}>
        <option value="a">Cups (US)</option>
        <option value="b">Cups (Metric)</option>
        <option value="c">Cups (Imperial)</option>
        <option value="d">Deciliters (dL)</option>
        <option value="e">Fluid Ounces (UK fl oz)</option>
        <option value="f">Fluid Ounces (US fl oz)</option>
        <option value="g">Gallons (UK gal)</option>
        <option value="h">Gallons (US)</option>
        <option value="i">Grams (g)</option>
        <option value="j">Kilograms (kg)</option>
        <option value="k">Liters (L)</option>
        <option value="l">Milliliters (mL)</option>
        <option value="m">Ounces (oz)</option>
        <option value="n">Pints (UK pt)</option>
        <option value="o">Pints (US pt)</option>
        <option value="p">Pounds (lb)</option>
        <option value="q">Quarts (UK qt)</option>
        <option value="r">Quarts (US qt)</option>
        <option value="s">Tablespoons (US)</option>
        <option value="t">Tablespoons (Metric)</option>
        <option value="u">Tablespoons (Imperial)</option>
        <option value="v">Teaspoons (US)</option>
        <option value="w">Teaspoons (Metric)</option>
        <option value="x">Teaspoons (Imperial)</option>
      </select>
  
  </>
  ) 
  }
export default Select