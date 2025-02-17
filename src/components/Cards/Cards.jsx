import React from 'react';
import './style.scss'

function Cards() {
  return (
    <div className="cards">
      <div className="container">
        <h2 className="cards_title title">Why should you choose us:</h2>
        <div className="cards_wrapper">
          <div className="cards_block">Transparent pricing with no hidden fees</div>
          <div className="cards_block">Full cost estimate before starting work</div>
          <div className="cards_block">Best price and quality guarantee</div>
          <div className="cards_block">Material delivery and procurement at great prices</div>
          <div className="cards_block">One of the lowest commissions on the market</div>
          <div className="cards_block">Guarantee on all completed work</div>
          <div className="cards_block">We work as if it were for ourselves</div>
          <div className="cards_block">Free consultation and on-site visit</div>
        </div>
      </div>
    </div>
  )
}

export default Cards;