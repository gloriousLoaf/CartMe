/* HOME VIEW */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';
import ProductCarousel from '../components/ProductCarousel';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';

const HomeView = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  console.log(products);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to={'/'} className='btn btn-light'>
          Go Back
        </Link>
      )}

      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : products[0] === undefined ? (
        <h1 className='mt-2'>No results for {keyword}</h1>
      ) : (
        <>
          <h1>Latest products</h1>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeView;
