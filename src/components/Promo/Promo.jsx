import React from 'react';
import './style.scss';
import { scrollToContacts } from 'src/helpers/scrollToContacts';

function Promo ({children}) {
  return (
    <div className='promo'>
      {children}
      <div className='promo_bg' />
      <div className="promo_figure" />
      <div className='promo_container'>
        <h2>PROFESSIONAL REPAIRS AND SMALL HANDYMAN JOBS</h2>
        <button className='btn' onClick={scrollToContacts}>Free Consultation <br/> for Your Project</button>      
      </div>
    </div>
  )
}

export default Promo;