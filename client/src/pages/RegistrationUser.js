import React, {useEffect} from "react";
import FormCreate from "../components/FormCreate";

const RegistrationUser = ({id,username,email,password,isAdmin}) => {
    const onFinish = (values) => {

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    useEffect( () => {

    },[])
    return (
        <FormCreate onFinish={onFinish} onFinishFailed={onFinishFailed}/>
    )
}

export default RegistrationUser