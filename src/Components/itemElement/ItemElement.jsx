import { useContext } from 'react';
import { ItemContext } from '../../Context/Context.jsx';
import "./ItemElement.css";

const ItemElement = ({item}) => {
    const { setProduct, navigate } = useContext(ItemContext);
    const {name, image, old_price, new_price} = item;
    const handleClick = () => {
        setProduct(item);
        navigate('/product');
    }
  return (
    <article className='item-card' onClick={() => handleClick()}>
        <div className='item-image-wrapper'>
            <img className='item-image' src={image} alt={name}/>
        </div>
        <div className='item-info'>
            <div className='item-name'>{name}</div>
            <div className='item-prices'>
                <span className='item-new-price'>₹{new_price}</span>
                <span className='item-old-price'>₹{old_price}</span>
            </div>
        </div>
    </article>
  )
}

export default ItemElement
