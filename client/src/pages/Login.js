import React from "react";
import {Button, Checkbox, Col, Form} from "antd";
import {SInput} from "../styles/styled";
import Title from "antd/es/typography/Title";
import {loginUserRequest} from "../api/api";
import style from "./style.module.css"

const Login = () => {
    const onFinish = async (value) => {
        const {data} = await loginUserRequest(value)
        if(data.success){
            localStorage.setItem('token', data.token)
            // Redirect to profile list page
        }
    }

    const onFinishFailed = (error) => {
        console.log('ok' + error)
    }

    return (
        <div className="App">
            <Title style={style.h1}>Sign in</Title>
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
                    <SInput />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <SInput.Password />
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