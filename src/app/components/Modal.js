import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./modal.css";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ updateModal }) => {
  const handleButtonClick = () => {
    updateModal(false);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-16 left-0 w-full h-full bg-black/[0.6] flex z-10 "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.3,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <motion.div
          className="absolute bg-white w-full p-6 h-52 text-black flex items-center justify-between"
          initial={{
            y: -20,
          }}
          animate={{
            y: 20,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            y: -20,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <motion.div>
            <ul
              style={{ listStyleType: "none" }}
              className="flex items-start justify-evenly flex-col"
            >
              <li>
                <Link
                  href="/meetings"
                  onClick={handleButtonClick}
                  style={{ padding: "10px", margin: "20px" }}
                  className="dropdown"
                >
                  Schedule a meeting
                </Link>
              </li>
              <br />
              <li>
                <Link
                  href="/admin"
                  onClick={handleButtonClick}
                  style={{ padding: "10px", margin: "20px" }}
                  className="dropdown"
                >
                  Admin Panel
                </Link>
              </li>
            </ul>
          </motion.div>
          <RxCross2
            size={50}
            onClick={handleButtonClick}
            className="relative bottom-10"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
