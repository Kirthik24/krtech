import React, { useState, useEffect } from 'react';

const LettersAnimation = () => {
  const text ='SOFTWARE DEVELOPER' ;

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    document.getElementById("hackertext").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
    }

  });

  return <h1 data-value="SOFTWARE DEVELOPER" id="hackertext">{text}</h1>;
};

export default LettersAnimation;
