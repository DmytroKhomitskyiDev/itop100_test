import React, {useState} from "react";
import deleteImg from "../../image/icons/Delete.svg"
import edit from "../../image/icons/edit.svg"
import editWhite from "../../image/icons/editWhite.svg"
import deleteImgWhite from "../../image/icons/deleteImgWhite.svg"
import {SCard} from "../../styles/commonStyles";
import {SCardBottom} from "./style";

const ProfileCard = ({profile,deleteProfile,editProfile}) => {
    const {name,gender,birthdate,city} = profile
    const [isEditHover, setIsEditHover] = useState(false)
    const [isDeleteHover, setIsDeleteHover] = useState(false)

    const handleMouseMove = (action, value) => {action(value)}

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
                    <button onClick={() => editProfile(profile)}
                            onMouseEnter={() => handleMouseMove(setIsEditHover, true)}
                            onMouseLeave={() => handleMouseMove(setIsEditHover, false)}>
                        edit <img src={isEditHover ? editWhite : edit } alt="edit"/>
                    </button>
                    <button  onClick={deleteProfile}
                             onMouseEnter={() => handleMouseMove(setIsDeleteHover, true)}
                             onMouseLeave={() => handleMouseMove(setIsDeleteHover, false)}>
                        delete <img src={isDeleteHover ? deleteImgWhite : deleteImg} alt="delete"/>
                    </button>
                </SCardBottom>
            </SCard>
        </>
    )
}

export default ProfileCard