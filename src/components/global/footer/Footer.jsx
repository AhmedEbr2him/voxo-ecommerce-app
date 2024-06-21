import './footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../common/Logo';
import { routeConstants } from '../../../constants/routeConstants';
import { Images } from '../../../assets/images/images';

const Footer = () => {
  const footerData = [
    {
      label: 'About us',
      items: {
        links: [
          routeConstants.HOME,
          routeConstants.PRODUCTS,
          routeConstants.ABOUT,
          routeConstants.BLOG,
          routeConstants.CONTACT,
        ],
        titles: ['Your Home', 'Your Products', 'About', 'Blog', 'Contact us'],
      },
    },
    {
      label: 'New Categories',
      items: {
        links: [
          'latest_shoes',
          'branded_jeans',
          'new_jackets',
          'colorful_hoodies',
          'shiner_goggles',
        ],
        titles: ['Latest Shoes', 'New Jackets', 'Colorfull Hoodies', 'Blog', 'Shiner Goggles'],
      },
    },
    {
      label: 'Get Help',
      items: {
        links: [
          routeConstants.ORDER,
          routeConstants.ORDER,
          routeConstants.WISHLIST,
          routeConstants.FAQ,
        ],
        titles: ['Your Orders', 'Your Account', 'Track Orders', 'Your Wishlist', 'Shopping FAQs'],
      },
    },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='main-footer'>
          <div className='contacts'>
            <ul className='contacts-list'>
              <li className='footer-item'>
                <Logo />
              </li>
              <li className='footer-item'>
                <span>Phone:</span>
                <Link to='tel:9878454645'>9878454645</Link>
              </li>
              <li className='footer-item'>
                <span>Address:</span>
                <address>Acme Widgets 123 Widget Street Acmeville, AC 12345 USA</address>
              </li>
              <li className='footer-item'>
                <span>Email:</span>
                <Link to={'email:admin@gmail.com'}>admin@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className='footer-links-wrapper'>
            <div className='footer-links-list'>
              {footerData.map((items, index) => (
                <div className='footer-links' key={index}>
                  <h3 className='footer-title'>{items.label}</h3>
                  <div className='footer-content'>
                    <ul>
                      {items.items.titles.map((title, index) => (
                        <li key={index} className='footer-item'>
                          <Link key={index} className='footer-link'>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className='newsletter subscribe-section'>
                <div className='subscribe-detail'>
                  <h2>Subscribe Our News</h2>
                  <div className='subscripe-form'>
                    <form className='form'>
                      <div>
                        <input
                          type='email'
                          name='supscribe-customer[email]'
                          id='supscribe_)_customer'
                          placeholder='Your Email Address'
                          className='form-control'
                        />
                        <label htmlFor='customer__email' className='input-label label-large'>
                          Email
                        </label>
                      </div>
                      <button type='submit' className='link-btn'>
                        Subscribe
                      </button>
                    </form>
                  </div>
                  <p>
                    Subscribe and receive our newsletters to follow the news about our fresh and
                    fantastic Products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sub-footer'>
        <div className='container'>
          <div className='inner-sub'>
            <ul>
              <li>We accept:</li>
              {Images.map((image, index) => (
                <li key={index}>
                  <Link to='#'>
                    <img src={image} alt='payment icon' />
                  </Link>
                </li>
              ))}
            </ul>
            <p className='copyright'>
              &copy; {currentYear} all right reserved. Made with heart by&nbsp;
              <Link to='#'>
                <span className='theme-color'>ahmed ebrahim</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
