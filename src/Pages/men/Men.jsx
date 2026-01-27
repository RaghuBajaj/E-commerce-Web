import ItemElement from '../../Components/itemElement/ItemElement';
import all_product from '../../Frontend_Assets/all_product'
import banner_mens from '../../Frontend_Assets/banner_mens.png';
import '../Category.css';

const Men = () => {
  return (
    <main className='category-page'>
      <div className='category-banner'>
        <img className='category-banner-image' src={banner_mens} alt='offer'/>
      </div>
      <section className='category-toolbar'>
        <span className='category-count'>showing 1-12 out of 45</span>
        <span className='category-sort'>sort:</span>
      </section>
      <section className='category-grid'>
            {all_product.map((item, index) => {
                if(item.category === 'men'){
                  return(
                    <div className='category-item' key={index}>
                     <ItemElement item={item}/>
                    </div>
                 )}
            })}
      </section>
      <div className='category-show-more'>
        <span className='category-show-more-btn'>Show more</span>
      </div>
    </main>
  )
}

export default Men
