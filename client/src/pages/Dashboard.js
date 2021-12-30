import React from "react";
import Header from "../components/Header/Header";
import {Col, Row} from "antd";
import ProfileCard from "../components/ProfileCard/ProfileCard";

const Dashboard = () => {
    return(
        <>
            <Header/>
            <div className="container">
                <h1>Dashboard</h1>
                <Row gutter={24}>
                    <Col span={6} >

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Dashboard