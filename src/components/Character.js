// Write your Character component here
import React from 'react';
//import App from '../App';
// import axios from 'axios';
// import {BASE_URL} from '../constants/keys';

const Character = (props) => {
    const {data} = props;
    return (
        <div>
            <h1>{data.name}</h1>;
            <p>{data.gender}</p>
            <p>{data.hair_color}</p>
            <p>{data.height}</p>
            <p>{data.mass}</p>
        </div>

    );
};
    

export default Character;