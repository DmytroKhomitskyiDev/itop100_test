import React, {useEffect, useState} from "react";
import {SCard} from "../../styles/commonStyles";
import {getUserById} from "../../api/api";

const UserCard = ({user}) => {
    const {username,email,count_profile} = user
    return (
        <>
            <SCard userCard>
                <div className="cardTop">
                    <p className="cardTitle">{username}</p>
                    <p className="cardInfo">{email}</p>
                    <p className="cardInfo">{count_profile} profiles </p>
                </div>
            </SCard>
        </>
    )
}

export default UserCard