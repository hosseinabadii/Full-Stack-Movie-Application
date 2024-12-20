import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-900 text-white">
        <Navbar />
      </header>
      <main className="max-w-4xl mx-auto text-lg pt-8">{children}</main>
    </div>
  );
};

export default MainLayout;
