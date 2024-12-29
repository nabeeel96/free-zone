import React from "react";
import { Col, Row } from "antd";
import arrow from "../../assets/Arrow_Up_LG.svg";

import "./style.css";

const Pricing = () => {
  const packages = [
    {
      title: "KICKSTARTER PACKAGE",
      price: 5555,
      features: [
        "5 business activities on a single license",
        "Up to 5 Shareholders permitted",
        "Choose from over 3,500 business activities",
        "No hidden charges",
        "Co-working space with Lease Agreement included",
      ],
    },
    {
      title: "FREEDOM PACKAGE",
      price: 12121,
      features: [
        "1-Visa package",
        "Inclusive of all visa costs",
        "Emirates ID and Medical fees included",
        "Choose from over 120 freelance business activities",
        "Co-working space with Lease Agreement included",
      ],
    },
    {
      title: "STARTER VISA PACKAGE",
      price: 13131,
      features: [
        "1-Visa package",
        "Inclusive of all visa costs",
        "Emirates ID and Medical fees included",
        "Up to 5 Shareholders permitted",
        "Co-working space with Lease Agreement included",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      <div className="wrapper">
        <div className="uae-heading">
          <h1>LIMITLESS OPTIONS WITH OUR ALL-INCLUSIVE PACKAGES</h1>
          <p className="subtitle">
            Obtain an ideal business license that caters to your needs at
            competitive rates <strong>starting from AED 5555</strong>
          </p>
        </div>
        <div>
          <Row gutter={[20, 20]}>
            {packages.map((pkg, index) => (
              <Col sm={24} md={24} lg={8} key={index}>
                <div key={index} className="package-card">
                  <div className="package-header">{pkg.title}</div>
                  <div className="package-body">
                    <p className="price-tag">
                      <span className="aed">AED</span>{" "}
                      <span className="price-pkg">{pkg.price}</span>
                    </p>
                    <ul>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>

                    <button type="primary" className="inquire-button">
                      Inquire Now{" "}
                      <span className="icon-arrow">
                        <img src={arrow} alt="arrow" className="icon" />
                      </span>
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
