import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {getProfilesRequest} from "../api/api";
import {Col, Row, Spin} from "antd";

const Profiles = () => {

    const [profiles, setProfiles] = useState()

    useEffect(()=> {
        const getProfiles = async () => {
            const {data} = await getProfilesRequest()
            setProfiles(data)
        }
        getProfiles()
    },[])

    if(!profiles) return <Spin/>

    return(
        <>
            <Header />
            <div className="container">
                <h1>Profiles:</h1>
                    <Row gutter={24}>
                        {profiles.map(el => {
                            return (
                                <Col span={6} key={el.id}>
                                     <Card  name={el.name} gender={el.gender} birthdate={el.birthdate} city={el.city}/>
                                </Col>
                            )
                        })}
                        <AddCardProfile/>
                    </Row>
            </div>

        </>

    )
}
export default Profiles