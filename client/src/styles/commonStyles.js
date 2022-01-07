import styled from "styled-components";
import colors from "./colors";
import Modal from "antd/es/modal/Modal";
import {Form} from "antd";

export const SCard = styled.div`
  background: ${colors.WHITE};
  max-width: ${(props) => (props.userCard ? "396px" : "320px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.userCard ? "30px": "35px")};
  padding-bottom: ${(props) => (props.userCard ? "30px": "0")};
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;

  .cardTop{
    text-align: center;
    width: 256px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: ${(props) => (props.userCard ? "0": "30px")};
  }
  .cardInfo,.cardTitle{
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.75px;
    color: ${colors.BODY};
    margin-bottom: 15px;
  }

  .cardInfo:last-child{
    margin-bottom: 0;
  }
  .cardTitle{
    font-weight: 500;
    margin-bottom: 20px;
  }
`
export const SModal = styled(Modal)`
  .ant-modal-content{
    border-radius: 16px;
    width: 600px;
  }
  .ant-form{
    max-width: 250px;
    margin: 0 auto;
  }
  .ant-form-item:last-child{
    margin-bottom: 0;
  }
  .ant-modal-body{
    padding: 70px 0;
  }
  .ant-picker{
    width: 100%;
  }
  .ant-input,.ant-picker{
    border: none;
    border-bottom: 1px solid #14142B;
    padding-left: 0;
    color: ${colors.TITLE};
    outline: none;
  }
  .ant-radio,.ant-input,.ant-picker,.ant-picker-input > input,.ant-form label span:last-child{
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.75px;
    outline: none;
  }
  .ant-form label span:last-child{
    padding-right: 0;
  }
  .ant-radio-wrapper:last-child{
    margin-right: 0;
  }
  .ant-radio:hover .ant-radio-inner{
    border-color: unset;
  }
  .ant-radio{
    top: 0;
  }
  .ant-radio-group{
    display: flex;
    justify-content: space-between;
  }

  .ant-picker-focused{
    box-shadow: none;
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    display: none;
  }
  .ant-form-vertical .ant-form-item-label{
    padding-bottom: 0;
  }
  .ant-radio-checked .ant-radio-inner{
    border-color:${colors.TITLE};
  }
  .ant-radio-inner::after{
    background-color:${colors.TITLE};
  }
  .ant-form-item input[type='radio']{
    display: none;
  }
  .ant-modal-close-x{
    display: none; 
  }
  .ant-form-item-label > label{
    letter-spacing: 0.75px;
    font-size: 18px;
    color: ${colors.GREY};
  }
  .closeBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .groupBtnModal .ant-form-item-control-input-content{
    display: flex;
    justify-content: space-between;
  }
  .btnOk,.btnOk:hover,.closeBtn{
    background: #EFF0F6;
    width: 100px;
    border-radius: 9px;
    border: none;
    height: 38px;
  }
  .btnOk img{
    width: 16px;
    vertical-align: baseline;
  }
  .closeBtn img{
    width: 13px;
  }
`

export const SForm = styled(Form)`
    .ant-form-item-required{
      font-size: 18px;
      line-height: 34px;
      letter-spacing: 1px;
      color: ${colors.LABEL};
    }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    display: none;
  }
  .ant-input,.ant-input-affix-wrapper{
    border: none;
    border-bottom: 1px solid #14142B;
    padding-left: 0;
    color: ${colors.TITLE};
    outline: none;
    background: transparent;
  }
  .ant-input-affix-wrapper:hover{
    border-bottom: 1px solid #14142B;
  }
  .ant-form-item-control-input-content{
    text-align: center;
  }

  button,button:hover{
    width: 135px;
    height: 56px;
    background-color: ${colors.INPUT_BG};
    border-radius: 12px;
    border: none;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.75px;
    color: ${colors.ADD_PROFILE};
  }
  .ant-col-offset-8{
    margin: 0 auto;
  }
  .ant-checkbox-inner{
    border-radius: 2px;
    border: 1px solid #14142B;
    background: #E5E5E5;
  }
  .ant-checkbox-checked .ant-checkbox-inner::after{
    transform: rotate(
            0deg) scale(1) translate(-19%,-49%);
    width: 12px;
    height: 12px;
    background: black;
    transition: unset;
    border: none;
    padding-left: 0;
  }
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox .ant-checkbox-inner,
  .ant-checkbox-checked::after{
    border: 1px solid #14142B;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,.ant-input-affix-wrapper{
    box-shadow: none;
    outline: none;
    border-color: unset;
  }
`