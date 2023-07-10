import React from 'react';
import { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from "../components/House"
import { Link } from 'react-router-dom';
import {ImSpinner2} from "react-icons/im"

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);
  if(loading){
    return(
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    )
  }

  if(houses.length < 1){
    return(
      <div className='text-center text-3xl mt-48 text-gray-400'>Sorry, Nothing Found</div>
    )
  }
  return <div>
    <div className='grid md:grid-cols-3 lg:grid-cols-4 z-0'>
      {
        houses.map((house, index) => {
          return (
            <Link to={`/PropertyDetails/${house.id}`} key={index}>
              <House house={house}/>
            </Link>
          )
        })
      }
    </div>
  </div>;
};

export default HouseList;
