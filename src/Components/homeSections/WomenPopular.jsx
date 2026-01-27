import data_product from '../../Frontend_Assets/data';
import ItemElement from '../itemElement/ItemElement';
import './Popular.css';

const WomenPopular = () => {
  return (
    <section className='sectioin-popular'>
        <header className='popular-header'>
          <h2 className='popular-title'>POPPULAR IN WOMEN</h2>
          <div className='popular-underline'></div>
        </header>
        <div className='popular-grid'>
            {data_product.map((item, index) => {
              return(
                <div className='popular-item' key={index}>
                  <ItemElement item={item}/>
                </div>
              )
            })}
        </div>
    </section>
  )
}

export default WomenPopular
