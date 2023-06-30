import React, { useState, useEffect } from 'react';
import "../css/main.scss"
import herolaptop from "../assets/hero-laptop.png"
import LettersAnimation from '../components/LettersAnimation';
const Main = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const hackereffect = (id)=>
      {  
        let iteration = 0;
        const ele = document.getElementById(id);
        clearInterval(interval);
        
        interval = setInterval(() => {
            ele.innerText = ele.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                return ele.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >= ele.dataset.value.length){ 
            clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 30);
    }
    hackereffect("hackertext");
  });
  return (
    <div className="container">
      <div className="hero">
        <h2 data-value="Kirthik Rangaraj" id ="named" >Kirthik Rangaraj</h2>
        <h1 data-value="SOFTWARE DEVELOPER" id="hackertext">SOFTWARE DEVELOPER</h1>
        <img id ="heroimg" src={herolaptop} alt="" />
      </div>
    </div>
  )
}

export default Main