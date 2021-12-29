import React from "react";
import {SCard} from "../../styles/commonStyles";

const UserCard = () => {
    return (
        <>
            <SCard>
                <div className="cardTop">
                    <p className="cardTitle">name </p>
                    <p className="cardInfo">email</p>
                    <p className="cardInfo">Profile</p>
                </div>
            </SCard>
        </>
    )
}

export default UserCard