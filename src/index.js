import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import StarRatings from './StarRatings';
import './index.css';
import App from './App';

// function Test(){
//   const [movieRating, setMovieRating] = useState(0)
//   return <div>
//     <StarRatings onSetRating={setMovieRating}></StarRatings>
//     <p>It was rated {movieRating} rating</p>
//   </div>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StarRatings maxRating={5} messages={["Terrible","Bad","Okay","Good","Amazing"]}></StarRatings>
    <StarRatings size={24} color="red" className='test' defaultRating={3}></StarRatings>

  <Test></Test> */}

    <App />
  </React.StrictMode>
);

