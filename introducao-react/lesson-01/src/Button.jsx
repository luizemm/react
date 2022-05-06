import React from "react";

const Button = props => {
    const { onClick, name, className } = props;

    return (
        <button className={className} onClick={onClick}>{name}</button>
    )
}

export default Button;