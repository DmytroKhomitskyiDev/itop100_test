import React, {useEffect} from "react";
import {Button, DatePicker, Form, Input, Radio} from "antd";
import {locale} from "moment";
import moment from "moment";
import {createProfileRequest, editProfileRequest} from "../../api/api";
import {initialProfileValues} from "../../helpers/constants";
import {getFormatedData} from "../../helpers/utils";
import {useDispatch, useSelector} from "react-redux";
import {setActiveProfile, toggleIsLoader, toggleOpenModalProfile} from "../../redux/actions";
import {SModal} from "../../styles/commonStyles";
import agreeImg from "../../image/icons/agree.svg"
import cancelImg from "../../image/icons/cansel.svg"

const ProfileFormModal = () => {

    const isModalVisible = useSelector(state => state.profile.isModalVisible)
    const activeProfile = useSelector(state => state.profile.activeProfile)
    const isLoader = useSelector(state => state.profile.isLoader)


    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const onFinish = (values) => {

        values.birthdate = moment(new Date(values.birthdate)).format("DD.MM.YYYY")
        if(activeProfile.id) {
            editProfileRequest(values,activeProfile.id).then(({data}) => {
                if(data.success){
                    dispatch(setActiveProfile(initialProfileValues))
                    dispatch(toggleOpenModalProfile())
                    dispatch(toggleIsLoader())
                }
            }).catch(e => {
                console.log(e)
            }).finally(param => {
                dispatch(toggleIsLoader())
            })
        } else {
            createProfileRequest(values,activeProfile.currentUserId).then(({data}) => {
                if(data.success){
                    dispatch(toggleOpenModalProfile())
                    dispatch(toggleIsLoader())
                }
            }).catch(e => {
                console.log(e)
            }).finally(param => {
                dispatch(toggleIsLoader())
            })
        }
    };

    const handleCancel = () => {
        dispatch(toggleOpenModalProfile())
        setTimeout(() => {
            form.setFieldsValue(initialProfileValues)
            dispatch(setActiveProfile(initialProfileValues))
        }, 10)
    };

    useEffect(() => {
        const formatDate = {...activeProfile, birthdate:getFormatedData(activeProfile.birthdate)}
         form.setFieldsValue(formatDate)
    },[activeProfile])

    return(
        <SModal visible={isModalVisible} onCancel={handleCancel} footer={null} >
            <Form
                name="basic"
                className='formAuth'
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                form={form}
                data-testid="formProfile"
            >
                <Form.Item
                    label="name:"
                    name="name"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="gender:"
                    name="gender"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Radio.Group >
                        <Radio value={"male"}>male</Radio>
                        <Radio value={"female"}>female</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="birthdate:"
                    name="birthdate"
                    rules={[{ required: true, message: 'Please input date' }]}
                >
                    <DatePicker locale={locale} format={'DD.MM.YYYY'}/>
                </Form.Item>
                <Form.Item
                    label="city:"
                    name="city"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 25 }} className={'groupBtnModal'}>
                    <Button className={'btnOk'} htmlType="submit" loading={isLoader} data-testid="closeButton">
                        <img src={agreeImg} alt="agree"/>
                    </Button>
                    <span className={"closeBtn"} onClick={handleCancel}>
                        <img src={cancelImg} alt="agree"/>
                    </span>
                </Form.Item>
            </Form>
        </SModal>
    )
}

export default ProfileFormModal