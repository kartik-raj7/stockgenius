import React from 'react'
import style from '../styles/stockheaderdiv.module.scss'
const StockHeaderDiv = ({data}) => {
console.log(data);
  return (
    <>
    {data.length>=1&&
    <div style={{display:'flex',justifyContent:'space-between'}}>
     <div style={{display:'flex'}}>
      {/* <div className={style.companyimageborder}>
      
      </div>
      <image src={data[0]?.image} className={style.companyimage} alt="stock-image" style={{width:'50px',height:'50px'}}/> */}
      <div className={`${style.companyname}`} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <div className={style.companytitle}>{data[0]?.companyName}</div>
      <div className={style.companytitle}>{data[0]?.symbol}</div>
      </div>
     </div>
     <div className={style.pricediv}>
       <div className={style.companytitle}>${data[0]?.price}</div>
      </div>
    </div>}
    </>
  )
}

export default StockHeaderDiv