import React, { useState } from "react";
import InputField from 'src/components/elements/InputField';
import './style.scss';

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    console.log(e, 'e - handleChange');
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData?.name?.length || !formData?.name?.length) {
      return alert("Please fill the form.");
    }

    const googleFormURL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const formBody = new URLSearchParams({
      "entry.1234567890": formData.name,
      "entry.0987654321": formData.phone,
      "entry.1122334455": 'order'
    });

    await fetch(googleFormURL, {
      method: "POST",
      body: formBody,
      mode: "no-cors"
    });

    alert("Your message has been sent!");
  };

  return (
    <div className='contacts'>
      <div className='container'>
        <h2 className='title'>Contact Us</h2>
        <div className='contacts_body'>
          <h3 className='contacts_title'>We organize the entire process efficiently, quickly, and affordably</h3>
          <p className='contacts_text'>Our manager will call you back within 10 minutes and answer all your questions.</p>

          <form onSubmit={handleSubmit} action="submit" className='contacts_form'>
            <div className="contacts_field">
              <InputField placeholder='Your Name' name="name" onChange={handleChange} required />
            </div>
            <div className="contacts_field">
              <InputField placeholder='Your Phone' type="tel" name="phone" onChange={handleChange} required />
            </div>
            <div className="contacts_field">
              <div className="btn_wrapper">
                <button className='btn' type='submit'>Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts;