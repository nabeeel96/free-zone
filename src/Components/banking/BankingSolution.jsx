import React from "react";
import { Card, Col, Image, Row } from "antd";
import bankLogos from "../../assets/Group 94.png";
import arrow from "../../assets/Arrow_Up_LG.svg";
import "./style.css";

const BankingSolutionsSection = () => {
  return (
    <div className="banking-section">
      <div className="wrapper">
        <Row align={"middle"} gutter={[40, 40]}>
          <Col sm={24} md={12}>
            <div className="banking-content">
              <h1>
                EMPOWERING YOUR <br /> BUSINESS WITH TRUSTED <br /> BANKING
                SOLUTIONS
              </h1>
              <p className="banking-subtitle">
                EASY FINANCING WITH 12-MONTH INSTALLMENTS
              </p>
              <p className="banking-description">
                Partnered with trusted banks, we offer seamless{" "}
                <strong>
                  12-month <br /> installment plans
                </strong>{" "}
                to support your business needs.
              </p>
              <button type="primary" className="get-in-touch-button-uae">
                Get in touch{" "}
                <span className="icon-arrow">
                  <img src={arrow} alt="arrow" className="icon" />
                </span>
              </button>
            </div>
          </Col>
          <Col sm={24} md={12}>
            <Card style={{ borderRadius: "25px", overflow: "hidden" }}>
              <Row gutter={[30, 30]}>
                <Col span={24}>
                  <Image
                    preview={false}
                    src={bankLogos}
                    alt="bank logos"
                    width="100%"
                    height="100%"
                    style={{ objectFit: "cover" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BankingSolutionsSection;
