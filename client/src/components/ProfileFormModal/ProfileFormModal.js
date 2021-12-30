import React, {useEffect} from "react";
import Modal from "antd/es/modal/Modal";
import {Button, DatePicker, Form, Input, Radio} from "antd";
import {locale} from "moment";
import moment from "moment";
import {createProfileRequest, editProfileRequest} from "../../api/api";
import {initialProfileValues} from "../../helpers/constants";
import {getFormatedData} from "../../helpers/utils";

const ProfileFormModal = ({isModalVisible,activeProfile,setIsModalVisible,setActiveProfile}) => {

    const [form] = Form.useForm()

    const onFinish = (values) => {
        values.birthdate = moment(new Date(values.birthdate)).format("DD.MM.YYYY")
        if(activeProfile.id) {
            editProfileRequest(values,activeProfile.id)
        } else {
            createProfileRequest(values)
        }
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setTimeout(() => {
            form.setFieldsValue(initialProfileValues)
            setActiveProfile(initialProfileValues)
        }, 100)
    };

    useEffect(() => {
        const formatDate = {...activeProfile, birthdate:getFormatedData(activeProfile.birthdate)}
         form.setFieldsValue(formatDate)
    },[activeProfile])

    return(
        <Modal visible={isModalVisible}  onCancel={handleCancel} footer={null} >
            <Form
                name="basic"
                className='formAuth'
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                form={form}
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
                    <Radio.Group >
                        <Radio value={"male"}>male</Radio>
                        <Radio value={"female"}>female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="birthdate"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
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
    )
}

export default ProfileFormModal