import React from "react";
import 'antd/dist/antd.css';
import Title from "antd/es/typography/Title";
import {Button, Checkbox, Form, Input} from "antd";

const FormCreate = ({onFinish,onFinishFailed}) => {

    return (
        <div className="App">
            <Title style={{marginBottom:"130px"}}>Create your account</Title>
            <Form
                name="basic"
                className='form'
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

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

                <Form.Item name="isAdmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>is Admin</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button className={'btnLogin'} htmlType="submit">
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default FormCreate
