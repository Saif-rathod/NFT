import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Get started in seconds – set up your wallet effortlessly and dive into the world of digital ownership with just a few clicks!, making your mark in the vibrant world of blockchain creativity and trading converge effortlessly! ",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Craft your digital legacy effortlessly – create your own collection in minutes and showcase your unique artistic vision to the world!, making your mark in the vibrant world of blockchain creativity!",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Expand your digital portfolio – from setting up your wallet to creating your collection, start minting and trading your NFTs with ease, making your mark in the vibrant world of blockchain creativity!",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Maximize your reach – not only set up your wallet, create your collection, but also list your NFTs for sale effortlessly,making your mark in the vibrant world of blockchain creativity and trading converge effortlessly.! ",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
