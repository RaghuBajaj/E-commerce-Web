import new_collections from '../../Frontend_Assets/new_collections'
import ItemElement from '../itemElement/ItemElement'
import './Popular.css';

const NewCollections = () => {
  return (
    <section className='sectioin-popular'>
        <header className='popular-header'>
          <h2 className='popular-title'>NEW COLLECTIONS</h2>
          <div className='popular-underline'></div>
        </header>
        <div className='popular-grid'>
            {new_collections.map((item, index) => {
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

export default NewCollections
