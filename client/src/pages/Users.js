import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import UserCard from "../components/UserCard/UserCard";
import {useDispatch, useSelector} from "react-redux";
import { setUser} from "../redux/actions";

const Users = () => {
    // const dispatch = useDispatch()
    // const userData = JSON.parse(localStorage.getItem("token"));
    // dispatch(setUser(userData.user))
    return (
        <>
            <Header />
            <div className="container">
                <h1>Users:</h1>
                <Row gutter={24}>
                    <Col span={6}>
                        <UserCard />

                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Users