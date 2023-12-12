import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';
import TravelPlanCard from './TravelPlanCard';
import FavoriteList from './FavoriteList';

const TravelList = () => {
    const [plans, setPlans] = useState(travelPlansData);
    const [favorites, setFavorites] = useState([]);

    const handleDelete = (id) => {
        const updatedPlans = plans.filter((plan) => plan.id !== id);
        setPlans(updatedPlans);
    };

    const handleFavorite = (plan) => {

        const isFavorite = favorites.some((favorite) => favorite.id === plan.id);
    
        if (!isFavorite) {

          setFavorites([...favorites, plan]);
    
          // Remove from main list
          const updatedPlans = plans.filter((p) => p.id !== plan.id);
          setPlans(updatedPlans);
          
        }
      };

    return (
       <>
       {plans.map((plan) => (
        <TravelPlanCard key={plan.id} plan = {plan} deletePlan={handleDelete} addFav={handleFavorite} />
        
       ))}
       {favorites.map((favorite) => (
       <FavoriteList key={favorite.id} favorite={favorite} />))}
       </>
    );
};

export default TravelList;
