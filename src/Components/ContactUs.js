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
    <div id='Contact gk' className='container' style={{ marginBottom:10}}>
      <form  ref={form} onSubmit={sendEmail}>

<div className='container chan' id='chan' >
  <label ><strong><pre>Name    </pre></strong></label>
  <input  type="text" name="user_name" />
</div>

<div className='container chan' id='chan' style={{marginTop:6}} >
  <label ><strong><pre>Email   </pre></strong></label>
  <input  type="email" name="user_email" />
</div>

<div className='container chan' id='chan' style={{marginTop:6}}>
    <label><strong><pre>Message </pre></strong></label>
    <textarea  name="message" />
</div>

<div className='container' style={{alignItems:'end'}} >
  {/* <input  type="submit" value="Se" /> */}
  
      <button style={{marginTop:8}} type="submit" value={"Send"} class="btn btn-success" >Success</button>
  </div>

</form>
    </div>
  )
}
