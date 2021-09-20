import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,flag,population} = props.countrie;
    
    return (
        <div className="container-div">
            <img src={flag} alt="" />
           <h1>Country : {name}</h1>
           <h3>Capital : {capital} </h3>           
           <h3>Population : {population}</h3>           
           
        </div>
    );
};

export default Country;