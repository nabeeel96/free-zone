import React from "react";
import { Button, Row, Col } from "antd";
import officeImage from '../../assets/AjmanFreezone-Original.png';

import "./style.css";

const ChooseUs = () => {
  return (
    <div className="ajman-free-zone">
      <Row className="content-row">
        <div className="text-content">
          <h1>WHY CHOOSE <br /> AJMAN FREE ZONE?</h1>
          <p>
            Ajman Free Zone is your gateway to business success in the UAE. <br /> 
            With a strategic location, cost-effective packages, and over 12,000 <br />
            thriving companies, we provide the perfect environment to grow your <br />
            business.
          </p>
          <p>
            Start your journey today—submit your details now, and our experts <br />
            will guide you through setting up your business with ease.
          </p>
          <Button type="primary" className="get-in-touch-button">
            Get in touch <span className="arrow">→</span>
          </Button>
        </div>
        
        <div className="image-container">
          <img
            src={officeImage}
            alt="Ajman Free Zone Building"
            className="building-image"
          />
        </div>
      </Row>
      
      <div className="stats-row">
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={8} className="stats">
            <h2>25,000+</h2>
            <p>Customers</p>
          </Col>
          <Col xs={24} md={8} className="stats">
            <h2>3,500+</h2>
            <p>Business Activities</p>
          </Col>
          <Col xs={24} md={8} className="stats">
            <h2>+36</h2>
            <p>Years of Experience</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChooseUs;
