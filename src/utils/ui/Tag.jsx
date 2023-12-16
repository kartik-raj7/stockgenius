import React from 'react'
import style from '../../styles/styles.module.scss';
const Tag = ({text,color,textcolor,height}) => {
  return (
    <div style={{backgroundColor:color,color:textcolor,height:height}} className={`${style.tag}`}>{text}</div>
  )
}

export default Tag