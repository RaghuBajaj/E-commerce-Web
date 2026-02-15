import { useContext } from 'react';
import { ItemContext } from '../../Context/Context.jsx';
import './Product.css';

const Product = () => {
    const { product, addToCart, reduceItemFromCart } = useContext(ItemContext);
    if(!product) return null;
    const { id, name, category, image, old_price, new_price } = product;
  
  return (
    <main className='product-page'>
      <section className='product-wrapper'>

        <div className='product-images'>
            <div className='product-thumbnails'>
                <img src={image} alt='side image'/>
                <img src={image} alt='side image'/>
                <img src={image} alt='side image'/>
                <img src={image} alt='side image'/>
            </div>
            <div className='product-main-image'>
                <img src={image} alt={name}/>
            </div>
        </div>

        <div className='product-details'>
            <h1 className='product-name'>{name}</h1>

            <div className='product-price-box'>
                <span className='product-new-price'>₹{new_price}</span>
                <span className='product-old-price'>₹{old_price}</span>
            </div>

            <p className='product-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia id ipsa cum.</p>
            <button className='product-add-btn' onClick={() => addToCart(id)}>ADD TO CART</button>
            <div className='product-meta'>
                <span>Category: {category}</span>
                <span>Tags: #{category}</span>
            </div>

        </div>
      </section>
      <section className='product-extra'>Other Components and informations</section>
    </main>
  )
}

export default Product