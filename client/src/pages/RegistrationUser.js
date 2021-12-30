import {registerUserRequest} from "../api/api";
import Title from "antd/es/typography/Title";
import {Button, Checkbox, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";

const RegistrationUser = () => {
    const navigation = useNavigate()

    const onFinish = async (values) => {
        const {data} = await registerUserRequest(values)
       if(data.success){
           navigation('/login')
       }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="App">
            <Title style={{marginBottom:"130px"}}>Create your account</Title>
            <Form
                name="basic"
                className="formAuth"
                layout="vertical"
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

                <Form.Item type="flex" justify="center">
                        <Button className={'btnLogin'} htmlType="submit" >
                            Sign Up
                        </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default RegistrationUser