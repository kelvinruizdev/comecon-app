import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import '../../styles/restaurant.css';

const Restaurant = () => {
  const { restaurantId } = useParams();
  const { actions } = useContext(Context);
  const [restaurant, setRestaurant] = useState({})

  //Haré una consulta a la base de datos para traerme el restaurante.
  useEffect(() => {
    const { getRestaurant } = actions;
    setRestaurant(getRestaurant(restaurantId));
  }, []);


  return (
    <div className='container restaurant__containr'>
      <h2 className='restaurant__title text-light'>
        Dashboard
      </h2>
      <div className='restaurant__content'>
        content
      </div>
    </div>
  );
};
export default Restaurant;