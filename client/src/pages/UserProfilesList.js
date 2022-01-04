import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {useParams} from "react-router-dom";
import {getUserById} from "../api/api";


const UserProfilesList = () => {
    const {id} = useParams()
    const [userData,setUserData] = useState([])
    const [isloading,setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        getUserById(id).then(({data}) => {
            setUserData({user:data.data.user[0],userProfiles:data.data.profilesUser})
            setIsLoading(false)
        })
    },[])

    if(isloading) return <Spin/>

    console.log(userData)

    return(
        <>
            <Header/>
            <div className="container">
                <div className="userIdMain">
                    <h1 className="userIdInfo">{userData.user?.username}</h1>
                    <p className="userIdInfo">{userData.user?.email}</p>
                    <p className="userIdInfo userStatus">{userData.user?.isadmin ? 'Admin' : 'user'}</p>
                    <div className="userBtnGroup">
                        <span><img src="" alt=""/></span>
                        <span><img src="" alt=""/></span>
                    </div>
                </div>
                <Row gutter={24}>
                    <Col span={6} >
                        {/*<ProfileCard*/}
                        {/*    profile={el}*/}
                        {/*    deleteProfile={() => deleteProfile(el.id)}*/}
                        {/*    editProfile={editProfile}*/}
                        {/*/>*/}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default UserProfilesList