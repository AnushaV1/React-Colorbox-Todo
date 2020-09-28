import React from "react";
import "./Box.css";

const Box = ({id, width, height, backgroundColor, handleRemove}) => {

    const remove = () => handleRemove(id);
    return (
    
    <div  className="box" style={{
        backgroundColor: backgroundColor,
        width: `${width}px`,
        height: `${height}`}} >
    
        <button onClick= {remove}>X</button>
        </div>
    )
}

export default Box;