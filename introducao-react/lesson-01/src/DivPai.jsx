import React from "react";

function DivPai(props) {
    const { children } = props;

    return (
        <div className="DivPai">
            {children}
        </div>
    )
}

export default DivPai;