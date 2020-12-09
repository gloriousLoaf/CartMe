import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { startSession } from 'mongoose';


const CartView = ({ match, location, history }) => {
  // id and qty from URL (won't always have id)
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  
  useEffect(() => {
    // using && instead of if - watch for bugs
    productId && dispatch(addToCart(productId, qty));
    // if (productId) {
    //   dispatch(addToCart(productId, qty));
    // }
  }, [dispatch, productId, qty]);

  return (
    <div>
      Cart
    </div>
  )
};

export default CartView;