import React, { useState, useEffect } from 'react';
import getCountries from '../containers/getCountries'



function SearchCountries () {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setFilteredCountries(
        countries.filter( country =>{
            return country.name.toLowerCase().includes( search.toLowerCase() )
        })
    )
    }, [search, countries])

    const setFilteredCountries =() => {
        getCountries()
        .then((newCountry) => {
            setCountries(newCountry)

        })
    }

    return (
        <div>
        <h1>Country Filter</h1>
        <input type="text" placeholder="search" onChange={ e => setSearch(e.target.value)}
        ></input>
        {countries.map((country,idx)=> (
            <CountryDetail key={idx} {...country} />
        ))}
        </div>
    );
}

const CountryDetail = ({ name, flag}) => {
    return (
        <>
        <p>
            <img src={flag} alt={name} style={{ width: "150px", height: "100px"}}/>
        </p>
        <p>{name}</p>
        </>

    )
}

export default SearchCountries;