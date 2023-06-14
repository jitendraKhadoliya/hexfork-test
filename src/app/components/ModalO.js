
import React, { useState } from 'react';
import { styled } from 'styled-components';
import { MdClose } from 'react-icons/md';
import Calendar from './calender';
import './modal.css'
import Button from './Button';
import UserForm from './UserForm';
// import { set } from "date-fns";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  height: 80%;
  max-height: 600px;
  overflow: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

const CloseModalButton = styled(MdClose)`
  color: black;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 15px;
  width: 30px;
  height: 30px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const [showUserForm, setShowUserForm] = useState(false);

  const handleNext = () => {
      setShowUserForm(true);
  };

  return (
      <>
          {showModal ? (
              <Background>
                  <ModalWrapper showModal={showModal}>
                      <ModalContent>
                          <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                          {!showUserForm ? (
                              <>
                                  <Calendar />
                                  <Button title="Next" onClick={handleNext} />
                              </>
                          ) : (
                              <UserForm showUserForm={showUserForm} setShowUserForm={setShowUserForm} />
                          )}
                      </ModalContent>
                  </ModalWrapper>
              </Background>
          ) : null}
      </>
  );
};



