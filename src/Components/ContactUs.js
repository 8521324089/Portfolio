import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_fd99s5j', 'template_96h2q6r', form.current, {
          publicKey: 'kPq0jFmD7h5cN82oE',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log("message send");
            alert("Message send Successfully");
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Message does not send");
          },
        );
    };

  return (
    <div id='Contact'>
      <form ref={form} onSubmit={sendEmail}>

        <div style={{margin:6,display:'flex' ,alignContent:'center'}}>
          <label >Name</label>
          <input style={{marginLeft:35}} type="text" name="user_name" />
        </div>

        <div style={{margin:6,display:'flex',alignContent:'center'}}>
          <label >Email</label>
          <input style={{marginLeft:38}} type="email" name="user_email" />
        </div>

        <div style={{margin:6,display:'flex',alignContent:'center'}}>
            <label>Message</label>
            <textarea style={{marginLeft:15}} name="message" />
        </div>
      
        <div style={{marginTop:40,marginLeft:90,display:'flex',alignContent:'center'}}>
          {/* <input  type="submit" value="Se" /> */}
          
              <button type="submit" value={"Send"} class="btn btn-success " >Success</button>
          <div id='su'></div>
        </div>
    </form>
    </div>
  )
}
