import React, { useEffect, useState } from 'react';
import "./App.css";
import ImgBurger from "./burger_img.jpg";
import ImgMinus from "./minus (1).png";
import ImgPlus from "./plus (2).png";

function App() {

  const [quantity, setQuantity] = useState(1);
  const BURGER_PRICE = 200;
  const [totalBill, setTotalBill] = useState(BURGER_PRICE);
  const updateQuantity = (type) => {
    if (type == "plus") {
      setQuantity(quantity + 1);
    }

    else if (type == "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    const total = BURGER_PRICE * quantity;
    if (quantity < 4) {
      setTotalBill(BURGER_PRICE * quantity)
    }

    else if (quantity >= 4 && quantity < 10) {
      setTotalBill(total - 100)
    }
    else {
      setTotalBill(total - 500)
    }
  }, [quantity])

  return (
    <div>
      <div className='card'>

        <img src={ImgBurger} className='card_img' />

        <h1 className='card_title'>Burger</h1>

        <p className='card_text'>
          Good source of protein.Keeps you full.Reduces risk of anaemia.Can improve mood.Rich in B vitamins.
        </p>
        <div className='card_price_container'>
          <span className='card_price'>Price : ₹ {BURGER_PRICE} </span>
          <span className='card_total'>Total : {totalBill}</span>
        </div>
        <p className='card_error'>
          {
            quantity >= 10 ? "for bulk orders , delivery time may vary" : null
          }
        </p>

        <div className='card_quantity_container'>

          <img src={ImgMinus}
            alt="Minus"
            className='card_quantity_icon'
            onClick={() => {
              updateQuantity("minus")
            }}
          />

          <span className='card_quantity'>{quantity}</span>

          <img src={ImgPlus}
            alt="Plus"
            className='card_quantity_icon'
            onClick={() => {
              updateQuantity("plus")
            }}
          />
        </div>
        <button type="button" className='card_butn' >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default App
