import React from "react";
import { Card, Row, Col } from "antd";
import document from "../../assets/mask_group_20.png";
import approval from "../../assets/mask_group_21.png";
import license from "../../assets/mask_group_22.png";
import residency from "../../assets/mask_group_24.png";
import bankAccount from "../../assets/mask_group_23.png";
import arrow from "../../assets/Arrow_Up_LG.svg";

import "./style.css";

const SetupBusiness = () => {
  return (
    <div className="steps-to-setup-container">
      <div className="wrapper">
        <div className="uae-heading">
          <h1>STEPS TO SETUP BUSINESS IN UAE</h1>
          <p>
            From submitting your documents to opening your bank account, we’ve
            streamlined the process to make your business dreams a reality.
          </p>
        </div>
        <Row gutter={64} justify={"space-evenly"}>
          <Col sm={12} xs={24} lg={4}>
            <Card className="setup-business-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${document})` }}
              ></div>
            </Card>
          </Col>
          <Col sm={12} xs={24} lg={4}>
            <Card className="setup-business-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${approval})` }}
              ></div>
            </Card>
          </Col>
          <Col sm={12} xs={24} lg={4}>
            <Card className="setup-business-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${license})` }}
              ></div>
            </Card>
          </Col>
          <Col sm={12} xs={24} lg={4}>
            <Card className="setup-business-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${residency})` }}
              ></div>
            </Card>
          </Col>
          <Col sm={12} xs={24} lg={4}>
            <Card className="setup-business-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${bankAccount})` }}
              ></div>
            </Card>
          </Col>
        </Row>
        <button type="primary" className="get-in-touch-button-uae">
          Get in touch{" "}
          <span className="icon-arrow">
            <img src={arrow} alt="arrow" className="icon" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SetupBusiness;
