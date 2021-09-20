import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

import './Countries.css'
const Countries = () => {
    const [ countries, setCountries] = useState([]);

    useEffect( () =>{
        fetch('https://restcountries.eu/rest/v2/all').then( res=> res.json()).then( data => setCountries(data))
    }, [])
    return (
        <div className="main">

            {
                countries.map( countrie => <Country 
                    countrie={countrie}
                    key={countrie.alpha3Code}
                    ></Country>)
            }

        </div>
    );
};

export default Countries;