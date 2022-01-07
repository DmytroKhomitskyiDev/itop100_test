import React, {useEffect} from "react";
import {Button, Form, Input, Radio, Spin} from "antd";
import {editUserRequest} from "../../api/api";
import {toggleIsLoader} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {SModal} from "../../styles/commonStyles";
import cancelImg from "../../image/icons/cansel.svg";
import agreeImg from "../../image/icons/agree.svg";

const UserModalForm = ({isModalVisible,setIsModalVisible,userData}) => {

    const [userForm] = Form.useForm()
    const dispatch = useDispatch()

    const onFinish = (values) => {
       editUserRequest(values,userData.user.id).then(({data}) => {
           if (data.success) {
               dispatch(toggleIsLoader())
               setIsModalVisible(false);
           }
       })
    }

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const formatDate = {...userData.user}
        userForm.setFieldsValue(formatDate)
    },[userData])

    return(
        <>
            <SModal visible={isModalVisible}  onCancel={handleCancel} footer={null} >
                <Form
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    autoComplete="off"
                    form={userForm}
                >
                    <Form.Item
                        label="user name:"
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="email:"
                        name="email"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="role:"
                        name="isadmin"
                    >
                        <Radio.Group >
                            <Radio value={false}>user</Radio>
                            <Radio value={true}>admin</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 25 }} className={'groupBtnModal'}>
                        <Button className={'btnOk'} htmlType="submit" >
                            <img src={agreeImg} alt="agree"/>
                        </Button>
                        <span className={"closeBtn"} onClick={handleCancel}>
                            <img src={cancelImg} alt="agree"/>
                        </span>
                    </Form.Item>

                </Form>
            </SModal>
        </>
    )
}

export default UserModalForm