import React from 'react'
import style from '../../styles/styles.module.scss';
const Detailcolumn = ({data,heading,color,align}) => {
  return (
    <div className={`flex flex-column ${align}`}>
        <div style={{color:color}} className={style.detailcolumnheading}>{heading}</div>
        <div className={style.detailcolumnsubheading}>{data}</div>
    </div>
  )
}

export default Detailcolumn