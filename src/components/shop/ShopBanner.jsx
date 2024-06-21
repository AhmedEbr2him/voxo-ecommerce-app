import { ShopImages } from '../../assets/images/images';
const ShopBanner = () => {
  return (
    <section className='section shop-top-banner'>
      <div className='banner'>
        <div className='banner-media' style={{ backgroundImage: `url(${ShopImages.banner})` }}>
          <img src={ShopImages.banner} alt='shop banner' />
          <div className='banner-content'>
            <h3 className='title-medium'>Shop The Latest Trends</h3>
            <p>
              Shop the latest clothing trends with our weekly edit of what&apos;s new in online at
              Voxo. From out latest woman collection.
            </p>
          </div>
        </div>
        <div className='banner-contain'>
          <p className='body-medium'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
  );
};
export default ShopBanner;
