import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import {BASE_URL} from './constants/keys';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [charInfo, setCharInfo] = useState({});

useEffect(() => {
  axios.get(`${BASE_URL}`)
  .then((res) => {
    console.log(res);
    setCharInfo(res.data.results);
  })
  .catch((err) => console.log(err));

  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
  {/* <p>{charInfo.data.results}</p> */}

      <div className='listItems'>
      
      </div>
    </div>
    
  );
}

export default App;
