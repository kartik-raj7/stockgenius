import React from 'react'
import style from '../styles/stockinfocontainer.module.scss'
import Container from '../utils/ui/Container'
import Tag from '../utils/ui/Tag'
import Detailcolumn from '../utils/ui/Detailcolumn'
import Slider from '../utils/ui/SliderDisplay'
import { formatCurrency } from '../utils/GetCurrency'
import CapDetermine from '../utils/CapDetermine'
const StockInfoContainer = ({data,pricedata}) => {
console.log(data,pricedata)
let screensize = ''
  function SliderShow(){
    if(screensize!='mobile'){
        return(
            <div className='flex justify-between m-2'>
            <Detailcolumn data={`${data['52WeekLow']}$`} heading={"52 Week Low"} align={'alignleft'}/>
             {/* need to make that api call */}
            <Slider currentPrice={parseFloat(118.71)} low={parseFloat(data['52WeekLow'])} high={parseFloat(data['52WeekHigh'])} />
            <Detailcolumn data={`${data['52WeekHigh']}$`} heading={"52 Week High"} align={'alignright'}/>
            </div> 
        )
    }
    else{
            return(
               
                <div className='flex align-center flex-column'>
                <div className='mx-2_5'>
                <Slider currentPrice={parseFloat(118.71)} low={parseFloat(data['52WeekLow'])} high={parseFloat(data['52WeekHigh'])} />
                </div>
                <div className='flex justify-between w-80'>
                <Detailcolumn data={`${data['52WeekLow']}$`} heading={"52 Week Low"}/>
                 {/* need to make that api call */}
                <Detailcolumn data={`${data['52WeekHigh']}$`} heading={"52 Week High"}/>
                </div> 
                </div>
                
            )
        }
  }
  return (
    
    <div>
        <Container>
        <div className={`flex justify-between ${style.stockheadingdiv}`}>
        <div className={style.stockheading}>About {data[0]?.companyName}</div>  <Tag text={CapDetermine(data[0]?.mktCap)} color={'black'} textcolor={'white'}/>
        </div>
        <div className={style.stockdescription}>
            {data[0]?.description}
        </div>
        <div style={{display:'flex',margin:'2rem 0'}}>
        <Tag text={`INDUSTRY: ${data[0]?.industry}`} color={'black'} textcolor={'white'}/>
            <Tag text={`SECTOR: ${data[0]?.sector}`} color={'black'}  textcolor={'white'}/>
            </div>  
         {/* <SliderShow/> */}
        <div className={`${style.stockfundamentals}`} style={{display:"flex",justifyContent:'space-between',margin:'2rem'}}> 
        <Detailcolumn  data={`${formatCurrency(data[0]?.mktCap)}$`} heading={"Market Capitalization"} color={'#5367FF'}/>
        <Detailcolumn data={data[0]?.lastDiv} heading={"PE Ratio"} color={'#5367FF'}/>
        <Detailcolumn data={data[0]?.beta} heading={"Beta"} color={'#5367FF'}/>
        <Detailcolumn data={data[0]?.exchange} heading={"Exchange"} color={'#5367FF'}/>
        <Detailcolumn data={data[0]?.volAvg} heading={"Average Volume"} color={'#5367FF'}/>
        </div>
            
        </Container>
    </div>
  )
}

export default StockInfoContainer