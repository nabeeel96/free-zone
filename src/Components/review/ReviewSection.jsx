import React from "react";
import { Carousel, Button } from "antd";
import "./style.css";
import GoogleIcon from "../../assets/google-icon.png";

const reviews = [
  {
    name: "Sarah J.",
    title: "Founder of Creative Solutions LLC",
    text: "Ajman Free Zone made setting up my business a breeze! The process was quick, and the support team was incredibly helpful every step of the way. Highly recommend for anyone looking to start their entrepreneurial journey in the UAE.",
    rating: 5,
  },
  {
    name: "Ahmed R.",
    title: "Owner of TechPoint Innovations",
    text: "As a first-time entrepreneur, I was nervous about all the formalities, but Ajman Free Zone simplified everything. From approvals to bank account setup, they guided me seamlessly. Amazing experience!",
    rating: 5,
  },
  {
    name: "Lina M.",
    title: "CEO of Elegant Interiors",
    text: "Starting my design business was much easier thanks to Ajman Free Zone. The facilities are great, and the support team made everything feel effortless.",
    rating: 4,
  },
  {
    name: "Omar K.",
    title: "Freelancer",
    text: "Ajman Free Zone provided me with a cost-effective solution to run my freelance work legally. Great place for small businesses!",
    rating: 4,
  },
];

const ReviewSection = () => {
  return (
    <div className="review-container">
      <div className="wrapper-review">
        <div className="uae-heading">
          <h1>
            STORIES OF SUCCESS <br /> FROM VISIONARY ENTREPRENEURS
          </h1>
          <p>
            See how entrepreneurs like you are shaping their future with us —
            read their reviews or share your own journey on Google.
          </p>
        </div>
        <div className="google-reviews">
          <Button style={{ marginRight: "10px", borderRadius: "26px" }}>
            <img
              src={GoogleIcon}
              alt="google"
              height={12}
              style={{ marginRight: 8 }}
            />
            Google Reviews
          </Button>
          <span>4.3 Stars | 152 Reviews</span>
        </div>
        <Carousel
          autoplay
          slidesToShow={2}
          slidesToScroll={1}
          style={{ marginTop: "40px" }}
          dots={false}
        >
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="review-card">
                <div className="review-header">
                  <div className="avatar">{review.name.charAt(0)}</div>
                  <div className="review-info">
                    <p className="review-name">{review.name}</p>
                    <p className="review-title">{review.title}</p>
                  </div>
                </div>
                <div className="review-rating">{"★".repeat(review.rating)}</div>
                <div className="review-content">
                  <blockquote>“{review.text}”</blockquote>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSection;
