import React from 'react';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
export default function PayForm()  {
  const handlePay = () => {
    alert("Successful")
  }
  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 12,
        }}
        layout="horizontal"
      >
        <Form.Item label="City">
          <Select>
            <Select.Option value="hanoi">Hanoi</Select.Option>
            <Select.Option value="bacninh">Bac Ninh</Select.Option>
            <Select.Option value="ninhbinh">Ninh Binh</Select.Option>
            <Select.Option value="hanam">Ha Nam</Select.Option>
            <Select.Option value="haiphong">Hai Phong</Select.Option>
            <Select.Option value="haiduong">Hai Duong</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="District">
          <Input />
        </Form.Item>
        <Form.Item label="Commune">
          <Input />
        </Form.Item>
        <Form.Item label="House Number">
          <Input />
        </Form.Item>
        <Form.Item className="pay-btn__container">
          <Button className="pay-btn" onClick={handlePay}>Button</Button>
        </Form.Item>
      </Form>
    </>
  )
}
