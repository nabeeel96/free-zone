import React from "react";
import { Card, Row, Col, Image } from "antd";
import "./style.css";
import LogoImg from "../../assets/ajman-logo.png";
import FBIcon from "../../assets/facebook.svg";
import InstaIcon from "../../assets/instagram.svg";
import YoutubeIcon from "../../assets/youtube.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import TwitterIcon from "../../assets/twitter.svg";
import Phone from "../../assets/Phone.svg";
import Mail from "../../assets/Mail.svg";
import Globe from "../../assets/Globe.svg";
import Map_Pin from "../../assets/Map_Pin.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wrapper">
        <Image className="footer-logo" preview={false} src={LogoImg} />
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} lg={8}>
            <Card bordered={false} className="footer-card">
              <div className="brand-section">
                <p className="tagline">
                  Simplifying Business. <br />{" "}
                  <b className="amplifying">Amplifying Success</b>
                </p>
                <p className="description">
                  Launched in 1988, Ajman Free Zone (AFZ) is <br /> an
                  independent dynamic eco-system that <br /> offers businesses
                  and investors a sustainable <br /> environment to help
                  accelerate growth and <br />
                  development.
                </p>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card bordered={false} className="footer-card">
              <div className="contact-section">
                <p
                  className="tagline"
                  style={{ opacity: "0.23", marginBottom: "10px" }}
                >
                  <b>Contact Us</b>
                </p>
                <div className="contact-item">
                  <Image
                    src={Phone}
                    alt="Phone"
                    style={{
                      width: "22px",
                      height: "22px",
                      marginRight: "10px",
                    }}
                  />
                  <span>+971 800 2392</span>
                </div>
                <div className="contact-item">
                  <Image
                    src={Mail}
                    alt="Mail"
                    style={{
                      width: "22px",
                      height: "22px",
                      marginRight: "10px",
                    }}
                  />
                  <span>info@afz.ae</span>
                </div>
                <div className="contact-item">
                  <Image
                    src={Globe}
                    alt="Website"
                    style={{
                      width: "22px",
                      height: "22px",
                      marginRight: "10px",
                    }}
                  />
                  <a
                    href="https://www.afz.ae"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#fff" }}
                  >
                    www.afz.ae
                  </a>
                </div>
                <div className="contact-item address">
                  <Image
                    src={Map_Pin}
                    alt="Location"
                    style={{
                      width: "22px",
                      height: "22px",
                      marginRight: "10px",
                    }}
                  />
                  <span>
                    Ajman Free Zone, Sheikh Rashid Bin Saeed <br />
                    Al Maktoum Street, Ajman, UAE
                  </span>
                </div>
              </div>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card bordered={false} className="footer-card">
              <div className="social-section">
                <p
                  className="tagline"
                  style={{ opacity: "0.23", marginBottom: "10px" }}
                >
                  <b>Stay Connected</b>
                </p>
                <div className="social-icons">
                  <Image
                    preview={false}
                    src={LinkedInIcon}
                    height={40}
                    width={40}
                  />
                  <Image
                    preview={false}
                    src={InstaIcon}
                    height={40}
                    width={40}
                  />
                  <Image preview={false} src={FBIcon} height={40} width={40} />
                  <Image
                    preview={false}
                    src={TwitterIcon}
                    height={40}
                    width={40}
                  />
                  <Image
                    preview={false}
                    src={YoutubeIcon}
                    height={40}
                    width={40}
                  />
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
