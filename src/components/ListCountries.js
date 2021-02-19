import React, {useState, useEffect}from 'react';
import  getCountries from '../containers/getCountries'

const initialCountries = [
    {
        name: "Argentina"
    },

    {
        region: "Andorra"
    },
];

const ListCountries =() =>{
    const [countries, setCountries] = useState(initialCountries);

    useEffect (()=>{
        updateCountries();
    },[]);

    const updateCountries =() => {
        getCountries()
        .then((newCountry) => {
            setCountries(newCountry)

        })
    }

    return (
        <div> <h1>List Countries</h1>
            {countries.map((country, index) => (
                <h2><li key={index}>Country:{country.name}
                Region:{country.region} Capital:{country.capital}
                </li>
                </h2>
            ))}
        </div>
    );
};

export default ListCountries;

