import React from 'react';
import { Container } from 'react-bootstrap';
import Spacer from '../elements/spacer';

function Contact() {
  return (
    <Container className="text-center">
      <div className="contact-container">
      <Spacer />
      <Spacer />
        <div className='d-inline-flex flex-column justify-content-start align-items-start'>
          <span>
            Describe your<br></br>project
          </span>
          <div className="spacer-custom"></div>
          <h1>
            Call<br></br>Akku
          </h1>
          <div className="spacer-custom"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 17 17"
              style={{ height: '1em' }}
            >
              <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
            </svg>
          </div>
        </div>
        <Spacer />
        <Spacer />
      </div>
    </Container>
  );
}

export default Contact;
