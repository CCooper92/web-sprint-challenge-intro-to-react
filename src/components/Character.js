// Write your Character component here
import React from 'react';
//import App from '../App';
// import axios from 'axios';
// import {BASE_URL} from '../constants/keys';

const Character = (props) => {
    const {data} = props;

    const char = (
        data.map(obj => {
            return obj.name;
        })
    );
    const gender = (
        data.map(info => {
            return info.gender;
        })
    );
    const skin_color = (
        data.map(info => {
            return info.skin_color;
        })
    );
    const height = (
        data.map(info => {
            return info.height;
        })
    );

    const mass = (
        data.map(info => {
            return info.mass;
        })
    );
    
    

    return (
      <div>  
        <div>
            <h1>{char[0]}</h1>
            <p>{gender[0]}</p>
            <p>{skin_color[0]}</p>
            <p>{height[0]}</p>
            <p>{mass[0]}</p>
        </div>

        <div>
            <h1>{char[1]}</h1>
            <p>{gender[1]}</p>
            <p>{skin_color[1]}</p>
            <p>{height[1]}</p>
            <p>{mass[1]}</p>
        </div>
        
        <div>
            <h1>{char[2]}</h1>
            <p>{gender[2]}</p>
            <p>{skin_color[2]}</p>
            <p>{height[2]}</p>
            <p>{mass[2]}</p>
        </div>

      </div>  

    );
};
    

export default Character;