import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import {Col, Row, Spin} from "antd";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import {useNavigate, useParams} from "react-router-dom";
import {deleteProfileRequest, deleteUserRequest, getUserById} from "../api/api";
import deleteImg from "../image/icons/Delete.svg"
import edit from "../image/icons/edit.svg"
import AddCardProfile from "../components/AddCardProfile/AddCardProfile";
import {useDispatch, useSelector} from "react-redux";
import {setActiveProfile, toggleIsLoader, toggleOpenModalProfile} from "../redux/actions";
import {initialProfileValues} from "../helpers/constants";
import UserModalForm from "../components/UserModalForm/UserModalForm";

const UserProfilesList = () => {

    const {id} = useParams()

    const navigate = useNavigate()
    const [userData,setUserData] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const isLoader = useSelector(state => state.profile.isLoader)

   const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        getUserById(id).then(({data}) => {
            setUserData({user:data.data.user[0],userProfiles:data.data.profilesUser})
        }).finally(param => {
            setIsLoading(false)
        })
    },[])

    useEffect(() => {
        if(isLoader){
            setIsLoading(true)
            getUserById(id).then(({data}) => {
                setUserData({user:data.data.user[0],userProfiles:data.data.profilesUser})

            }).finally(param => {
                dispatch(toggleIsLoader())
                setIsLoading(false)
            })
        }
    },[isLoader])


    const editProfile = (values) => {
        dispatch(setActiveProfile(values))
        dispatch(toggleOpenModalProfile())
    }

    const addProfileUserById = () => {
        const preparePropsActiveProfile = {
            ...initialProfileValues,
            currentUserId: id
        }
        dispatch(setActiveProfile(preparePropsActiveProfile))
        dispatch(toggleOpenModalProfile())
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const deleteProfile = async (value) => {
        dispatch(toggleIsLoader())
        await deleteProfileRequest(value).finally(param => {
            dispatch(toggleIsLoader())
        })
    }

    const deleteUser = (id) => {
        deleteUserRequest(id).then(({data}) => {
            if (data.success){
                navigate('/users')
            }
        })
    }

    return(
        <>
            {isLoading && (
                <div style={{width:"100%", height:'100%', position:'fixed',background:'rgba(255,255,255,0.7)',zIndex:55}} data-testid="loader">
                    <Spin/>
                </div>
            )}
            <UserModalForm setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible} userData={userData} />
            <Header/>
            <div className="container">
                <div className="userIdMain">
                    <h1 className="userIdInfo">{userData.user?.username}</h1>
                    <p className="userIdInfo">{userData.user?.email}</p>
                    <p className="userIdInfo userStatus">{userData.user?.isadmin ? 'Admin' : 'user'}</p>
                    <div className="userBtnGroup">
                        <img onClick={showModal} src={edit} alt="edit"/>
                        <img onClick={() => deleteUser(id)} src={deleteImg} alt="deleteImg"/>
                    </div>
                </div>
                <h1 data-testid="colProfile">Profiles:</h1>
                <Row gutter={24}>
                    {userData.userProfiles?.map(el => {
                        return(
                            <Col span={6} key={el.id}>
                                <ProfileCard
                                    profile={el}
                                    editProfile={editProfile}
                                    deleteProfile={() => deleteProfile(el.id)}
                                />
                            </Col>
                        )
                    })}
                    <AddCardProfile setIsModalVisible={addProfileUserById}/>
                </Row>
            </div>
        </>
    )
}

export default UserProfilesList