import React, { useState } from 'react'
import styles from './convert.module.scss'
import Image from 'next/image'

const Convert = () => {
  let input= ('input');
  let convertButton = ('button');
  let selection = ('select');

  function button() {
    if (IN.value <= 0)
      return (OUT.value = "0");
  
    if (selectIN.value == 'a') {

      if (selectOUT.value == 'a')    
        return (OUT.value = IN.value);
  
      else if (selectOUT.value == 'b')
        return  (OUT.value = IN.value * 1000);
  
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


    if (selectIN.value == 'b') {
      
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

    if (selectIN.value == 'c') {
      
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

    if (selectIN.value == 'd') {
      
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