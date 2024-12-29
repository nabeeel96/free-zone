import React from "react";
import { Collapse } from "antd";
import "./style.css";

const { Panel } = Collapse;

const PlusIcon = () => {
  return (
    <div
      style={{
        display: "inline-block",
        fontSize: "24px",
        color: "orange",
        cursor: "pointer",
      }}
    >
      &#43;
    </div>
  );
};

const PlusMinusIcons = () => {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          fontSize: "24px",
          color: "orange",
          cursor: "pointer",
        }}
      >
        &#8211;
      </div>
    </div>
  );
};

const FAQ = () => {
  const text = `
  One Click is an innovative and streamlined service offered by Ajman Free Zone that allows entrepreneurs to obtain their business license instantly, with just a single click. This service is designed to simplify the business setup process, enabling entrepreneurs to register their businesses quickly without the need for lengthy paperwork or complex procedures.
`;
  const nestedItems = [
    {
      key: "1",
      label: "What is a Designated Freezone?",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "What is the validity of licenses issued by Ajman Free Zone?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label:
        "What are the main advantages of establishing a business in an Ajman free zone?",
      children: <p>{text}</p>,
    },
  ];
  const mainItems = [
    {
      key: "1",
      label: "GENERAL",
      children: (
        <>
          <p>{text}</p>
          <Collapse
            expandIcon={({ isActive }) =>
              !isActive ? <PlusIcon /> : <PlusMinusIcons />
            }
            items={nestedItems}
            ghost
          />
        </>
      ),
    },
    {
      key: "2",
      label: "DESIGNATED FREE ZONE",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "FACILITIES & SERVICES",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "GOVERNMENT SERVICES",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "SETTING UP A BUSSINESS",
      children: <p>{text}</p>,
    },
  ];
  return (
    <div className="faq-container">
      <div className="wrapper">
        <div className="faq-header">
          <h1>Your Questions, Answered</h1>
          <p>
            Explore our FAQs for quick and clear answers to help you start and
            grow your business with ease.
          </p>
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          style={{
            borderTop: "1px solid #d9d9d9",
            borderBottom: "1px solid #d9d9d9",
            background: "none",
            borderRadius: "none",
          }}
          expandIcon={({ isActive }) =>
            !isActive ? <PlusIcon /> : <PlusMinusIcons />
          }
          items={mainItems}
        />
      </div>
    </div>
  );
};

export default FAQ;
