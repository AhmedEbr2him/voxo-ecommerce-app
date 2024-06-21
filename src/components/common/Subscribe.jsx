const Subscribe = () => {
  return (
    <section className='section subscribe-section'>
      <div className='container'>
        <div className='subscribe-detail'>
          <h2>Subscribe Our News</h2>
          <p>
            Subscribe and receive our newsletters to follow the news about our fresh and fantastic
            Products.
          </p>
        </div>
        <div className='subscripe-form'>
          <form className='form'>
            <div>
              <input
                type='email'
                name='subscribe-customer[email]'
                id='subscribe__customer'
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
      </div>
    </section>
  );
};
export default Subscribe;
