import React from "react";

import './Button.css'


const Button = ({title, handleClick}) => {
    return (
        <div>
            <button className="button" onClick={() => handleClick()}>{title}</button>
        </div>
    )
}

export default Button;