import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nqf8cbd",
        "template_2t9gl5x",
        form.current,
        "OH-y9ZgwUUhxnB_Lr"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact_section " id="contact">
      <div className="container px-0">
        <div className="heading_container ">
          <h2 className="">
            Contact Us
          </h2>
        </div>
      </div>
      <div className="container container-bg">
        <div className="row">
          <div className="col-lg-7 col-md-6 px-0">
            <div className="map_container">
              <div className="map-responsive">
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.8554508333455!2d10.253304874693885!3d36.72603267187878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd362adc182301%3A0xd3937b63f4c56d1b!2sCentre%20Commercial%20AZUR%20CITY!5e0!3m2!1sfr!2stn!4v1705603706963!5m2!1sfr!2stn"
  width="600"
  height="300"
  frameBorder="0"
  style={{ border: 0, width: '100%', height: '100%' }}
  allowFullScreen
></iframe>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-5 px-0">
            <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Phone</label>
            <input type="text" name="user_phone" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
            </StyledContactForm>
</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;