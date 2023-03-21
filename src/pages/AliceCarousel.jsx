import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Fetch data from API and update state
    }, []);
  
    return (
      <AliceCarousel>
        {/* Render carousel items using data from API */}
      </AliceCarousel>
    );
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  <AliceCarousel>
  {data.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  ))}
</AliceCarousel>



  
  
  export default Carousel;
  
