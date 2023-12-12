import React, { useState } from 'react';
import travelPlansData from '../assets/travel-plans.json';

const TravelList = () => {
    const [plans, setPlans] = useState(travelPlansData);

    const handleDelete = (id) => {
        const updatedPlans = plans.filter((plan) => plan.id !== id);
        setPlans(updatedPlans);
    };

    return (
        <>
            {plans.map((item) => (
                <div className="itemCard" key={item.id}>
                    <div className="picture">
                        <img src={item.image} alt="img" />
                    </div>
                    <div className="content">
                        <div className="destination">
                            {item.destination} ({item.days} days)
                        </div>
                        <div className="desc">{item.description}</div>
                        <div className="price">
                            <span>Price: </span>
                            {item.totalCost} €
                        </div>
                        <div className="extraFeatures">
                            {item.totalCost <= 350 ? (
                                <div className="greatDeal">Great deal</div>
                            ) : item.totalCost >= 1500 ? (
                                <div className="premium">Premium</div>
                            ) : null}
                            {item.allInclusive ? (
                                <div className="allInclusive">All-Inclusive</div>
                            ) : null}
                        </div>
                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={() => handleDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TravelList;
