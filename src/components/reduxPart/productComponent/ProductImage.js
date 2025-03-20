

import React from 'react';

const ProductImage = ({ imageUrl }) => {
  return (
    <div className="product-image">
      <img src={imageUrl} alt="Product" style={{borderRadius: '20px'}} />
    </div>
  );
}

export default ProductImage;
