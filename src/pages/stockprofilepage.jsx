import React, { useEffect, useState } from 'react'
import style from '../styles/stockprofile.module.scss'
import { axiosGet } from '../services/api/axiosGet'
import { apiRouter } from '../services/utilities/apiRouter'
import CandlestickChart from '../utils/ui/Candlestickchart'
import StockHeaderDiv from '../components/Stockheader'
import StockInfoContainer from '../components/StockInfoContainer'
const stockprofilepage = () => {
const [data,setData] = useState([]);
const [profiledata,setProfileData] = useState([]);
const [pricechangedata,setPriceChangeData] = useState([]);
const chartdata=async ()=>{
   const response = await axiosGet(`${apiRouter.CHART_DATA}/AAPL`);
   const stockdetails = await axiosGet(`${apiRouter.PROFILE_DATA}/AAPL`);
   const stockpricechange = await axiosGet(`${apiRouter.PRICE_CHANGE}/AAPL`);
   setData(response.data.historical);
   setProfileData(stockdetails.data);
   setPriceChangeData(stockpricechange.data);
}
useEffect(()=>{
    chartdata();
},[])
  return (
    <div className={style.stockprofilepage}>
    <div className={style.stockprofilecontent}>
    <StockHeaderDiv data={profiledata}/>
    <div className={style.stockprofilechart}>
    {data&&<CandlestickChart data={data} chartname={"APPLE"}/>}
    </div>
    <div className={style.stockprofilechartpricechange}>
     
    </div>
    <div className={style.stockprofilechartfundamentals}>
     <StockInfoContainer data={profiledata} pricedata={pricechangedata}/>
    </div>
    </div>
    </div>
  )
}

export default stockprofilepage