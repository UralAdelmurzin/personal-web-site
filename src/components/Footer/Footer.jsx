import React from 'react';
import './style.scss'

// import clock from 'src/assets/img/widget-clock.svg'
// import address from 'src/assets/img/widget-address.svg'
import mail from 'src/assets/img/widget-mail.svg'
import phone from 'src/assets/img/widget-phone.svg'
// import tiktok from 'src/assets/img/tiktok-icon.svg'
import { contacts } from 'src/utils/datasets';


function Footer() {
  return (
    <div className='landing_footer'>
      <div className="container">
        <div className="footer_body">

          <div className='footer_widget'>
            <img src={phone} alt="icon" />
            <h3 className='widget_title'>Phone numbers:</h3>
            <p className='widget_text'><a href={`tel:${contacts.phoneNumber}`}>{ contacts.phoneNumber }</a></p>
            {/* <p className='widget_text'>{ contacts.phoneNumber_2 }</p> */}
          </div>

          <div className='footer_widget'>
            <img className='icon' src={mail} alt="icon" />
            <h3 className='widget_title'>Email:</h3>
            <p className='widget_text'><a href={`mailto:${contacts.email}`}>{ contacts.email }</a></p>
          </div>
        </div>

        {/* <div className="footer_body">
          <div className='footer_widget'>
            <img src={tiktok} alt="icon" />
            <h3 className='widget_title'>TikTok:</h3>
            <p className='widget_text'><a href={contacts.tiktokUrl} target='_blank'>{ contacts.tiktokName }</a></p>
          </div>

          <div className='footer_widget'>
            <img src={address} alt="icon" />
            <h3 className='widget_title'>Address:</h3>
            <p className='widget_text'>{ contacts.street }</p>
            <p className='widget_text'>{ contacts.city }</p>
            <p className='widget_text'>{ contacts.country }</p>
          </div>
        </div> */}
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="wrapper">
            <div>Handyman services since 2019 © All Rights Reserved</div>
            {/* <div><img src={logo} alt={ `${contacts.siteName}` } /></div> */}
            {/* LOGO */}
            {/* <div className='hilight_text'>Privacy policy</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;