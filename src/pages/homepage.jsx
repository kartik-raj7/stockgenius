import React from 'react';
import { Statistic, Space, Typography, Row, Col, Progress } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import style from '../styles/homepage.module.scss';

const { Text } = Typography;

const Homepage = () => {
  const stocks = [
    { stockName: 'Apple', symbol: 'A', currentPrice: 50, quantity: 10, averagePrice: 45 },
    { stockName: 'Meta', symbol: 'B', currentPrice: 75, quantity: 8, averagePrice: 70 },
    { stockName: 'Microsoft', symbol: 'C', currentPrice: 45, quantity: 8, averagePrice: 70 },
    { stockName: 'Grab', symbol: 'D', currentPrice: 35, quantity: 8, averagePrice: 70 },
    { stockName: 'Openinapp', symbol: 'E', currentPrice: 25, quantity: 8, averagePrice: 70 },
    { stockName: 'Unilever', symbol: 'F', currentPrice: 15, quantity: 8, averagePrice: 70 },
  ];
  const overallGainLoss = stocks.reduce((total, stock) => {
    const currentTotalValue = stock.quantity * stock.currentPrice;
    const averageTotalValue = stock.quantity * stock.averagePrice;
    return total + (currentTotalValue - averageTotalValue);
  }, 0);
  const overallGainPercentage = ((overallGainLoss / stocks.reduce((total, stock) => total + stock.quantity * stock.averagePrice, 0)) * 100).toFixed(2);
  let healthStatus;
  if (overallGainPercentage >= 40) {
    healthStatus = 'Excellent';
  } else if (overallGainPercentage >= 20) {
    healthStatus = 'Great';
  } else if (overallGainPercentage >= 10) {
    healthStatus = 'Good';
  } else if (overallGainPercentage >= 0) {
    healthStatus = 'Needs Attention';
  } else if (overallGainPercentage >= -10) {
    healthStatus = 'Poor';
  } else {
    healthStatus = 'Really Bad';
  }
  return (
    <div className={style.homepage}>
      <h2>My Portfolio</h2>
     
      <div className={style.overallStats}>
        <Statistic
          title="Overall Gain/Loss"
          value={overallGainLoss.toFixed(2)}
          precision={2}
          valueStyle={overallGainLoss >= 0 ? { color: '#3f8600' } : { color: '#cf1322' }}
          prefix={overallGainLoss >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          suffix={` (${(((overallGainLoss / stocks.reduce((total, stock) => total + stock.quantity * stock.averagePrice, 0)) * 100)).toFixed(2)}%)`}
        />
      </div>
      <div className={style.stockList}>
      <div className={style.healthmeter}>
        <h3>Portfolio Health</h3>
        <Progress percent={Math.abs(overallGainPercentage)} status={overallGainPercentage >= 0 ? 'success' : 'exception'} />
        <Text type={overallGainPercentage >= 0 ? 'success' : 'danger'}>{healthStatus}</Text>
      </div>
        {stocks.map((stock) => (
          <div key={stock.symbol} className={style.stockItem}>
            <Space direction="vertical" style={{width:'100%'}}>
            <Row style={{display:'flex'}}>
            <Col span={4}>
              <Col span={24}><Text strong >{stock.stockName}</Text></Col>
              <Col span={24}><Text>{`Symbol: ${stock.symbol}`}</Text></Col>
              </Col>
              
              <Col span={4}><Text>{`Quantity: ${stock.quantity}`}</Text></Col>
              <Col span={8}>
              <Col span={24}><Text>{`Average Price: $${stock.averagePrice.toFixed(2)}`}</Text></Col>
              <Col span={24}><Text>{`Current Price: $${stock.currentPrice.toFixed(2)}`}</Text></Col>
              </Col>
              <Col span={8}>
              <Statistic
                title="Gain/Loss"
                value={((stock.currentPrice - stock.averagePrice) * stock.quantity).toFixed(2)}
                precision={2}
                valueStyle={stock.currentPrice >= stock.averagePrice ? { color: '#3f8600' } : { color: '#cf1322' }}
                prefix={stock.currentPrice >= stock.averagePrice ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix={` (${(((stock.currentPrice - stock.averagePrice) / stock.averagePrice) * 100).toFixed(2)}%)`}
              />
              </Col>
              </Row>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;