import Image from "next/image";
import { Inter } from "next/font/google";

// import Link from "next/link";
import React from "react";
// import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#252423]">
        <style jsx>
          {`
            .footer__navigation a {
              display: inline-block;
              padding: 10px;
              font-size: 11px;
              font-weight: 800;
              color: #8a8887;
              letter-spacing: 0.08em;
            }

            .footer__navigation {
              display: block;
              text-transform: uppercase;
              justify-content: space-between;
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .list--unstyled {
              margin-bottom: 0;
            }

            .list--unstyled > li {
              list-style: none;
              margin-left: 0;
            }
            .list--inline > li {
              display: inline-block;
              margin-left: 0;
            }
            .footer__navigation a:hover,
            .footer__navigation a:visited {
              color: #ffffff;
              text-decoration: underline;
            }
            .separator {
              height: 2px;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              background-image: url(/distressed-stroke.svg);
              background-repeat: repeat-x;
              background-position: 50% 50%;
              background-size: 420px 2px;
            }

            .lower-footer {
              background-color: #252423;
              color: #8a8887;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              font-size: 12px;
              margin: 0 40px;
              text-decoration: none;
              padding-top: 30px;
              padding-bottom: 30px;
            }

            .footer__cookie {
              display: block;
            }
            .footer__cookie:hover {
              color: #ffffff;
              text-decoration: underline;
            }
            .footer__small {
              display: block;
            }
            .move_top {
              margin-left: auto;
              font-weight: 500;
            }
            .move_top:hover {
              color: #ffff;
            }
            .monospace {
              letter-spacing: 0.025em;
              font-size: 0.75rem;
              line-height: 1.667;
              font-family: "Eco Coding W02 WGL4", monospace;
            }
          `}
        </style>
        <div className="container px-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex items-center">
            <Image src="/white_logo.png" alt="logo" width={80} height={10} />
            <div className="footer__navigation ml-4">
              <nav>
                <ul className="list--unstyled list--inline">
                  <li>
                    <a href="/en/press" className="">
                      PRESS
                    </a>
                  </li>
                  <li>
                    <a href="/en/security" className="">
                      SECURITY
                    </a>
                  </li>
                  <li>
                    <a href="/en/legal" className="">
                      LEGAL
                    </a>
                  </li>
                  <li>
                    <a href="/en/leadership" className="">
                      TEAM
                    </a>
                  </li>
                  <li>
                    <a href="/en/leadership" className="">
                      TERMS OF SERVICE
                    </a>
                  </li>
                  <li>
                    <a href="/en/candidate-privacy" className="">
                      PRIVACY NOTICE
                    </a>
                  </li>
                  <li>
                    <a href="/en/terms-of-service" className="">
                      USER SUPPORT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <span className="inline-flex sm:ml-auto sm:mt-4 sm:mr-3 sm:justify-start">
              {/* Facebook */}
              <a href="" className="text-gray-500">

                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" 
                  onMouseOver={({ target }) =>(target.style.color = "#d1363a")}
                  onMouseOut={({ target }) =>(target.style.color = "gray")}>
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>

                </svg>
              </a>

              {/* Twitter */}
              <a href="" className="ml-3 text-gray-500">

                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24"
                onMouseOver={({ target }) =>(target.style.color = "#d1363a")}
                onMouseOut={({ target }) =>(target.style.color = "gray")}>

                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="" className="ml-3 text-gray-500">

                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24"
                onMouseOver={({ target }) =>(target.style.color = "#d1363a")}
                onMouseOut={({ target }) =>(target.style.color = "gray")}>
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>

                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>

              {/* Youtube */}
              <a href="" className="ml-3 text-gray-500">

                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-8" viewBox="0 0 24 24"
                onMouseOver={({ target }) =>(target.style.color = "#d1363a")}
                onMouseOut={({ target }) =>(target.style.color = "gray")}> 
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" id="mainIconPathAttribute"></path> 

                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="separator"></div>
        <div className="lower-footer">
          <a href="" className="footer__cookie">
            Cookies Preference
          </a>
          <p>&nbsp;&nbsp;|</p>
          <p className="footer__small">
            &nbsp;&nbsp;© 2023 HexFork. All Right Reserved
          </p>
          <div className="move_top monospace">
            <a href="">TO THE SURFACE</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
