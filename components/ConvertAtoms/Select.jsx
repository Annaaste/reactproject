import React, { useState } from 'react'
import styles from './ConvertAtoms.module.scss'
import Image from 'next/image'

const Select = () => {
    let input= ('input');
    let convertButton = ('button');
    let selection = ('select');
  
    function button() {
      if (IN.value <= 0)
        return (OUT.value = "0");
    
      if (selectIN.value == 'a') {  //OK
  
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value * 0.95);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 0.83);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 2.37);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 8.33);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 8);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 0.05);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 0.06);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 0.24);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 236.59);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 0.42);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 0.5);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 0.21);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 0.25);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 16);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 15.77);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 13.32);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 48);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 47.32);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 39.97);
    
      }
  
  
      if (selectIN.value == 'b') { //OK
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 1.06);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 0.88);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 2.5);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 8.8);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 8.45);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 0.05);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 0.07);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 0.25);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 250);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 0.44);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 0.53);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 0.22);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 0.26);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 16.91);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 16.67);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 14.08);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 50.72);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 50);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 42.23);
    
      }
  
      if (selectIN.value == 'c') { //OK
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 1.2);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value * 1.14);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 2.84);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 10);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 9.61);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 0.06);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 0.08);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 0.28);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 284.13);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 0.5);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 0.6);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 0.25);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 0.3);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 19.22);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 18.94);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 16);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 57.65);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 56.83);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 48);
    
      }
  
      if (selectIN.value == 'd') { //OK
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 0.42);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value * 0.4);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 0.35);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 3.52);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 3.38);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 0.02);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 0.03);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 0.1);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 0.18);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 0.21);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 0);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 0.09);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 0.11);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 6.76);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 6.67);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 5.63);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 20.29);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 20);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 16.89);
    
      }
  
      if (selectIN.value == 'e') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
  
      if (selectIN.value == 'f') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'g') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'h') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
  
      if (selectIN.value == 'i') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'j') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'k') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'l') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'm') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'n') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'o') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'p') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'q') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'r') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 's') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 't') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'u') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'v') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'w') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
  
      if (selectIN.value == 'x') {
        
        if (selectOUT.value == 'a')    
          return (OUT.value = IN.value * 12112);
    
        else if (selectOUT.value == 'b')
          return  (OUT.value = IN.value);
    
        else if (selectOUT.value == 'c')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'd')
          return  (OUT.value = IN.value * 100000);
        
        else if (selectOUT.value == 'e')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'f')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'g')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'h')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'i')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'j')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'k')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'l')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'm')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'n')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'o')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'p')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'q')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'r')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 's')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 't')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'u')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'v')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'w')
          return  (OUT.value = IN.value * 100000);
  
        else if (selectOUT.value == 'x')
          return  (OUT.value = IN.value * 100000);
    
      }
    }
  
  return (
  <>
   
    <input className={styles.IN} id={"IN"} /* value={0} */ type="number" min="0" step="any"/>
      <select className={styles.selectIN} id={"selectIN"} name="fromUnit">
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
      
      
      
    <input className={styles.OUT} id={"OUT"} type="number" readOnly/>
      <select className={styles.selectOUT} id={"selectOUT"} name="fromUnit">
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
        
      <button onMouseOver={button}> convert</button>
      
  
  </>
  ) 
  }
export default Select