import React from "react";

const FavoriteList = ({favorite}) => {
    return(
        <div>
            <h2 style={{color:"black"}}>Favorite List</h2>
        <div className="itemCard" key={favorite.id}>
                <div className="picture">
                    <img src={favorite.image} alt="img" />
                </div>
                <div className="content">
                    <div className="destination">
                        {favorite.destination} ({favorite.days} days)
                    </div>
                    <div className="desc">{favorite.description}</div>
                    <div className="price">
                        <span>Price: </span>
                        {favorite.totalCost} €
                    </div>
                    <div className="extraFeatures">
                        {favorite.totalCost <= 350 ? (
                            <div className="greatDeal">Great deal</div>
                        ) : favorite.totalCost >= 1500 ? (
                            <div className="premium">Premium</div>
                        ) : null}
                        {favorite.allInclusive ? (
                            <div className="allInclusive">All-Inclusive</div>
                        ) : null}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FavoriteList