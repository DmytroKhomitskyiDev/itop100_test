import React, {useState} from "react";
import deleteImg from "../../image/icons/Delete.svg"
import edit from "../../image/icons/edit.svg"
import {SCard} from "./style";

const Card = ({name,gender,birthdate,city}) => {
    return (
        <>
            <SCard>
                <div className="cardTop">
                    <p className="cardTitle">{name}</p>
                    <p className="cardInfo">{gender}</p>
                    <p className="cardInfo">{birthdate}</p>
                    <p className="cardInfo">{city}</p>
                </div>
                <div className="cardBottom">
                    <button>edit <img src={edit} alt="edit"/></button>
                    <button>delete <img src={deleteImg} alt="delete"/></button>
                </div>
            </SCard>
        </>

    )
}

export default Card