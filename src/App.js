import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';
import Restaurant from './Restaurant';

function App() {
     const [restaurants,setRestaurants]= useState([]);
     console.log(restaurants);
  return (
    
    <div className="restaurants">
      <Nav restaurants={restaurants}  setRestaurants={setRestaurants}/>
       {restaurants.map(rt => <Restaurant restaurant={rt} />)}
    </div>
  );
}

export default App;
