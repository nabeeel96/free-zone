import React from "react";
import { Col, Row } from "antd";
import BannerImg from "../../assets/pay-section-banner.png";
import arrow from "../../assets/Arrow_Up_LG.svg";

import "./style.css";
const AjmanPaySection = () => {
  return (
    <div className="ajman-pay-section">
      <div className="wrapper">
        <Row align={"middle"} gutter={[40, 40]}>
          <Col sm={24} lg={12}>
            <div className="ajman-pay-image">
              <img src={BannerImg} alt="Ajman Pay" />
            </div>
          </Col>
          <Col sm={24} lg={12}>
            <div className="ajman-pay-content">
              <h1>PAY EASILY WITH AJMAN PAY</h1>
              <p className="ajman-pay-subtitle">
                <span>Multiple Payment Options</span> |{" "}
                <span>Convenient & Quick</span> | <span>Trusted & Secure</span>
              </p>
              <p className="ajman-pay-description">
                Ajman Free Zone clients can now enjoy secure, hassle-free
                transactions through multiple payment options, including credit
                cards, Apple Pay, Samsung Pay, and Ajman Pay Wallet.
              </p>
              <button type="primary" className="ajman-pay-button">
                Get started{" "}
                <span className="icon-arrow">
                  <img src={arrow} alt="arrow" className="icon" />
                </span>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AjmanPaySection;
