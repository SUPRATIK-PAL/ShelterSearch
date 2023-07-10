import React from 'react';
import { useState, useEffect, createContext } from 'react';
import {housesData} from "../data"


export const HouseContext = createContext();





const HouseContextProvider = ({children}) => {
  const[houses, setHouses] = useState(housesData);
  const[country, setCountry] = useState('Location (any)')
  const[countries, setCountries] = useState([]);
  const[property, setProperty] = useState('Property type (any)');
  const[properties, setProperties] = useState([]);
  const[price, setPrice] = useState('Price range (any)');
  const[loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })

    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [])

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })

    const uniqueProperties = ['Property (any)', ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [])


  const handleClick = () => {

    // //function that checks if string contains (any) 

    const isDefault = (str) => {
      return String(str).split(" ").includes("(any)");
    }

    // //getting min value of price
    const minPrice = parseInt(price.split(" ")[0])
    // //getting max value
    const maxPrice = parseInt(price.split(" ")[2])

    const newHouses = housesData.filter((house) => {
      setLoading(true);
      const housePrice = parseInt(house.price);
      //all selected
      if(house.type === property && house.country === country && housePrice >= minPrice && housePrice <= maxPrice){
        return house;
      }

      //all default 
      if(isDefault(country) && isDefault(property) && isDefault(price)){
        return house;
      }

      //country is not default
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country;
      }

      //property is not default
      if(isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.type === property;
      }
      //price is not default
      if(isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice <= maxPrice && housePrice >= minPrice){
          return house;
        }
      }
      //country and property is not default
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property;
      }
      //country and price is not default
      if(!isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice <= maxPrice && housePrice >= minPrice){
          return house.country === country;
        }
      }
      //property and price is not default
      if(isDefault(country) && !isDefault(property) && !isDefault(price)){
        if(housePrice <= maxPrice && housePrice >= minPrice){
          return house.type === property;
        }
      }
    });
    setTimeout(() => {
      return(
        newHouses.length < 1 ? setHouses([]) : 
        setHouses(newHouses),
        setLoading(false)
      );
    }, 1000)
    

  }
   
  return <HouseContext.Provider value={{
    country,
    countries,
    houses,
    property,
    properties,
    price,
    loading,
    setHouses,
    setCountries,
    setCountry,
    setProperty,
    setProperties,
    setPrice,
    setLoading,
    handleClick,

  }}>
     {children}
  </HouseContext.Provider>;
};

export default HouseContextProvider;
