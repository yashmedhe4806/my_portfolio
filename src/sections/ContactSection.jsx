import React, { useState } from 'react';
import { Form, Input, Select, Button, notification, ConfigProvider } from 'antd';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const { TextArea } = Input;
const { Option } = Select;

export const ContactSection = () => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      notification.success({
        message: 'Conversation Request Received',
        description: `Thank you ${values.name}. I've received your notes regarding "${values.company || 'your project'}" and will reach out shortly.`,
        placement: 'bottomRight',
        style: {
          backgroundColor: '#20221F',
          color: '#F7F5EF',
          borderRadius: '12px',
          border: '1px solid #8BCF5B',
        }
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#ECE9DF]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Intro Text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-mono text-[#8BCF5B] uppercase tracking-wider font-semibold">
            INITIATE CONVERSATION
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#20221F] leading-tight">
            Tell me what you're trying to build.
          </h2>
          <p className="text-base text-[#686C63] leading-relaxed">
            You bring the problem. We can figure out the next step from there.
          </p>

          <div className="bg-[#ECE9DF]/60 p-6 rounded-2xl border border-[#ECE9DF] space-y-3">
            <span className="text-xs font-mono font-bold text-[#20221F] uppercase block">
              WHAT HAPPENS NEXT?
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#686C63]">
              <li className="flex items-center gap-2">
                <span className="text-[#8BCF5B] font-bold">1.</span>
                <span>I read your submission carefully within 24 hours.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#8BCF5B] font-bold">2.</span>
                <span>We discuss the problem before suggesting any scope.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#8BCF5B] font-bold">3.</span>
                <span>If aligned, we outline a pragmatic roadmap.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Ant Design Form */}
        <div className="lg:col-span-7 bg-[#F7F5EF] p-8 md:p-10 rounded-3xl border border-[#ECE9DF] shadow-sm">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#8BCF5B',
                colorBgContainer: '#F7F5EF',
                colorBorder: '#ECE9DF',
                colorText: '#20221F',
                borderRadius: 8,
                fontFamily: 'Inter, sans-serif',
              },
            }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#8BCF5B]/20 text-[#8BCF5B] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#20221F]">
                  Message Received.
                </h3>
                <p className="text-sm text-[#686C63] max-w-md mx-auto">
                  Thanks for sharing your goals. I will review your submission and reply with initial thoughts soon.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    form.resetFields();
                  }}
                  className="mt-4 font-mono text-xs font-bold uppercase tracking-wider"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                requiredMark={false}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Form.Item
                    name="name"
                    label="YOUR NAME"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input placeholder="Alex Morgan" size="large" />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="EMAIL ADDRESS"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email address' }
                    ]}
                  >
                    <Input placeholder="alex@company.com" size="large" />
                  </Form.Item>
                </div>

                <Form.Item
                  name="company"
                  label="BUSINESS / COMPANY (OPTIONAL)"
                >
                  <Input placeholder="Company Name or Project Title" size="large" />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="WHAT ARE YOU TRYING TO BUILD?"
                  rules={[{ required: true, message: 'Please share a brief description of what you need' }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Describe the problem, goal, or web product you are considering..."
                  />
                </Form.Item>

                <Form.Item
                  name="budget"
                  label="ESTIMATED BUDGET / SCOPE (OPTIONAL)"
                >
                  <Select placeholder="Select estimated scope range" size="large">
                    <Option value="exploratory">Exploratory / Discovery Stage</Option>
                    <Option value="small">Small Project ($2k – $5k)</Option>
                    <Option value="medium">Medium Build ($5k – $15k)</Option>
                    <Option value="custom">Custom Web Application ($15k+)</Option>
                  </Select>
                </Form.Item>

                <Form.Item className="pt-2">
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    block
                    className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wide"
                  >
                    <span>Start a conversation →</span>
                  </Button>
                </Form.Item>
              </Form>
            )}
          </ConfigProvider>
        </div>
      </div>
    </section>
  );
};
