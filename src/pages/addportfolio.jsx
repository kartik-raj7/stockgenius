import React, { useState } from 'react';
import { Form, Input, Button, Space, AutoComplete } from 'antd';
import style from '../styles/addstocks.module.scss';
import { axiosGet } from '../services/api/axiosGet';
import { apiRouter } from '../services/utilities/apiRouter';
import { MdDeleteForever } from "react-icons/md";
const AddPortfolio = () => {
  const [form] = Form.useForm();
  const [stockFields, setStockFields] = useState([{ name: '', qty: '', buyPrice: '' }]);
  const [stockOptions, setStockOptions] = useState([]);
  const [sendstockData,setstockData] = useState([]);
  const onFinish = (values) => {
  const { stocks } = values;
  const updatedStockFields = sendstockData.map((stock, index) => ({
    ...stock,
    qty: stocks[index]?.qty,
    buyPrice: stocks[index]?.buyPrice,
  }));
  console.log('Received values:', { stocks: updatedStockFields });
  };
  const addStockField = () => {
    setStockFields([...stockFields, { name: '', qty: '', buyPrice: '' }]);
  };
  const onStockNameChange = async (value) => {
    setStockOptions([])
    try {
      const response = await axiosGet(`${apiRouter.SEARCH}?query=${value}`,'','search');
      setStockOptions(response.data);
    } catch (error) {
      console.error('Error fetching stock options:', error);
    }
  };
  const onSelectStock = (value, option) => {
    const { stocks } = form.getFieldsValue();
    const index = stocks.findIndex((stock) => stock.name === option.value);
    const selectedOption = stockOptions.find((opt) => opt.name === option.value);
    console.log(selectedOption)
    console.log(option)
    if (index !== -1) {
        setStockFields([...stockFields, { name: '', qty: '', buyPrice: '' }]);
      sendstockData.push({name:option.value, qty: '', buyPrice: '' ,symbol:selectedOption.symbol})
      form.setFieldsValue({ ['stocks[' + (index + 1) + '].name']: '' });
    }
  };
  console.log(stockFields);
  const deleteField=(index)=>{
    const newStockFields = [...stockFields];
    newStockFields.splice(index, 1);
    setStockFields(newStockFields);
  }

  return (
    <div style={{ color: 'black' }} className={style.addstockspage}>
      <h2 className={style.addportfolioname}>Add Portfolio</h2>
      <Form form={form} onFinish={onFinish} className={style.addstocks}>
        {stockFields.map((stock, index) => (
          <Space key={index} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
            <Form.Item
              name={['stocks', index, 'name']}
              label="Stock Name"
              rules={[{ required: true, message: 'Please enter stock name' }]}
            >
              <AutoComplete
                options={stockOptions?.map((option) => ({ value: option.name }))}
                onSearch={onStockNameChange}
                onSelect={(value, option) => onSelectStock(value, option)}
                placeholder="Type stock name"
                style={{width:'350px'}}
              />
            </Form.Item>
            <Form.Item
              name={['stocks', index, 'qty']}
              label="Quantity"
              rules={[{ required: true, message: 'Please enter quantity' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              name={['stocks', index, 'buyPrice']}
              label="Buy Price"
              rules={[{ required: true, message: 'Please enter buy price' }]}
            >
              <Input type="number" step="0.01" />
            </Form.Item>
            <div onClick={()=>deleteField(index)} style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10px'}}><MdDeleteForever style={{color:'red',fontSize:'20px'}}/></div>
          </Space>
        ))}
        <Form.Item style={{width:'80%',display:'flex',justifyContent:'flex-end'}}>
          <Button type="dashed" onClick={addStockField} icon={'+'} style={{backgroundColor:'black',color:'white'}}>
            Add Stock
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddPortfolio;
