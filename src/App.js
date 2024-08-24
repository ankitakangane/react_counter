import React from 'react';
import "./App.css";
import ImgBurger from "./burger_img.jpg";
import ImgMinus from "./minus (1).png";
import ImgPlus from "./plus (2).png";

function App() {
  return (
    <div>
     <div className='card'>

      <img src={ImgBurger} className='card_img'/>

      <h1 className='card_title'>Burger</h1>

      <p className='card_text'>
      Good source of protein.Keeps you full.Reduces risk of anaemia.Can improve mood.Rich in B vitamins.
      </p>

      <p className='card_price'>Price : ₹ 100 </p>

      <div className='card_quantity_container'>
   
      <img src={ImgMinus} alt="Minus"  className='card_quantity_icon'/>

      <span className='card_quantity'>1</span>

      <img src={ImgPlus} alt="Plus"  className='card_quantity_icon'/>
      </div>
      <button type="button" className='card_butn' >
        Buy Now
      </button>
     </div>
    </div>
  )
}

export default App
