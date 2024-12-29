import React from "react";
import { Select, Button, InputNumber } from "antd";
import arrow from "../../assets/Arrow_Up_LG.svg";
import "./style.css";

const { Option } = Select;

const KnowYourBusiness = () => {
  return (
    <div className="business-setup-wrapper">
      <div className="business-setup-card">
        <div className="left-card">
          <h1>
            KNOW YOUR <br /> BUSINESS SETUP <br />
            COST <span className="highlight"> IN ONE CLICK </span>
          </h1>
          <p>
            Instantly calculate the cost of setting up your <br />
            dream business with our easy-to-use tool.
          </p>
          <ul>
            <li>
              Get instant and accurate cost estimates tailored to your business
              needs.
            </li>
            <li>Save time with our fast and easy-to-use interactive tool.</li>
            <li>
              Explore affordable options for setting up your business in the
              UAE.
            </li>
          </ul>
        </div>
        <div className="right-card">
          <h2>Tell us about business.</h2>
          <div className="form-group">
            <label>Which Business activity are you looking for?</label>
            <Select
              placeholder="Select Business Activity"
              style={{ width: "100%" }}
            >
              <Option value="activity1">Activity 1</Option>
              <Option value="activity2">Activity 2</Option>
            </Select>
          </div>
          <div className="form-group">
            <label>Type of Jurisdiction</label>
            <Select
              placeholder="Select Type of Jurisdiction"
              style={{ width: "100%" }}
            >
              <Option value="jurisdiction1">Jurisdiction 1</Option>
              <Option value="jurisdiction2">Jurisdiction 2</Option>
            </Select>
          </div>
          <div className="form-group">
            <label>How Many Owners?</label>
            <Select
              placeholder="Select How Many Owners"
              style={{ width: "100%" }}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </div>
          <div className="form-group">
            <label>Will you require Visa(s)?</label>
            <div className="visa-group">
              <Select
                placeholder="Select Yes/No"
                style={{ flex: 1, marginRight: "10px" }}
              >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </Select>
              <InputNumber
                min={0}
                placeholder="Number of Visa(s)"
                style={{ flex: 1 }}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Office Space Required?</label>
            <Select placeholder="Select Yes/No" style={{ width: "100%" }}>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </div>

          <button type="button" className="get-in-touch-button-business">
            Click to Calculate
            <span className="icon-arrow-business">
              <img src={arrow} alt="arrow" className="icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowYourBusiness;
