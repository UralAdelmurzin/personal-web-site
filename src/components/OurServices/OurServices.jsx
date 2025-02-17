import React from 'react';
import './style.scss'

function OurServices() {
  return (
    <div className='services'>
      <div className="container">
        <h2 className='title'>Our services</h2>
        <div className="services_main">
          <div className="services_body">
          <ul className='services_list'>
            <li className='services_item'>Selection of the best repair solution.</li>
            <li className='services_item'>Assessment of the object’s condition.</li>
            <li className='services_item'>Inspection to determine the need for material replacement or repair.</li>
            <li className='services_item'>Compliance with construction and technical standards.</li>
            <li className='services_item'>Assistance in calculating the preliminary repair cost.</li>
            <li className='services_item'>Procurement and delivery of necessary materials.</li>
            <li className='services_item'>Execution of repair and installation work.</li>
            <li className='services_item'>Guarantee on completed work.</li>
          </ul>

          <ul className='services_list'>
            <li className='services_item'>Organization of demolition work.</li>
            <li className='services_item'>Photo report of the repair stages.</li>
            <li className='services_item'>Organization of construction material delivery.</li>
            <li className='services_item'>Installation of plumbing equipment.</li>
            <li className='services_item'>Installation and repair of electrical wiring.</li>
            <li className='services_item'>Finishing and painting work.</li>
            <li className='services_item'>Furniture assembly and installation.</li>
            <li className='services_item'>Final inspection and post-renovation cleanup.</li>
          </ul>
          </div>
          {/* <div className="btn_wrapper">
            <button className='btn'>Request call</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}
export default OurServices;


