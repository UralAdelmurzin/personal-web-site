import React, { useEffect, useState } from 'react';
import './style.scss';

import Promo from 'src/components/Promo';
import Footer from 'src/components/Footer';
import Cards from 'src/components/Cards';
import Delivery from 'src/components/Delivery';
import OurServices from 'src/components/OurServices';
import AboutUs from 'src/components/AboutUs';
import Contacts from 'src/components/Contacts';
import Navigate from 'src/components/Navigate';

function LandingPage() {
  const [links, setLinks] = useState([])

  const createMenuLinks = () => {
    const nodeLinks = document.getElementsByTagName('section')
    let linksArr = []

    for (let i = 0; i < nodeLinks.length; i++) {

      if (nodeLinks[i].id.length) {
        linksArr.push({
          title: `${nodeLinks[i].attributes.name.nodeValue}`,
          url: `#${nodeLinks[i].id}`,
        })
      }
    }

    setLinks(linksArr)
  }

  useEffect(() => {
    createMenuLinks()
  }, []);

  return (
    <div className='landing'>
      <Promo>
        <Navigate links={links}/>
      </Promo>
      <section id='about-us' name="About us">
        <AboutUs />
      </section>
      <section id='benefits' name="Benefits">
        <Cards />
      </section>
      <section id='process' name="Handyman Workflow">
        <Delivery />
      </section>
      <section id='our-services' name="Services">
        <OurServices />
      </section>
      <section id='contact-us' name="Contacts">
        <Contacts id='contact-us'/>
      </section>
      <Footer />
    </div>
  )
}

export default LandingPage;