import React from "react";
import deleteImg from "../../image/icons/Delete.svg"
import edit from "../../image/icons/edit.svg"

const Card = () => {
    return (
        <div className={'card'}>
            <div className="cardTop">
                <p className="cardTitle">Danylo Bilyi</p>
                <p className="cardInfo">male</p>
                <p className="cardInfo">25.03.2003</p>
                <p className="cardInfo">Kyiv</p>
            </div>
            <div className="cardBottom">
                <button>edit <img src={edit} alt="edit"/></button>
                <button>delete <img src={deleteImg} alt="delete"/></button>
            </div>
        </div>
    )
}

export default Card