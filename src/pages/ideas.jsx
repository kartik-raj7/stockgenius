import React from 'react';
import { Card, Space, Typography, Statistic, Progress, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import style from '../styles/ideas.module.scss';
import { Link } from 'react-router-dom';

const { Text } = Typography;

const ideas = () => {
  // Mock data array for recommended stocks
  const recommendedStocks=[
    {
      stockName: `Meta`,
      symbol: 'META',
      currentPrice: 33.492, 
      quantity: 15, 
      averagePrice: 22.15, 
      potentialProfitPercentage: 12.45, 
      profit:calculateProfit(33.492,22.15,15),
    },
    {
      stockName: `APPLE`,
      symbol: 'AAPL',
      currentPrice: 220.492, 
      quantity: 5, 
      averagePrice: 252.15, 
      potentialProfitPercentage: 5.45, 
      profit:calculateProfit(220.492,252.15,5),
    },
    {
      stockName: `Microsoft`,
      symbol: 'MSFT',
      currentPrice: 133.492, 
      quantity: 150, 
      averagePrice: 100.15, 
      potentialProfitPercentage: 38.56, 
      marketCap: getRandomMarketCap(),
      profit:calculateProfit(133.492,100.15,150),
    },
    {
      stockName: `Berkshire`,
      symbol: 'BKSHATH',
      currentPrice: 1050000.492, 
      quantity: 1, 
      averagePrice: 950000, 
      potentialProfitPercentage: 33.45, 
      marketCap: getRandomMarketCap(),
      profit:calculateProfit(1050000.492,950000,1),
    }
  ]
  // const recommendedStocks = Array.from({ length: 10 }, (_, index) => ({
  //   stockName: `Stock ${String.fromCharCode(65 + index)}`,
  //   symbol: String.fromCharCode(65 + index),
  //   currentPrice: getRandomNumber(50, 100), 
  //   quantity: getRandomNumber(5, 15),
  //   averagePrice: getRandomNumber(40, 90), 
  //   potentialProfitPercentage: getRandomNumber(10, 30), 
  //   marketCap: getRandomMarketCap(),
  //   image: `stock_${String.fromCharCode(65 + index).toLowerCase()}_image.jpg`, 
  // }));
  
  // Function to generate a random number within a given range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function calculateProfit(currentprice,averageprice,qty){
    return ((currentprice-averageprice)*qty/(averageprice*qty))*100
  }
  
  // Function to get a random market cap value
  function getRandomMarketCap() {
    const marketCaps = ['Large', 'Medium', 'Small'];
    return marketCaps[Math.floor(Math.random() * marketCaps.length)];
  }
  
  // Log the generated recommendedStocks array
  console.log(recommendedStocks);
  

  return (
    <div className={style.recommendedStocks}>
      <h2>Recommended Stocks</h2>
      <div className={style.stockList}>
        {recommendedStocks.map((stock) => (
          <div key={stock.symbol} className={style.stockItem} style={{ border: '1px solid black',borderRadius:'10px' }} >
            <Link to='/stock-profile'>
            <Card
              actions={[
              
              ]}

            //   style={{ border: '1px solid black',borderRadius:'10px' }}
            >
              <Space direction="vertical">
              <img alt={stock.stockName} src={'https://financialmodelingprep.com/image-stock/META.png'} style={{width:'150px',height:'150px',borderRadius:'50%'}}/>
                <Text strong>{stock.stockName}</Text>
                <Text>{`Symbol: ${stock.symbol}`}</Text>
                <Text>{`Quantity: ${stock.quantity}`}</Text>
                <Text>{`Average Price: $${stock.averagePrice.toFixed(2)}`}</Text>
                <Text>{`Current Price: $${stock.currentPrice.toFixed(2)}`}</Text>
                {/* Calculate gain/loss and percentage */}
                <Statistic
                  title="Potential Gain"
                  value={((stock.currentPrice - stock.averagePrice) * stock.quantity).toFixed(2)}
                  precision={2}
                  valueStyle={stock.currentPrice >= stock.averagePrice ? { color: '#3f8600' } : { color: '#cf1322' }}
                  prefix={stock.currentPrice >= stock.averagePrice ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                  suffix={` (${stock.potentialProfitPercentage}%)`}
                />
                <Tag key="potentialProfit" className={style.profitpot}>Potential Profit: {`${stock.profit.toFixed(2)}%`}</Tag>,
                <Tag key="marketCap">Market Cap: {stock.marketCap}</Tag>,
              </Space>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ideas;