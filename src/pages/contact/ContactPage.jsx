import './style.css';
import { MaterialTitle, Subscribe } from '../../components/index';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';

const ContactPage = () => {
  useEffect(() => {
    scrollToTop(0, 0);
  }, []);
  return (
    <section className='contact-us-page'>
      <div className='container'>
        <MaterialTitle
          title={'Contact Us'}
          desc={'Your email address will not be published. Required fields are marked *'}
        />

        <div className='contact-form'>
          <form>
            <div className='form-list'>
              <div className='form-item'>
                <input
                  type='text'
                  id='customer__full__name'
                  placeholder='Enter your full name'
                  autoComplete='none'
                />
                <label htmlFor='customer__full__name'>
                  Full Name <span className='danger'>*Required</span>
                </label>
              </div>
              <div className='form-item'>
                <input
                  type='text'
                  id='customer__number'
                  placeholder='Enter your phone number'
                  autoComplete='none'
                />
                <label htmlFor='customer__number'>
                  Phone Number <span className='danger'>*Optional</span>
                </label>
              </div>

              <div className='form-item'>
                <input
                  type='email'
                  id='customer__email__name'
                  placeholder='Enter your email address'
                  autoComplete='none'
                />
                <label htmlFor='customer__email__name'>
                  Your Email Address <span className='danger'>*Required</span>
                </label>
              </div>

              <div className='form-item'>
                <textarea
                  name='customer_message'
                  id='customer_message'
                  placeholder='Message'
                  className='textarea'
                ></textarea>
                <label htmlFor='customer_message'>Your Message</label>
              </div>
              <div type='submit' className='submit'>
                <button className='submit-btn'>Send Message</button>
              </div>
            </div>
          </form>

          <div className='contact-details'>
            <div className='details-head'>
              <h2>Let&apos;s Get In Touch</h2>
              <p>We&apos;re open for any suggestion or just to have a chat</p>
            </div>

            <ul className='contact-container'>
              <li className='contact-box'>
                <span className='contact-icon'>
                  <Icon icon='mdi:address-marker-outline' width='30' height='30' />
                </span>
                <div className='contact-text'>
                  <h4>Address</h4>
                  <p>Acme Widgets 123 Widget Street Acmeville, AC 12345 United States of America</p>
                </div>
              </li>
              <li className='contact-box'>
                <span className='contact-icon'>
                  <Icon icon='ph:phone' width='30' height='30' />
                </span>
                <div className='contact-text'>
                  <h4>Phone Number</h4>
                  <p>(1800)-000-6890</p>
                </div>
              </li>
              <li className='contact-box'>
                <span className='contact-icon'>
                  <Icon icon='ic:outline-alternate-email' width='30' height='30' />
                </span>
                <div className='contact-text'>
                  <h4>Email</h4>
                  <p>info@contact.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='map'>
        <div className='map-wrapper'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221082.70907472982!2d31.86583050585374!3d30.024882917799875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822cffcd270e7%3A0x98b73d687889fd8!2z2YXYr9mK2YbYqSDYp9mE2YLYp9mH2LHYqSDYp9mE2KzYr9mK2K_YqdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1717279893930!5m2!1sar!2seg'
            width='100%'
            height='250'
            style={{ border: 0, outline: 'none ' }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <Subscribe />
    </section>
  );
};
export default ContactPage;
