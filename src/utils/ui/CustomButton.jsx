import { Button } from 'antd'
import React from 'react'
// import style from '../../styles/custombuttonstyle.module.scss'
const CustomButton = ({width,onClick}) => {
  return (
    <Button onClick={onClick}  style={{width:width}}>Plans</Button> //className={style.buttonstyle}
  )
}

export default CustomButton