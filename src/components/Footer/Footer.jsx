import React from 'react';
import './style.scss'

// import clock from 'src/assets/img/widget-clock.svg'
// import address from 'src/assets/img/widget-address.svg'
// import mail from 'src/assets/img/widget-mail.svg'
import phone from 'src/assets/img/widget-phone.svg'
// import logo from 'src/assets/img/logo-landing.png'
import { contacts } from 'src/utils/datasets';


function Footer() {
  return (
    <div className='landing_footer'>
      <div className="container">
        <div className="footer_body">
          {/* <div className='footer_widget'>
            <img src={clock} alt="icon" />
            <h3 className='widget_title'>Working Hours:</h3>
            <p className='widget_text'>On weekdays from 11:00 AM to 8:00 PM</p>
            <p className='widget_text'>Saturday - Closed</p>
            <p className='widget_text'>Sunday - Closed</p>
          </div> */}
          <div className='footer_widget'>
            <img src={phone} alt="icon" />
            <h3 className='widget_title'>Phone numbers:</h3>
            <p className='widget_text'>{ contacts.phoneNumber }</p>
            {/* <p className='widget_text'>{ contacts.phoneNumber_2 }</p> */}
          </div>
        </div>

        {/* <div className="footer_body">
          <div className='footer_widget'>
            <img className='icon' src={mail} alt="icon" />
            <h3 className='widget_title'>Email:</h3>
            <p className='widget_text'>{ contacts.email }</p>
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
            <div>{ contacts.siteName } © All Rights Reserved</div>
            {/* <div><img src={logo} alt={ `${contacts.siteName}` } /></div> */}
            {/* LOGO */}
            <div className='hilight_text'>Privacy policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;