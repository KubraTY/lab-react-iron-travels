import React from "react";

const TravelPlanCard = ({ plan, deletePlan, addFav}) => {

    return (

        <>
            <div className="itemCard" key={plan.id}>
                <div className="picture">
                    <img src={plan.image} alt="img" />
                </div>
                <div className="content">
                    <div className="destination">
                        {plan.destination} ({plan.days} days)
                    </div>
                    <div className="desc">{plan.description}</div>
                    <div className="price">
                        <span>Price: </span>
                        {plan.totalCost} €
                    </div>
                    <div className="extraFeatures">
                        {plan.totalCost <= 350 ? (
                            <div className="greatDeal">Great deal</div>
                        ) : plan.totalCost >= 1500 ? (
                            <div className="premium">Premium</div>
                        ) : null}
                        {plan.allInclusive ? (
                            <div className="allInclusive">All-Inclusive</div>
                        ) : null}
                    </div>
                    <div className="buttons">
                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={() => deletePlan(plan.id)}
                        >
                            Delete
                        </button>
                        <button
                            className="favoriteBtn"
                            onClick={()=>addFav(plan)}
                        >
                            ♡
                        </button>
                    </div>

                </div>
            </div>

        </>
    )

}

export default TravelPlanCard