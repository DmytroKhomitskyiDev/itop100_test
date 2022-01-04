import React, {useEffect} from "react";
import {Button, Checkbox, Col, Form, Input} from "antd";
import Title from "antd/es/typography/Title";
import {loginUserRequest} from "../api/api";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/actions";

const Login = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const onFinish = async (value) => {
        const {data} = await loginUserRequest(value)
        if(data.success){
            localStorage.setItem('token', data.token)
            dispatch(setUser(data.user))
            localStorage.setItem('user', JSON.stringify(data.user))
            navigate(`/users`)
        }
    }

    const onFinishFailed = (error) => {
        console.log('ok' + error)
    }

    return (
        <div className="App">
            <Title >Sign in</Title>
            <Form
                name="basic"
                className='formAuth'
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 25 }}>
                    <Button className={'btnLogin'} htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login