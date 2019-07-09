import React from 'react';
import '../../styles/stylesheets/Contact.css';
import { Header } from '../common';

function Contact() {
  return (
    <div className='contact'>
      <div class="map"></div>
      <div class="form-container">
        <div class="info">
          <Header text='Contact'/>
          <a href="tel:786-343-8972">786-343-8972</a>
          <br />
          <a href="/">4835 E 4th Ave Ste B Hialeah, FL, 33013</a>
        </div>
        <div class="form">
          <form class="" action="index.html" method="post">
            <input type="text" placeholder="Name" required/>
            <input type="tel" placeholder="Phone" required/>
            <input type="email" placeholder="Email" required/>
            <textarea name="message" placeholder="Message" required></textarea>
            <input type="submit" name="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export { Contact };
