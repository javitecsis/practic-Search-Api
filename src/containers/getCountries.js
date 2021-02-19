const getCountries = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const res = await fetch(url);
    const countries = await res.json();

    return  countries;
}

export default getCountries;
