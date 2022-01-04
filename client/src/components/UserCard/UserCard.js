import React from "react";
import {SCard} from "../../styles/commonStyles";

const UserCard = ({users}) => {
    const {username,email} = users
    return (
        <>
            <SCard userCard>
                <div className="cardTop">
                    <p className="cardTitle">{username}</p>
                    <p className="cardInfo">{email}</p>
                    <p className="cardInfo">Profile</p>
                </div>
            </SCard>
        </>
    )
}

export default UserCard