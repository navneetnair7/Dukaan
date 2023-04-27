import React from "react";

function Carcard(props){
    return(
        <div className="Car-card">
            <div className="car-top">
            <div className="car-image"></div>
            </div>
            
            <div className="car-bottom">
            <div className="name">{props.name}</div>
            <div className="quantity">{props.quantity}</div>
            <div className="price">{props.price}</div>
            <button className="add">ADD</button>
            </div>
        </div>
    )
}
export default Carcard;