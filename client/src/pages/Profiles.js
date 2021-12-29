import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {deleteProfileRequest, getProfilesRequest} from "../api/api";
import {Col, Row, Spin} from "antd";
import {useSelector} from "react-redux";

const Profiles = () => {

    const [profiles, setProfiles] = useState()

    useEffect(()=> {
        const getProfiles = async () => {
            const {data} = await getProfilesRequest()
            setProfiles(data)
        }
        getProfiles()
    },[])

    const deleteProfile = async (value) => {
        const data = await deleteProfileRequest(value);
    }

    if(!profiles) return <Spin/>

    return(
        <>
            <Header />
            <div className="container">
                <h1>Profiles:  </h1>
                    <Row gutter={24}>
                        {profiles.map(el => {
                            return (
                                <Col span={6} key={el.id}>
                                     <ProfileCard profile={el} deleteProfile={() => deleteProfile(el.id)}/>
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