import './Home.css';
import NewCollections from '../../Components/homeSections/NewCollections';
import WomenPopular from '../../Components/homeSections/WomenPopular';
import exclusive_image from '../../Frontend_Assets/exclusive_image.png';
import hero_image from '../../Frontend_Assets/hero_image.png';
import { useEffect } from 'react';

const Home = () => {
  useEffect(()=>{},[]);
  return (
    <main className='home'>

      <section className='home-hero'>
        <div className='hero-content'>
          <h2 className='hero-title'>NEW ARRIVALS ONLY</h2>
          <div className='hero-subtitle'> new collections for everyone</div>
          <button className='hero-button'>Latest collection -&gt; </button>
        </div>
        <div className='hero-image-box'>
          <img className='hero-image' src={hero_image} alt='hero'/>
        </div>
      </section>

      <section className='home-popular'>
        <WomenPopular />
      </section>

      <section className='home-offer'>
        <div className='offer-content'>
          <h2 className='offer-title'>Exclusive Offers for you</h2>
          <div className='offer-subtitle'> ONLY ON BEST SELLER PRODUCTS</div>
          <button className='offer-button'>Check now</button>
        </div>
        <div className='offer-image-box'>
          <img className='offer-image' src={exclusive_image} alt='exculsive'/>
        </div>
      </section>

      <section className='home-new-collections'>
        <NewCollections />
      </section>

    </main>
  )
}

export default Home
