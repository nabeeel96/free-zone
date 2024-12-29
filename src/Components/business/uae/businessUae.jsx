import React from "react";
import { Row, Col } from "antd";

import circleCheck from "../../../assets/Circle_Check.png";
import radioFill from "../../../assets/Radio_Fill.png";
import chart from "../../../assets/Chart_Bar_Vertical_01.png";
import checkAll from "../../../assets/Check_All_Big.png";
import sheild from "../../../assets/Shield.png";
import mouse from "../../../assets/Mouse.png";
import arrow from "../../../assets/Arrow_Up_LG.svg";
import "./style.css";

const BusinessUAE = () => {
  return (
    <div className="business-uae">
      <div className="uae-heading">
        <h1>BENEFITS OF SETTING UP YOUR BUSINESS IN UAE</h1>
        <p>
          Starting a business in the UAE is simple with Ajman Free Zone. Enjoy
          100% ownership, tax-free income, profit repatriation, and no office
          requirements. <br />
          Secure residence visas, benefit from tax exemptions, and choose from
          3,500+ business activities in a business-friendly environment.
        </p>
      </div>
      <Row className="benefits-row">
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={circleCheck}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                Full Company <br /> Ownership
              </h4>
              <p>
                Take complete control of your business operations and finances.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={radioFill}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                Repatriate 100% <br /> of Profits
              </h4>
              <p>
                Easily transfer your earnings and capital back to your home
                country.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={chart}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                No Personal <br /> Income Tax
              </h4>
              <p>
                Keep your full salary without worrying about tax deductions.
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={checkAll}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                UAE Residency <br />
                Visa
              </h4>
              <p>Obtain visas for yourself and your family or dependents.</p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={sheild}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                Corporate Tax <br />
                and VAT Relief
              </h4>
              <p>
                Potentially qualify for exemptions from corporate tax and VAT
                (criteria apply).
              </p>
            </div>
          </div>
        </Col>
        <Col xs={24} md={4}>
          <div className="benefit-card">
            <div className="benefit-content-uae">
              <img
                src={mouse}
                alt="Instance Business License In One Click"
                className="icon"
              />
              <h4>
                Work Without <br /> a Physical Office
              </h4>
              <p>Run your business anywhere, no office needed.</p>
            </div>
          </div>
        </Col>
      </Row>
      <button type="primary" className="get-in-touch-button-uae">
        Get in touch{" "}
        <span className="icon-arrow">
          <img src={arrow} className="icon" />
        </span>
      </button>
    </div>
  );
};

export default BusinessUAE;
