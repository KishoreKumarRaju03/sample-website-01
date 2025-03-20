

import React from 'react';

const AddToCart = () => {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  return (
    <div className="add-to-cart">
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCart;
