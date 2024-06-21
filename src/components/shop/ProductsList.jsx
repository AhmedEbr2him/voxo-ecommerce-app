import { useContext, useRef, useState } from 'react';
import SelectMenu from '../common/SelectMenu';
import { MainContext } from '../../context/MainContext';
import { Data } from '../../constants/mockData';
import ProductBox from '../common/ProductBox';
import { ProductView } from '../index';
import { useStoredProducts } from '../../hooks/useStoredProducts';

const ProductsList = () => {
  const { currentProductsView, setCurrentProductsView, produtsTypeView, setProdutsTypeView } =
    useContext(MainContext);
  const [productIndex, setProductIndex] = useState(null);
  const { handleLocalStorage } = useStoredProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const indexOfLastProduct = productsPerPage + currentPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Data.productsShop.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProducts = Math.ceil(Data.productsShop.length / productsPerPage);
  const productsRef = useRef();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      if (productsRef.current) {
        productsRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
      }
    }
  };
  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProducts)) {
      setCurrentPage(currentPage + 1);
      if (productsRef.current) {
        productsRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
      }
    }
  };

  const handlePageNumber = pageNum => {
    if (pageNum) {
      setCurrentPage(pageNum);
      if (productsRef.current) {
        productsRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
      }
    }
  };

  return (
    <div className='product-list' ref={productsRef}>
      <div className='filter-options'>
        <SelectMenu
          data={Data.productOptionsView}
          storedKey={'productsTypeView'}
          selectValueType={currentProductsView}
          setSelectValueType={setCurrentProductsView}
          placeholder={'Select Page Per View'}
        />
        <SelectMenu
          data={Data.productTypeView}
          storedKey={'productsView'}
          selectValueType={produtsTypeView}
          setSelectValueType={setProdutsTypeView}
          placeholder={'Select Featured'}
        />
      </div>

      <div className='products-list-wrapper'>
        <ul className='products-list-menu'>
          {currentProducts.map((product, index) => (
            <li className='product-item' key={index}>
              <ProductBox
                data={product}
                index={index}
                setProductIndex={() => setProductIndex(index)}
                cartStorage={() => handleLocalStorage('productsCart', index, product)}
              />
            </li>
          ))}
        </ul>

        {Data.productsShop[productIndex] && (
          <ProductView
            product={Data.productsShop[productIndex]}
            index={productIndex}
            saveToLocalStorage={() =>
              handleLocalStorage('productsCart', productIndex, Data.productsShop[productIndex])
            }
          />
        )}
      </div>

      <div className='pageination'>
        <div className='prev-btn'>
          <button
            type='button'
            aria-label='pageination prev button'
            className='pageination-btn'
            style={{ opacity: currentPage === 1 && '0' }}
            onClick={handlePrevPage}
          >
            Previous
          </button>
        </div>
        {/* PAGINEATION LIST */}
        {
          <ul className='pageination-list'>
            {Array.from({ length: totalProducts }, (_, index) => {
              const tempPageNo = index + 1;

              return (
                <li className='pageination-item' key={index}>
                  <button
                    type='button'
                    aria-label='pageination button'
                    className={`pageination-btn btn ${tempPageNo === currentPage ? 'active' : ''}`}
                    onClick={() => handlePageNumber(tempPageNo)}
                  >
                    {tempPageNo}
                  </button>
                </li>
              );
            })}
          </ul>
        }
        <div className='next-btn'>
          <button
            type='button'
            aria-label='pageination prev button'
            className='pageination-btn '
            onClick={handleNextPage}
            style={{ opacity: currentPage === totalProducts && '0' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
