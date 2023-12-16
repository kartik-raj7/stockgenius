import React, { useState } from "react";
import { Form, Input, Button, Upload, Row, Col } from "antd";
import style from "../styles/userprofile.module.scss";
const { TextArea } = Input;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UserProfile = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState(null);
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      +<div>Upload</div>
    </div>
  );
  const onFinish = (values) => {

  };
  return (
    <div className={style.profile}>
      <h2>User Profile</h2>

      <Form form={form} onFinish={onFinish} layout="vertical" className={style.userprofileform}>
        
        <Form.Item
          name="image"
          rules={[{ required: true, message: "Please upload your image!" }]}
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
        >
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4113-9faf-380c5e6a2188"
            listType="picture-circle"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </Form.Item>
        <Row className={style.userprofilerows}>
        <Col span={11}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input className={style.input}/>
        </Form.Item>
        </Col>
        <Col span={11}>
        <Form.Item
          label="Number"
          name="number"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input className={style.input}/>
        </Form.Item>
        </Col>
        </Row>
        <Row className={style.userprofilerows}>
        <Col span={11}>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <TextArea rows={4} className={style.input}/>
        </Form.Item>
        </Col>
        <Col span={11}>
        <Form.Item
          label="Monthly Investment Budget"
          name="investmentbudget"
          rules={[{ required: true, message: "Please enter a description!" }]}
        >
          <Input className={style.input}/>
        </Form.Item>
        </Col>
        </Row>
        <Row className={style.userprofilerows}>
        <Col span={11}>
        <Form.Item
          label="Occupation"
          name="occupation"
          rules={[{ required: true, message: "Please enter your occupation!" }]}
        >
          <Input className={style.input}/>
          
        </Form.Item>
        </Col>
        <Col span={11}>
        <Form.Item
          label="Salary"
          name="salary"
          rules={[{ required: true, message: "Please enter your occupation!" }]}
        >
          <Input className={style.input}/>
          
        </Form.Item>
        </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={style.userprofilesubmitbtn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserProfile;
