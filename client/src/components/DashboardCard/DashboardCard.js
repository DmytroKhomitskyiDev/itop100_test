import React from "react";
import {SDashboard} from "./style";

const DashboardCard = ({name,count}) => {
    return (
        <>
            <SDashboard >
                <div className="cardTop">
                    <p className="cardTitle" data-testid="dashboardName">{name}</p>
                    <p className="cardInfo">{count}</p>
                </div>
            </SDashboard>
        </>
    )
}

export default DashboardCard