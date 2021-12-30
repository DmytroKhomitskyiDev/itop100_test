import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import UserCard from "../components/UserCard/UserCard";
import {getUsersRequest} from "../api/api";

const Users = () => {

    const [users, setUsers] = useState()

    useEffect(()=> {
        const getUsers = async() => {
           const {data} = await getUsersRequest()
            setUsers(data)
        }
        getUsers()
    },[])

    if(!users) return <Spin/>

    console.log(users)
    return (
        <>
            <Header />
            <div className="container">
                <h1>Users:</h1>
                <Row gutter={24}>
                    {users.map(el => {
                        return(
                            <Col span={6} key={el.id}>
                                <UserCard users={el}/>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Users