import React from "react";
import axios from "axios";

function Carcard(props){

    const AddtoCart = async (item) => {
        await axios.post('http://localhost:4000/cart/add', {
            customer: "Navneet",
            name: item.name,
            price: item.price,
            quantity: 1
        })
    }

    return(
        <div className="Car-card">
            <div className="car-top">
                <div className="car-image">
                    <img src='../images/amul-butter.png'></img>
                </div>
            </div>
            
            <div className="car-bottom">
            <div className="name">{props.name}</div>
            <div className="quantity">{props.quantity}</div>
            <div className="price">{props.price}</div>
            <button className="add" onClick={(e) => {e.preventDefault()
             AddtoCart({name: props.name, price: props.price})}}>ADD</button>
            </div>
        </div>
    )
}
export default Carcard;