import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import UserCard from "../components/UserCard/UserCard";
import {getUsersRequest} from "../api/api";
import {Link} from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const getUsers = async() => {

           setLoader(true)
           await getUsersRequest().then(({data}) => {
               setUsers(data.data)
               setLoader(false)
           }).catch(e => {
               console.log(e)
               setLoader(false)
           })
        }
        getUsers()
    },[])

    if(loader) return <Spin/>

    return (
        <>
            <Header />
            <div className="container">
                <h1>Users:</h1>
                <Row gutter={24}>
                    {users.map(el => {
                        return(
                            <Col span={6} key={el.id}>
                                <Link to={`/user/${el.id}`}>
                                     <UserCard users={el}/>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Users