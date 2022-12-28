import React, { useEffect } from "react";
import { Button, Form, Input } from 'antd';
import "./index.css"
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const nav = useNavigate()
  const [data, setData] = React.useState([])
  const [, setIsLoggin] = React.useState(false)
  let url = "https://63a2cab7471b38b206fc1a55.mockapi.io/users"
  
  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)
      .then(res => res.json()))
      setData(data)
    }
    dataFetch()
  }, [url])

  const onFinish = (value) => {
    data.forEach(user => {
      if (value.username === user.username && value.password === user.password) {
        localStorage.setItem("isLoggin", JSON.stringify(user.isLoggin))
        setIsLoggin(true)
        nav("/")
        window.location.reload()
      }
    })
  }

  const onFinishFailed = () => {
    alert("Error")
  }

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
