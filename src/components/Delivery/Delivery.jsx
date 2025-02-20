import React from 'react';
import './style.scss'
import { scrollToContacts } from 'src/helpers/scrollToContacts';

const deliveryTexts = [
  {
    title: 'Request and Consultation',
    text: 'You submit a request on our website or call us. Our specialist contacts you for consultation and to clarify the details of the work.',
    img: '../img//handyman-step-1.jpg'
  },
  {
    title: 'Selecting the Best Solution',
    text: 'We analyze your request and choose the best work option, considering your budget and deadlines.',
    img: '../img//handyman-step-2.jpg'
  },
  {
    title: 'Cost Estimate and Approval',
    text: 'We take measurements, assess the complexity of the work, and provide an accurate cost estimate. After approval, we begin the work.',
    img: '../img//handyman-step-3.jpg'
  },
  {
    title: 'Material Procurement and Delivery',
    text: 'If necessary, we purchase and deliver all the required materials at great prices, saving you time and money.',
    img: '../img//handyman-step-4.jpg'
  },
  {
    title: 'Work Execution',
    text: 'Our craftsmen professionally complete all tasks on time, adhering to quality and safety standards.',
    img: '../img//handyman-step-5.jpg'
  },
  {
    title: 'Work Is Done When Client Satisfied',
    text: 'After completing the work, we review the results with you. We guarantee quality and address any concerns.',
    img: '../img//handyman-step-6.jpg'
  }
]

function Delivery () {
  return (
    <div className="delivery">
      <div className="container">
        <h2 className="title">How Our Handyman Service Works</h2>
        <div className="delivery_wrapper">
          {deliveryTexts && deliveryTexts.map((el, idx) => {
            return (
              <div className="delivery_block" key={ idx }>
                <div 
                  className="block_img"
                  // style={{backgroundImage: `url(${ el.img })`}}
                />
                <div className="block_content">
                  <h3>
                    <span>{ idx < 10 ? `0${idx + 1}` : idx + 1 }</span>
                    { el.title }
                  </h3>
                  <p>{ el.text }</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="btn_wrapper">
          <button className='btn' onClick={scrollToContacts}>Get a Free Consultation <br/> from Our Specialist</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery;