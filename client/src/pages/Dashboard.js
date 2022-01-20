import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import { Row, Spin} from "antd";
import {getDashBoardRequest} from "../api/api";
import DashboardCard from "../components/DashboardCard/DashboardCard";
import {getCurrentTitle} from "../helpers/utils";

const Dashboard = ({ dashboardDefault = [] }) => {
    const [dashboard,setDashboard] = useState(dashboardDefault)
    useEffect(() => {
        getDashBoardRequest().then(({data}) => {
            setDashboard(data.data)
        })
    },[])

    if(!dashboard) return <Spin/>


    return(
        <>
            <Header/>
            <div className="container">
                <h1 data-testid="dashboardTitle">Dashboard</h1>
                <Row gutter={24}>
                    {dashboard !== [] && dashboard.map(el => (
                        <DashboardCard key={el.name} name={getCurrentTitle(el.name)} count={el.count}/>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Dashboard