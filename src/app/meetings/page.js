"use client";

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
                <h1
                  style={{ fontFamily: "Roboto, sans-serif", fontSize: "50px" }}
                >
                  Welcome.
                </h1>
              </div>
              <p className="primary-text">
                Welcome to our website! With Hexfork, you can effortlessly
                create and schedule online meetings that fit seamlessly into
                your busy schedule. Say goodbye to the hassle of coordinating
                multiple calendars and time zones. Our user-friendly platform
                empowers you to set up virtual meetings with just a few clicks,
                ensuring smooth communication and collaboration. Whether you are
                managing a team, conducting client presentations, or hosting
                webinars, Hexfork streamlines the process, allowing you to focus
                on what truly matters. Experience the convenience of online
                meetings with Hexfork today!
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
