import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import {getDashBoardRequest} from "../api/api";
import DashboardCard from "../components/DashboardCard/DashboardCard";

const Dashboard = () => {
    const [dashboard,setDashboard] = useState()
    useEffect(() => {
        getDashBoardRequest().then(({data}) => {
            setDashboard(data.data)
        })
    },[])

    if(!dashboard) return <Spin/>

    const getCurrentTitle = (name) => {
        switch (name) {
            case "users":
                return "Users: "
            case "profiles":
                return "Profiles: "
            case "adult":
                return "Profiles over 18 years old: "
            default:
                return ''
        }
    }
    return(
        <>
            <Header/>
            <div className="container">
                <h1>Dashboard</h1>
                <Row gutter={24}>
                    {dashboard.map(el => (
                        <DashboardCard key={el.name} name={getCurrentTitle(el.name)} count={el.count}/>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default Dashboard