import React from 'react';
import { Card, Space, Typography, Statistic, Progress, Tag } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import style from '../styles/ideas.module.scss';

const { Text } = Typography;

const ideas = () => {
  // Mock data array for recommended stocks
  const recommendedStocks = Array.from({ length: 10 }, (_, index) => ({
    stockName: `Stock ${String.fromCharCode(65 + index)}`,
    symbol: String.fromCharCode(65 + index),
    currentPrice: getRandomNumber(50, 100), // Replace with your desired range
    quantity: getRandomNumber(5, 15), // Replace with your desired range
    averagePrice: getRandomNumber(40, 90), // Replace with your desired range
    potentialProfitPercentage: getRandomNumber(10, 30), // Replace with your desired range
    marketCap: getRandomMarketCap(),
    image: `stock_${String.fromCharCode(65 + index).toLowerCase()}_image.jpg`, // Replace with actual image names
  }));
  
  // Function to generate a random number within a given range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
                <Tag key="potentialProfit" className={style.profitpot}>Potential Profit: {`${stock.potentialProfitPercentage}%`}</Tag>,
                <Tag key="marketCap">Market Cap: {stock.marketCap}</Tag>,
              </Space>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ideas;