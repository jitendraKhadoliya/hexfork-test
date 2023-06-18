import Image from 'next/image';
import Link from 'next/link';
import React, {
  useState,
  useRef,
  useEffect,
  RefObject,
  MouseEventHandler,
} from 'react';
import { FiGlobe, FiSearch } from 'react-icons/fi';
import {
  RxTriangleDown,
  RxTriangleUp,
  RxTriangleRight,
  RxTriangleLeft,
} from 'react-icons/rx';
import DropdownButton from './DropdownButton';
import DropdownButtonMobile from './DropdownButtonMobile';
import Modal from './Modal';
import '../globals.css';
import { FaBars, FaTimes } from 'react-icons/fa';

// const useOnClickOutside = (ref, handler) => {
//   useEffect(() => {
//     const listener = (event) => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);
//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]);
// };

const aboutList = ['About HexFork', 'Social Impact'];
const aboutDropdownLinks = ['/about', ''];
const careerList = [
  'Jobs',
  'Benefits',
  'Offices',
  'Life at HexFork',
  'Partners',
  'Services',
];
const careerDropdownLinks = [
  '/jobs',
  '/benefits',
  '/',
  '/',
  '/partner',
  '/services',
];

const logolist = [
  { name: 'Home', link: '/' },
  { name: 'Schedule a Meeting', link: '/meetings' },
  { name: 'Admin Panel', link: '/admin' },
];

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavabr = () => {
    setOpenMobileDropdown((prevIsOpen) => !prevIsOpen);
  };

  const updateModal = (e) => {
    setOpenModal(e);
  };

  const [isOpen, setIsOpen] = useState(false);
  // const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    // const handleScroll = () => {
    //   setPageScroll(window.scrollY >= 30);
    // };

    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenMobileDropdown(false);
      }
    };

    // window.addEventListener("scroll", handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMobileDropdown]);

  //   const handleChangeLink = (e) => {};

  return (
    <>
      <div
        className={` fixed flex items-center z-10 justify-between px-2 z-1 sm:z-10  md:px-5 md:z-10 h-20 w-full ${
          true ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div className="flex">
          <div className={`${openMobileDropdown ? 'hidden' : ''}`}>
            <div
              className="bg-transparent"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Image
                className={`cursor-pointer ease-in-out duration-500 ${
                  isOpen ? 'scale-110 filter-drop-shadow' : ''
                }  `}
                src="/white_logo.png"
                alt="logo"
                width={135}
                height={135}
                // onClick={() => setOpenModal(!openModal)}
              />
            </div>
            {isOpen && (
              <div
                className="fixed text-white ease-in-out -mt-7 duration-500 bg-slate-900 border-t-4 border-red-700 rounded-lg z-10"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <ul className="py-2">
                  {logolist.map((item, index) => (
                    <li
                      key={index}
                      className="text-white hover:bg-slate-700 mx-3 p-2  rounded-md"
                    >
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <ul className="flex items-center justify-start space-x-4">
            <li className="lg:ml-3">
              <DropdownButton
                name={'Who We Are'}
                items={aboutList}
                links={aboutDropdownLinks}
              />
            </li>
            <li className=" z-1">
              <DropdownButton
                name={'Work with Us'}
                items={careerList}
                links={careerDropdownLinks}
              />
            </li>
            <li>
              <Link
                href="/news"
                className="hidden lg:px-4 lg:py-1 hover:bg-slate-800 text-white lg:flex lg:mr-5 lg:items-center lg:justify-center hover:scale-110 rounded-lg ease-in duration-500"
              >
                News
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`flex lg:justify-end justify-center ${
            openMobileDropdown ? 'hidden' : ''
          }`}
        >
          <div className="flex justify-center items-center">
            <FiGlobe size={34} color="white" className="px-0.5 mt-2" />
          </div>
          <div className="hidden bg-white items-center rounded-full text-sm px-2 py-0.5 lg:flex md:px-5 md:py-2 md:ml-5">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="SEARCH"
              className="w-fit h-fit rounded-full focus:outline-none"
            />
            <FiSearch size={20} color="black" className="cursor-pointer" />
          </div>

          <div className="lg:flex hidden">
            <button className="bg-red-700 text-sm rounded-full mx-2 px-5 md:px-6 md:py-3 md:mx-3">
              <Link href="/login">SIGN IN</Link>
            </button>
          </div>

          {/* <button className="hidden bg-red-700 text-xs rounded-full mx-2 px-5 py-2 lg:flex md:px-6 md:py-2 md:mx-3 md:text-base">
            SIGN IN
           </button> */}
        </div>
        {!openMobileDropdown && (
          <div className="flex lg:hidden">
            {/* <Image
              src="/hamburger.png"
              alt="Hamburger"
              width={32}
              height={32}
              onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
            /> */}
            <FaBars
              size={28}
              onClick={toggleNavabr}
              className="cursor-pointer text-white ease-in-out duration-300 hover:text-red-700"
            />
          </div>
        )}
      </div>

      {
        openModal && (
          <div className="flex z-0">
            <Modal updateModal={updateModal} />
          </div>
        )

        // openModal && (
        // <div className="flex z-0">
        //   <Modal />
        // </div>)
      }

      {/* {openMobileDropdown && (
        <div className=" h-[50%] px-6 py-3 bg-gray-900">
          <ul className="items-center justify-start">
            <li className="mb-4">
              <DropdownButtonMobile
                name="Who We Are"
                items={aboutList}
                links={aboutDropdownLinks}
              />
            </li>
            <li className="mb-4">
              <DropdownButtonMobile
                name="Work with Us"
                items={careerList}
                links={careerDropdownLinks}
              />
            </li>
            <li className="mb-4">
              <Link
                href="/news"
                className="text-white rounded-sm hover:border-b-4 hover:bg-slate-800 hover:border-red-700"
              >
                News
              </Link>
            </li>
          </ul>
          <div className="flex flex-row bg-white items-center mb-4 mr-72 rounded-full text-xs px-2 py-1">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="SEARCH"
              className="basis-5/6 outline-none text-xs m-1"
            />
            <FiSearch size={18} color="black" className="basis-1/6"/>
          </div>
          <div className="flex">
            <button className="bg-red-700 text-xs rounded-full px-5 py-2 md:px-6 md:py-2 md:mx-3 md:text-base">
              SIGN IN
            </button>
          </div>
        </div>
      )} */}
      <div
        className={
          openMobileDropdown
            ? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur z-10'
            : ''
        }
      >
        <div
          ref={navbarRef}
          className={
            openMobileDropdown
              ? 'fixed z-12 left-0 top-0 w-3/5 rounded-3xl h-full bg-gradient-to-r from-red-900 to-gray-900 text-white p-5 ease-in duration-500'
              : 'fixed top-0 left-[-100%] p-10 h-full ease-in-out duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="cursor-pointer ease-in duration-500 hover:filter-shadow hover:scale-105"
                  src="/white_logo.png"
                  alt="logo"
                  width={135}
                  height={135}
                  onClick={() => setOpenMobileDropdown(false)}
                />
              </Link>
              <div
                onClick={() => setOpenMobileDropdown(false)}
                className="p-2 cursor-pointer mr-3 hover:text-red-700 ease-in duration-200 hover:scale-125"
              >
                <FaTimes size={28} />
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center items-center">
            <ul>
              <li>
                <div className="flex bg-white items-center rounded-full text-sm px-4 py-3 mb-4">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="SEARCH"
                    className="w-fit text-black h-fit rounded-full focus:outline-none"
                  />
                  <FiSearch
                    size={20}
                    color="black"
                    className="cursor-pointer"
                  />
                </div>
              </li>
              <li className="flex justify-center">
                <DropdownButtonMobile
                  name="Who We Are"
                  items={aboutList}
                  links={aboutDropdownLinks}
                />
              </li>
              <li className="flex justify-center">
                <DropdownButtonMobile
                  name="Work with Us"
                  items={careerList}
                  links={careerDropdownLinks}
                />
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-lg flex mb-4 px-8 py-2 ease-in duration-500 hover:bg-slate-700 text-white rounded-lg items-center justify-center"
                >
                  News
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-center">
                  <button className="bg-red-700 rounded-full text-lg mb-4 px-16 py-2 ease-in duration-500 hover:bg-slate-900">
                    <Link href="/login">SIGN IN</Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
