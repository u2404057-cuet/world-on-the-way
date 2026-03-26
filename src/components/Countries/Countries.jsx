import { use, useState } from 'react'
import React from 'react';
import Country from '../Country/Country';
import './Counties.css'

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }
    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h2>Countries Visited: {visitedCountries.length}</h2>
            <div className="Countries">
            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country = {country}
                    handleVisitedCountries = {handleVisitedCountries}
                    >
                    </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;