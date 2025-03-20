import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateQuantity } from '../../../reduxFiles/cartAction';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();
  
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch(updateQuantity(product.id, quantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch(updateQuantity(product.id, quantity - 1));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(updateQuantity(product.id, quantity))
  };

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <p className="price">₹{product.price}</p>

      <div className="rating">
        <span>{product.rating} stars</span>
        <span>({product.reviews} reviews)</span>
      </div>

      <p className="description">{product.description}</p>

      <div className="quantity-selector quantity-selction-section">
        <i onClick={decreaseQuantity} className="fa-solid fa-minus quantity-button decrease-quantity"></i>
        <span className="quantity">{quantity}</span>
        <i onClick={increaseQuantity} className="fa-solid fa-plus quantity-button increase-button"></i>
      </div>
      <p onClick={handleAddToCart} className='add-button'>add to cart</p>
    </div>
  );
};

export default ProductDetails;
