import React from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Bitcoin's decentralized allure mirrors NFTs' unique ownership, reshaping digital landscapes through blockchain innovation and scarcity!",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "Coinbase, a gateway to crypto, partners with NFTs, merging secure trading with blockchain creativity seamlessly experiences!",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "Metamask empowers NFT enthusiasts, merging seamless transactions with decentralized creativity on the blockchain frontier!",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "Authereum bridges security, NFT passion, pioneering a seamless blend of authentication and blockchain artistry experiences!",

    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  "Embark on your blockchain journey – effortlessly connect your
                  wallet and unlock a world of digital possibilities! "
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
