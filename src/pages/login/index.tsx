import { Button, Form, Input } from "antd"
import './style.scss'
import { Container } from "@components"
import { toast, ToastContainer } from "react-toastify"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"


function Login() {
  const navigate = useNavigate()
  function handleSubmit(e:any){
    if(e.username.toLowerCase() == 'admincls63' && e.password.toLowerCase() == 'cls063'){
      toast.success('Login successful', {autoClose: 1500})
      setTimeout(() => {
        navigate('/')
      }, 2000);
    }else{
      toast.error('Invalid credentials')
    }
  }

  return (
   <div style={{padding: '0 15px'}}>
    <ToastContainer/>
     <Container>
      <div className="login-wrapper">
        <h1>LOGIN</h1>
          <Form onFinish={handleSubmit}>
            <Form.Item name={'username'} hasFeedback rules={[{
              required: true,
              message: 'Please input your username!',
            },
            ]}>
              <Input prefix={
                <UserOutlined />
              } placeholder="Username" className='input-login' />
            </Form.Item>
            <Form.Item hasFeedback name={'password'} rules={[{
              required: true,
              message: 'Please input your password!',
            }]}>
              <Input.Password prefix={
                <LockOutlined/>
              } placeholder="Password" className='input-login' type="password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
      </div>
     </Container>
   </div>
  )
}

export default Login