"use client";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, isLoginPage }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <>
          {!isLoginPage && <Navbar />}
          {children}
          {!isLoginPage && <Footer />}
        </>
      </body>
    </html>
  );
}
