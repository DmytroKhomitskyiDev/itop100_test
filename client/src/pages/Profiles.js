import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {deleteProfileRequest, getProfilesRequest} from "../api/api";
import {Col, Row, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {setActiveProfile, toggleIsLoader, toggleOpenModalProfile} from "../redux/actions";
import {initialProfileValues} from "../helpers/constants";

const Profiles = () => {

    const [profiles, setProfiles] = useState([])
    const [isLoaderUser, setIsLoaderUser] = useState(false)
    const isLoader = useSelector(state => state.profile.isLoader)

    const currentUserId = useSelector(state => state.user.user.id)
    const dispatch = useDispatch()

    const getProfiles = async () => {
        setIsLoaderUser(true)
        await getProfilesRequest().then( ({data}) => {
            setProfiles(data)
            setIsLoaderUser(false)
        }).catch(e => console.log(e))
    }

    useEffect(()=> {
        getProfiles()
    },[])

    useEffect(() => {
        if(isLoader){
            getProfiles()
        }
    },[isLoader])

    const deleteProfile = async (value) => {
        dispatch(toggleIsLoader())
         await deleteProfileRequest(value).finally(param => {
             dispatch(toggleIsLoader())
         })
    }
    const editProfile = (values) => {
        dispatch(setActiveProfile(values))
        dispatch(toggleOpenModalProfile())
    }

    const addProfileLoginUser = () => {
        const preparePropsActiveProfile = {
            ...initialProfileValues,
            currentUserId: currentUserId
        }
        dispatch(setActiveProfile(preparePropsActiveProfile))
        dispatch(toggleOpenModalProfile())
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
                        <AddCardProfile setIsModalVisible={addProfileLoginUser}/>
                    </Row>
            </div>

        </>

    )
}
export default Profiles