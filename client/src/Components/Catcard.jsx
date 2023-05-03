import React from "react";
import { useNavigate } from "react-router-dom";

function Catcard(props){
    const navigate = useNavigate()

    return(
        <div className="cat-card hover:cursor-pointer" onClick={() => {
            navigate(`/category/${props.name}`)
        }}>
            <div className="cat-image">
                {/* <img src={require("../images/cart.png")}></img> */}
                <div className="imagebuf"></div>
            </div>
            <div className="cat-name">{props.name}</div>
        </div>
    )
}

export default Catcard;