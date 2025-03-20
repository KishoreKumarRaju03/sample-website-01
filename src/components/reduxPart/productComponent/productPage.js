
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import AddToCart from './AddToCart';
import '../../../style/productStyle/productHome.css';
import shoe from '../../../asset/shoe-product.jpg';
import Cart from './cart';

const ProductPage = () => {


    const product = {
        id: 1,
        title: "Campus OGL 10 Men's Casual Shoes",
        price: 1199,
        imageUrl: shoe,
        description: "Cushioned comfort with memory insole and lace-up design. Perfect for casual outings.",
        rating: 4.3,
        reviews: 124,
      };


    return(
        <>
        <div className='product-description'>
            <p style={{display: 'block'}}>In This Page I Have Used React-Redux For <br></br>Item Quantity</p>
        </div>
        <div className="product-page">
            
            <ProductImage imageUrl={product.imageUrl} />

            <ProductDetails product={product} />

            {/* <AddToCart /> */}

            <Cart />
        </div>
        </>
    );
};

export default ProductPage;