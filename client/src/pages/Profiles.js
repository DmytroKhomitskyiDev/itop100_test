import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {deleteProfileRequest, getProfilesRequest} from "../api/api";
import {Col, Row, Spin} from "antd";
import moment from "moment";
import ProfileFormModal from "../components/ProfileFormModal/ProfileFormModal";

const Profiles = () => {

    const [profiles, setProfiles] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeProfile, setActiveProfile] = useState({id:null,name:'',gender:'male',birthdate:moment(),city:''})
    const [isLoader, setIsLoader] = useState(false)
    const [isLoaderUser, setIsLoaderUser] = useState(false)

    const getProfiles = async () => {
        setIsLoaderUser(true)
        await getProfilesRequest().then( ({data}) => {
            setProfiles(data)
            setIsLoaderUser(false)
        })
    }

    useEffect(()=> {
        getProfiles()
    },[])

    useEffect(() => {
        if(isLoader){
            setIsModalVisible(false)
            getProfiles()
        }
    },[isLoader])


    const deleteProfile = async (value) => {
        setIsLoader(true)
         await deleteProfileRequest(value).finally(param => {
             setIsLoader(false)
         })
    }

    const editProfile = (values) => {
        setActiveProfile(values)
        setIsModalVisible(true)
    }

    return(
        <>
            {isLoaderUser && (
                <div style={{width:"100%", height:'100%', position:'fixed',background:'rgba(255,255,255,0.7)',zIndex:55}}>
                    <Spin/>
                </div>
            )}
            <Header />
            <div className="container">
                <ProfileFormModal
                    isModalVisible={isModalVisible}
                    activeProfile={activeProfile}
                    setIsModalVisible={setIsModalVisible}
                    setActiveProfile={setActiveProfile}
                    setIsLoader={setIsLoader}
                    isLoader={isLoader}
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