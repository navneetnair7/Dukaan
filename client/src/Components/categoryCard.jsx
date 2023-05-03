import React from "react";

function categoryCard(props){

    return(
        <div className="cat-card">
            <div className="cat-image">
                {/* <img src={require("../images/cart.png")}></img> */}
                <div className="imagebuf"></div>
            </div>
            <div className="cat-name">{props.name}</div>
        </div>
    )
}
export default categoryCard;