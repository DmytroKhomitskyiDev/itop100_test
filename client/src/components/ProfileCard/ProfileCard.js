import React, {useState} from "react";
import deleteImg from "../../image/icons/Delete.svg"
import edit from "../../image/icons/edit.svg"
import {SCard} from "../../styles/commonStyles";
import {SCardBottom} from "./style";

const ProfileCard = ({profile:{name,gender,birthdate,city},...props}) => {


    return (
        <>
            <SCard>
                <div className="cardTop">
                    <p className="cardTitle">{name}</p>
                    <p className="cardInfo">{gender}</p>
                    <p className="cardInfo">{birthdate}</p>
                    <p className="cardInfo">{city}</p>
                </div>
                <SCardBottom>
                    <button>edit <img src={edit} alt="edit"/></button>
                    <button onClick={props.deleteProfile}>delete <img src={deleteImg} alt="delete"/></button>
                </SCardBottom>
            </SCard>
        </>
    )
}

export default ProfileCard