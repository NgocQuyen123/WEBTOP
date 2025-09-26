"use client";
import { Checkbox, Form, Input } from 'antd';
import Button from '../button/Button';

const RegistrationForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            layout="vertical"
            className="h-full w-full max-w-md"
            style={{ maxWidth: 600, margin: 0, padding: 0 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                className="!mb-2"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Hotline"
                name="hotline"
                rules={[{ required: true, message: 'Please input your hotline!' }]}
                className="!mb-2"
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Invalid email format!' }
                ]}
                className="!mb-2"
            >
                <Input type="email" />
            </Form.Item>

            <Form.Item label={null} className="!mb-2 ">
                <Button size="lg">
                    Register Now
                </Button>
            </Form.Item>
        </Form>
    )
}
export default RegistrationForm