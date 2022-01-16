import React from "react";
import addProfile from "../../image/icons/addProfile.svg";
import {SAddCard} from "./style";

const AddCardProfile = ({setIsModalVisible}) => {
    return(
        <>
            <SAddCard>
                <div className="add" style={{cursor:"pointer"}} onClick={() => setIsModalVisible(true)} data-testid="modalBtn">
                    <img src={addProfile} alt="addProfile"/>
                    <span>Crearte new profile</span>
                </div>
            </SAddCard>
        </>
    )
}

export default AddCardProfile