import React, {useRef} from "react";
import "./Join.css";

import emailjs from '@emailjs/browser';


const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_psqlr3o', 'template_vn8poes', form.current, 'S9TmXKphl5FpJZWVu')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>Pronto Para</span>
          <span className="stroke-text"> Aumentar o Nível</span>
        </div>
        <div>
          <span>da saúde </span>
          <span className="stroke-text"> Com a gente?</span>
        </div>
      </div> 
      <div className="right-j">

        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email address" />
            <button className="btn btn-j">Comece Agora</button>
        </form>

      </div>
    </div>
  );
};

export default Join;
