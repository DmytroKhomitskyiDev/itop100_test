import React from "react";
import {Button} from "antd";
import style from "./ButtonAuth.module.css"

const ButtonAuth = ({children}) => {
    return <Button className={style.BtnAuth}>{children}</Button>
}

export default ButtonAuth