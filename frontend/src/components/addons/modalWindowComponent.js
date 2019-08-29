import React from "react";


const ModalWindowComponent = (props) => {
    if (props.type === 'confirmation') {
        return (
            <div className=main-div></div>
        )
    } else if (props.type === 'image') {
        return (
            <div className="main-div"></div>
        )
    }
    return <div></div>
}

export default ModalWindowComponent