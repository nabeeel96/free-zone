import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import womanImage from "../../assets/Mask Group 51.png";
import logoImage from "../../assets/Group 60.png";
import uaeFlag from "../../assets/uae-flag.png";
import pakistanFlag from "../../assets/pakistan-flag.png";
import indiaFlag from "../../assets/india-flag.png";
import usaFlag from "../../assets/usa-flag.png";

import "./style.css";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const StartNow = () => {
  const [form] = Form.useForm();
  const [selectedFlag, setSelectedFlag] = useState("+971");

  const handleFlagChange = (value) => {
    setSelectedFlag(value);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Select
      value={selectedFlag}
      onChange={handleFlagChange}
      className="flag-selector"
    >
      <Option value="+971">
        <div className="flag-option">
          <img src={uaeFlag} alt="UAE" />
          <span>+971</span>
        </div>
      </Option>
      <Option value="+92">
        <div className="flag-option">
          <img src={pakistanFlag} alt="Pakistan" />
          <span>+92</span>
        </div>
      </Option>
      <Option value="+91">
        <div className="flag-option">
          <img src={indiaFlag} alt="India" />
          <span>+91</span>
        </div>
      </Option>
      <Option value="+1">
        <div className="flag-option">
          <img src={usaFlag} alt="USA" />
          <span>+1</span>
        </div>
      </Option>
    </Select>
  );

  return (
    <div className="start-wrapper">
      <div className="start-now-container">
        <div className="content-wrapper">
          <img src={logoImage} alt="Ajman Free Zone Logo" className="logo" />
          <div className="offer-section">
            <h1>
              GET YOUR BUSINESS <br /> LICENSE +1 INVESTOR VISA <br />{" "}
              <span className="offer-section-click">IN ONE CLICK</span>{" "}
            </h1>
            <div className="pricing">
              <div>
                <p className="pay-text">PAY</p>
                <p>
                  AED <span className="price">6565</span> UPFRONT
                </p>
              </div>
              <p className="after-text">& AED 6565 AFTER 3 MONTHS</p>
            </div>
            <ul>
              <li>Up to 5 Shareholders</li>
              <li>Up to 5 Business Activities</li>
              <li>Co-Working Space with Lease Agreement</li>
              <li>Choose from 3,500+ Activities</li>
            </ul>
          </div>
          <div className="form-section">
            <img src={womanImage} alt="Woman" className="woman-image" />
            <div className="form-container">
              <h1>GET STARTED NOW</h1>
              <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                  residence: ["zhejiang", "hangzhou", "xihu"],
                  prefix: "86",
                }}
                style={{
                  maxWidth: 600,
                }}
                scrollToFirstError
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="First Name" style={{ width: "445px" }} />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" style={{ width: "445px" }} />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter your E-mail"
                    style={{ width: "445px" }}
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input
                    addonBefore={prefixSelector}
                    style={{
                      width: "445px",
                    }}
                    placeholder="50 123 4567"
                  />
                </Form.Item>
                <Form.Item
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: "Please select your country!",
                    },
                  ]}
                >
                  <Select
                    style={{ width: "445px" }}
                    placeholder="Please select your country"
                    allowClear
                  >
                    <Option value="uae">
                      <div className="flag-option">
                        <img
                          src={uaeFlag}
                          alt="UAE"
                          style={{ marginRight: "8px" }}
                        />
                        UAE
                      </div>
                    </Option>
                    <Option value="pakistan">
                      <div className="flag-option">
                        <img
                          src={pakistanFlag}
                          alt="Pakistan"
                          style={{ marginRight: "8px" }}
                        />
                        Pakistan
                      </div>
                    </Option>
                    <Option value="india">
                      <div className="flag-option">
                        <img
                          src={indiaFlag}
                          alt="India"
                          style={{ marginRight: "8px" }}
                        />
                        India
                      </div>
                    </Option>
                    <Option value="usa">
                      <div className="flag-option">
                        <img
                          src={usaFlag}
                          alt="USA"
                          style={{ marginRight: "8px" }}
                        />
                        USA
                      </div>
                    </Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartNow;
