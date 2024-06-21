import './style.css';
import { useParams } from 'react-router-dom';
import { Data } from '../../constants/mockData';
import { ProductDetailsContent } from '../../components';
import { useEffect } from 'react';
import { scrollToTop } from '../../utilities/scrollToTop';
const ProductDetail = () => {
  const { productId } = useParams();
  const productData = Data.productsShop[productId];
  useEffect(() => {
    scrollToTop(0, 0);
  }, []);
  return (
    <section className='product-details'>
      <div className='container'>
        <figure className='product-media'>
          <img
            src={productData?.frontImg}
            alt={productData?.label}
            loading='lazy'
            className='object-cover'
          />
        </figure>

        {productData && <ProductDetailsContent productData={productData} />}
      </div>
    </section>
  );
};
export default ProductDetail;
