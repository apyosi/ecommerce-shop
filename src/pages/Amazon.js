import React from 'react';
import list from '../data';
// import '../styles/amazon.css';
import Cards from '../components/Cards';

const Amazon = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
                
                ))
              }
              {/* {console.log(item)} */}
    </section>
  )
}

export default Amazon;