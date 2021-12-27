import React, {useState} from "react";
import addProfile from "../../image/icons/addProfile.svg";
import Modal from "antd/es/modal/Modal";
import {Button, DatePicker, Form, Input, Radio} from "antd";
import moment, {locale} from "moment";
import {createProfileRequest} from "../../api/api";
import {SAddCard} from "./style";

const AddCardProfile = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [value, setValue] = React.useState(1);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        values.birthdate = moment(new Date(values.birthdate)).format("DD.MM.YYYY")
        createProfileRequest(values)
        setIsModalVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <>
            <SAddCard>
                <div className="add" style={{cursor:"pointer"}} onClick={showModal}>
                    <img src={addProfile} alt="addProfile"/>
                    <span>Crearte new profile</span>
                </div>
            </SAddCard>
            <Modal visible={isModalVisible}  onCancel={handleCancel} footer={null}>
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
                        label="name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="gender"
                        name="gender"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Radio.Group  value={value}>
                            <Radio value={"male"}>male</Radio>
                            <Radio value={"female"}>female</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="birthdate"
                        name="birthdate"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <DatePicker locale={locale}  />
                    </Form.Item>
                    <Form.Item
                        label="city"
                        name="city"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 25 }}>
                        <Button className={'btnLogin'} htmlType="submit">
                            ok
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AddCardProfile