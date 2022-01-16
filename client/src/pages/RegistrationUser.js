import {registerUserRequest} from "../api/api";
import {Button, Checkbox, Form, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {SForm} from "../styles/commonStyles";

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
            <h1 style={{marginBottom:"130px"}}>Create your account</h1>
            <SForm
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
                    <Input data-testid="username" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input data-testid="email" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password  data-testid="password"/>
                </Form.Item>

                <Form.Item name="isAdmin" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox data-testid="isadmin">is Admin</Checkbox>
                </Form.Item>

                <Form.Item type="flex" justify="center">
                        <Button className={'btnLogin'} htmlType="submit" >
                            Sign Up
                        </Button>
                </Form.Item>

            </SForm>
        </div>
    )
}

export default RegistrationUser