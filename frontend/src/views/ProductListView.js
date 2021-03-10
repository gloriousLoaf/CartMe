/* PRODUCT LIST VIEW - ADMIN */
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Modal, Row, Col, Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import {
  listProducts,
  deleteProduct,
  createProduct,
} from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productConstants';

const ProductListView = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    // send non-admins & unauth'd users to login
    !userInfo.isAdmin && history.push('/login');
    // after successful creation, send admin to edit
    successCreate
      ? history.push(`/admin/product/${createdProduct._id}/edit`)
      : dispatch(listProducts('', pageNumber));
  }, [
    dispatch,
    userInfo,
    history,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
    handleClose();
  };

  const createProductHandler = () => {
    dispatch(createProduct());
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='btn my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      {/* eliminates double loader on delete, but possibly bad practice? */}
      {loadingDelete || (loadingCreate && <Loader />)}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fa fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={handleShow}
                    >
                      <i
                        className='fas fa-trash'
                        style={{ padding: '3px 2px' }}
                      ></i>
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop='static'
                      keyboard={false}
                      centered
                      size='sm'
                    >
                      <Modal.Title className='d-flex p-3 mx-auto text-center'>
                        Delete this product?
                      </Modal.Title>
                      <Modal.Body className='d-flex p-2 mx-auto'>
                        <Button
                          variant='danger'
                          className='mx-2'
                          onClick={() => deleteHandler(product._id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant='primary'
                          className='mx-2'
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                      </Modal.Body>
                    </Modal>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Paginate pages={pages} page={page} isAdmin={true} />
        </>
      )}
    </>
  );
};

export default ProductListView;
