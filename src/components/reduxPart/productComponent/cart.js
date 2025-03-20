import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../reduxFiles/cartAction';
import '../../../style/productStyle/productHome.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <p>{item.title} - {item.quantity} x ₹{item.price}</p>
              {/* <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button> */}
              <p onClick={() => handleRemoveFromCart(item.id)} className='remove-button'>Remove</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
