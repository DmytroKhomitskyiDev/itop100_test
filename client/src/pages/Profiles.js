import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {deleteProfileRequest, getProfilesRequest} from "../api/api";
import {Col, Row, Spin} from "antd";
import moment from "moment";
import ProfileFormModal from "../components/ProfileFormModal/ProfileFormModal";

const Profiles = () => {

    const [profiles, setProfiles] = useState()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeProfile, setActiveProfile] = useState({id:null,name:'',gender:'male',birthdate:moment(),city:''})

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

    const editProfile = (values) => {
        setActiveProfile(values)
        setIsModalVisible(true)
    }

    if(!profiles) return <Spin/>

    return(
        <>
            <Header />
            <div className="container">
                <ProfileFormModal
                    isModalVisible={isModalVisible}
                    activeProfile={activeProfile}
                    setIsModalVisible={setIsModalVisible}
                    setActiveProfile={setActiveProfile}
                />
                <h1>Profiles:</h1>
                    <Row gutter={24}>
                        {profiles.map(el => {
                            return (
                                <Col span={6} key={el.id}>
                                     <ProfileCard
                                         profile={el}
                                         deleteProfile={() => deleteProfile(el.id)}
                                          editProfile={editProfile}
                                     />
                                </Col>
                            )
                        })}
                        <AddCardProfile setIsModalVisible={setIsModalVisible}/>
                    </Row>
            </div>

        </>

    )
}
export default Profiles