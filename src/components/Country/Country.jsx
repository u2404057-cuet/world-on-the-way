import React, { useState } from 'react'
import './Country.css'

const Country = ({country, handleVisitedCountries}) => {

    // console.log(Object.values(country?.currencies?.currencies || {})[0]?.name);
    // console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common} </h3>
            <p>Language: {Object.values(country.languages.languages)[0]} <br></br>Currency: {Object.values(country?.currencies?.currencies || {})[0]?.name}({Object.values(country?.currencies?.currencies || {})[0]?.symbol})</p><br></br>
            <button onClick={handleVisited} className='btn'>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;