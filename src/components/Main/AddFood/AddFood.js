import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Select,
  Upload,
} from 'antd';

const { TextArea } = Input;

export default function AddFood() {
  const [form] = Form.useForm();
  let allFoods = JSON.parse(localStorage.getItem("allFoods"))
  let name = Form.useWatch('name', form)
  let area = Form.useWatch('area', form)
  let description = Form.useWatch('description', form)


  const handleSave = () => {
    let newFood = {
      id: `${allFoods.length + 1}`,
      name: name,
      area: area,
      description: description,
      price: Math.floor(Math.random()*100),
      imgLink: "",
      rate: {
        star: 0,
        rateNum: 0
      },
      comment: [],
    }
    let newAllFoods = [...allFoods, newFood]
    localStorage.setItem("allFoods", JSON.stringify(newAllFoods))
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ marginTop: 30 }}
      >
        <Form.Item 
          label="Name" name="name"
          rules={[{ required: true, message: 'Please input food name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          label="Area" 
          name="area"
          rules={[{ required: true, message: 'Please choose the area!' }]}
        >
          <Select>
            <Select.Option value="chinese">Chinese</Select.Option>
            <Select.Option value="japanese">Japanese</Select.Option>
            <Select.Option value="european">European</Select.Option>
            <Select.Option value="thailand">Thailand</Select.Option>
            <Select.Option value="vietnamese">Vietnamese</Select.Option>
            <Select.Option value="korean">Korean</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item 
          label="Description" 
          name="description"
          rules={[{ required: true, message: 'Please input some descriptions!' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Image" valuePropName="fileList" >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button onClick={handleSave} style={{ backgroundColor: "#6495ed", color: "white" }}>Save</Button>
          <Button style={{ marginLeft: 20 }}>Cancel</Button>
        </Form.Item>
      </Form>
    </>
  )
}
