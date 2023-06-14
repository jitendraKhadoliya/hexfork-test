'use client';

import React, { useState } from "react";
import { Modal } from "../components/ModalO";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./page.css";

function Page() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <div className="container-fluid text-center">
        <Modal showModal={showModal} setShowModal={setShowModal} />
        {/*<Navbar></Navbar>*/}
        <div className="row">
          <div className="col-6 home-container me-0 pe-0">
            <div className="home-text-section">
              <div className="content">
                <h1 style={{ fontFamily: "Roboto, sans-serif",fontSize: "50px" }}>Welcome.</h1>
              </div>
              <p className="primary-text">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              </p>
              <div className="home-btn-section">
                {/* <Button title="Website"></Button> */}
                <Button title="Schedule" onClick={openModal}></Button>

                {/* <GlobalStyle/>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page;
