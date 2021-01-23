// Write your Character component here
import React from 'react';
import styled from 'styled-components';

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
    
    const eye_color = (
        data.map(info => {
            return info.eye_color;
        })
    );
    

    return (
      <Head>  
        <Main>
            <h1>Name: {char[0]}</h1>
            <p>Gender: {gender[0]}</p>
            <p>Skin Color: {skin_color[0]}</p>
            <p>Height: {height[0]}</p>
            <p>Mass: {mass[0]}</p>
            <p>Eye Color: {eye_color[0]}</p>
        </Main>

        <Main>
            <h1>Name: {char[5]}</h1>
            <p>Gender: {gender[5]}</p>
            <p>Skin Color: {skin_color[5]}</p>
            <p>Height: {height[5]}</p>
            <p>Mass: {mass[5]}</p>
            <p>Eye Color: {eye_color[5]}</p>
        </Main>
        
        <Main>
            <h1>Name: {char[9]}</h1>
            <p>Gender: {gender[9]}</p>
            <p>Skin Color:{skin_color[9]}</p>
            <p>Height: {height[9]}</p>
            <p>Mass: {mass[9]}</p>
            <p>Eye Color: {eye_color[9]}</p>
        </Main>

        <Main>
            <h1>Name: {char[4]}</h1>
            <p>Gender: {gender[4]}</p>
            <p>Skin Color:{skin_color[4]}</p>
            <p>Height: {height[4]}</p>
            <p>Mass: {mass[4]}</p>
            <p>Eye Color: {eye_color[4]}</p>
        </Main>

        <Main>
            <h1>Name: {char[8]}</h1>
            <p>Gender: {gender[8]}</p>
            <p>Skin Color:{skin_color[8]}</p>
            <p>Height: {height[8]}</p>
            <p>Mass: {mass[8]}</p>
            <p>Eye Color: {eye_color[8]}</p>
        </Main>

      </Head>  

    );
};

    const Head = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-content:center;
        max-width:100%;
        align-items:center;
        padding-bottom:5%;
    `;

    const Main = styled.div`
    border: 1px dashed brown;
    background-color:white;
    width:50%;
    justify-content:center;
    opacity:0.5;
    
    
    `;


export default Character;