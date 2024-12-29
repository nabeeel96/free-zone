import React from "react";
import { Row, Col } from "antd";
import forward from "../../../assets/Forward.png";
import circle from "../../../assets/Circle_Check.png";
import mouse from "../../../assets/Mouse.png";
import navigation from "../../../assets/Navigation.png";

import "./style.css";

const BusinessAfz = () => {
  return (
    <div className="business-afz">
      <div className="afz-heading">
        <h1>BENEFITS OF SETTING UP YOUR BUSINESS IN</h1>
        <h1 className="highlight">AJMAN FREE ZONE</h1>
        <p>
          Start your business effortlessly with Ajman Free Zone: instant
          licensing, zero service fees, <br /> no office required, and 3,500+
          business activities to choose from.
        </p>
      </div>
      <Row gutter={[10, 10]}>
        <Col xs={24} md={6}>
          <div className="benefit-content">
            <img
              src={forward}
              alt="Instance Business License In One Click"
              className="icon"
            />
            <h2>
              INSTANT BUSINESS <br /> LICENSE IN ONE CLICK
            </h2>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="benefit-content">
            <img
              src={circle}
              alt="Instance Business License In One Click"
              className="icon"
            />
            <h2>
              ZERO <br /> SERVICE FEE
            </h2>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="benefit-content">
            <img
              src={mouse}
              alt="Instance Business License In One Click"
              className="icon"
            />
            <h2>
              NO PHYSICAL OFFICE <br /> REQUIRED
            </h2>
          </div>
        </Col>
        <Col xs={24} md={6}>
          <div className="benefit-content">
            <img
              src={navigation}
              alt="Instance Business License In One Click"
              className="icon"
            />
            <h2>
              3500+ BUSINESS <br /> ACTIVITIES TO <br /> CHOOSE FROM
            </h2>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BusinessAfz;
