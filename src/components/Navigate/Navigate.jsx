import React, { useState, useEffect } from 'react';
import './style.scss';

import phone from 'src/assets/img/icon-phone.svg';
import menuIcon from 'src/assets/img/icon-menu.svg';
import { contacts } from 'src/utils/datasets';

function Navigate({ links }) {
  const [menu, setMenu] = useState(false);

  function linkMapper() {
    return links.map((link, idx) => {
      return (
        <li className='nav_item' key={idx} onClick={() => setMenu(false)}>
          <a href={link.url}>{link.title}</a>
        </li>
      );
    });
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="nav">
      <div className="nav_body">
        <div className="container">
          <div className="nav_section">
            <a className="nav_logo" >
              {/* <img src={logo} alt="" /> */}
              {/* LOGO */}
            </a>
            <div className="nav_main">
              <p className='system_text_color'>Your handyman</p>
              <ul className='nav_list'>
                { linkMapper() }
              </ul>
            </div>
            <div className="nav_contacts">
              <p className='system_text_color'>Press for call</p>
              <p><a className='nav_tel' href={`tel:${contacts.phoneNumber}`}>{ contacts.phoneNumber }</a></p>
              {/* <p><a className='nav_tel' href={`tel:${contacts.phoneNumber_2}`}>{ contacts.phoneNumber_2 }</a></p> */}
            </div>
            <div className="nav_mobile">
              {!menu && <img src={phone} className='icon' alt="call us" />}
              {!menu && <img src={menuIcon} className='icon' alt="menu button"  onClick={() => setMenu(true)}/>}
              {menu && <button class="close-button" aria-label="close" onClick={() => setMenu(false)}/>}
            </div>
          </div>
        </div>
      </div>
      <div className={menu ? `nav_menu active` : `nav_menu`}>
        <div className="container">
          <p className='system_text_color'>Press for call</p>
          <p><a className='nav_tel' href={`tel:${contacts.phoneNumber}`}>{ contacts.phoneNumber }</a></p>
          {/* <p><a className='nav_tel' href={`tel:${contacts.phoneNumber_2}`}>{ contacts.phoneNumber_2 }</a></p> */}
          <ul className='nav_list'>
            { linkMapper() }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigate;